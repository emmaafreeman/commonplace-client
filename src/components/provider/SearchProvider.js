// Get movies from TMDb API by using search terms as a query
const getApiMovies = (query) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
    .then(res => res.json())
    .then(data => setApiMovies(data.results))
}

import React, { useState, createContext } from "react"

export const CommonplaceContext = createContext()

export const CommonplaceProvider = (props) => {
  // Create arrays/objects and functions that set the contents of those arrays/objects
  const [entries, setEntries] = useState([])
  const [entryById, setEntryById] = useState({})
  const [topics, setTopics] = useState([])

  // Get movies from TMDb API by using search terms as a query
  const getApiMovies = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
      .then(res => res.json())
      .then(data => setApiMovies(data.results))
  }

  return (
    <CommonplaceContext.Provider value={{

    }}>
      {props.children}
    </CommonplaceContext.Provider>
  )
}