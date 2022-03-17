import React, { useState, createContext } from "react"

export const CommonplaceContext = createContext()

export const CommonplaceProvider = (props) => {
  // Create arrays/objects and functions that set the contents of those arrays/objects
  const [entries, setEntries] = useState([])
  const [entryById, setEntryById] = useState({})
  const [topics, setTopics] = useState([])

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
  const getEntryById = (entryId) => {
    return fetch(`http://localhost:8000/entries/${entryId}`, {
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

    // Get saved topics from database
    const getTopics = () => {
      return fetch("http://localhost:8000/topics", {
        headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
      })
        .then((response) => response.json())
        .then(setTopics);
    };
  
    // // Get an entry from the database by an id
    // const getEntryById = (entry) => {
    //   return fetch(`http://localhost:8000/entries/${entry.id}`, {
    //     headers: {
    //       Authorization: `Token ${localStorage.getItem("lu_token")}`,
    //     },
    //   })
    //     .then(res => res.json())
    //     .then(setEntryById)
    // }
  
    // Add a topic to the database
    const addTopic = topicObj => {
      return fetch("http://localhost:8000/topics", {
        method: "POST",
        headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(topicObj)
      })
      .then((response) => response.json())
      .then(setTopics);
  };
  
    // Delete a topic from the database
    const deleteTopic = topicId => {
      return fetch(`http://localhost:8000/topics/${topicId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
      })
        .then(getTopics)
    }
  
  return (
    <CommonplaceContext.Provider value={{
      entries, getEntries, addEntry, 
      deleteEntry, editEntry, getEntryById, 
      setEntryById, entryById, topics, 
      getTopics, addTopic, deleteTopic
    }}>
      {props.children}
    </CommonplaceContext.Provider>
  )
}
