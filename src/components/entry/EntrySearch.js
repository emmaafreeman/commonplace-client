import React, { useContext, useEffect} from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { CommonplaceContext } from "../provider/CommonplaceProvider"
import "./Commonplace.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"


export const EntrySearch = () => {
  // const { getApiMovies, apiMovies, getApiMovieById} = useContext(MovieContext)
  const history = useHistory()
  const { entries, getEntries } = useContext(CommonplaceContext)

  useEffect(() => {
    getEntries()
  }, []);


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
      {/* <h1>Entries</h1>
        <ul>
          {
            entries.map(entry =>
              <li key={entry.id}>
                <Link className="text-black" to={`/entries/detail/${entry.id}`}>{entry.title}</Link>
              </li>
            )
          }
        </ul> */}
      <Container className="text-center">
        <h1 className="page_title"></h1>
        <Form className="search_form text-center" >
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Entry Search" />
          </Form.Group>
          <Button className="search_button" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <div className="search_list">
        {
          entries.map(entry =>
            <Card key={entry.id} className="search_card" style={{ width: '18rem' }}>
              <Card.Body className="text-center">
                <Link className="text-black" to={`/entries/detail/${entry.id}`}>{entry.title}</Link>
              </Card.Body>
            </Card>
            )
        }
        </div>
    </>
  )
}