import React, { useState, createContext } from "react"

export const CommonplaceContext = createContext()

export const CommonplaceProvider = (props) => {
  // Create arrays/objects and functions that set the contents of those arrays/objects
  const [entries, setEntries] = useState([])
  const [entryById, setEntryById] = useState({})

  // Get saved entries from database
  const getEntries = () => {
    return fetch("http://localhost:8000/entries", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setEntries);
  };

  // Get an entry from the database by an id
  const getEntryById = (entry) => {
    return fetch(`http://localhost:8000/entries/${entry.id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then(res => res.json())
      .then(setEntryById)
  }

  // Add an entry to the database
  const addEntry = entryObj => {
    return fetch("http://localhost:8000/entries", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entryObj)
    })
    .then((response) => response.json())
    .then(setEntries);
};

  // Delete an entry from the database
  const deleteEntry = entry => {
    return fetch(`http://localhost:8000/entries/${entry.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then(getEntries)
  }

  // Edit an entry object within database
  const editEntry = entry => {
    return fetch(`http://localhost:8000/entries/${entry.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
      .then(getEntries)
  }

  return (
    <CommonplaceContext.Provider value={{
      entries, getEntries, addEntry, 
      deleteEntry, editEntry, getEntryById, 
      setEntryById, entryById
    }}>
      {props.children}
    </CommonplaceContext.Provider>
  )
}
