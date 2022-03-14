import React, { useContext, useEffect} from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { CommonplaceContext } from "./CommonplaceProvider"
import "./Commonplace.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

export const EntrySearch = () => {
  // const { getApiMovies, apiMovies, getApiMovieById} = useContext(MovieContext)
  const history = useHistory()
  const { entries, getEntries } = useContext(CommonplaceContext)

  useEffect(() => {
    getEntries()
  }, [])

  // // Establishes search results as value of search bar and prevents user from entering blank search
  // const searchResults = (event) => {
  //   event.preventDefault()
  //   if (event.target[0].value !== "") {
  //   getApiMovies(event.target[0].value)
  //   } else {
  //     window.alert("Please enter a movie title")
  //   }
  // }

  // // Gets specific movie from TMDb API by id and changes page to Add Movie Form
  // const addMovie = (event) => {
  //   getApiMovieById(parseInt(event.target.id)).then(() => {
  //   history.push(`/movies/add/${event.target.id}`)
  // })}

  return (
    <>
      <h1>Entries</h1>
        <ul>
          {
            entries.map(entry =>
              <li>{entry.title}</li>
            )
          }
        </ul>
      {/* <Container className="text-center">
        <h1 className="page_title">Movie Logger</h1>
        <Form className="search_form text-center" onSubmit={searchResults}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Movie Search" />
          </Form.Group>
          <Button className="search_button" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <div className="search_list">
        {
          apiMovies.map(apiMovie =>
            <Card className="search_card" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ `https://image.tmdb.org/t/p/original/${apiMovie.poster_path}`}/>
              <Card.Body className="text-center">
                <Card.Title>{apiMovie.original_title}</Card.Title>
                <Button id={apiMovie.id} onClick={addMovie} variant="dark">Add New Movie</Button>
              </Card.Body>
            </Card>
            )
        }
        </div> */}
    </>
  )
}