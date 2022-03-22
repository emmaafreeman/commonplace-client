import React, { useContext, useEffect} from "react"
import { Link, useHistory} from "react-router-dom"
import { CommonplaceContext } from "../provider/CommonplaceProvider"
import "./Commonplace.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"


export const EntrySearch = () => {
  const { entries, getEntries, setSearchResults, searchResults, searchEntries } = useContext(CommonplaceContext)
  
  // Ternary to display either all user entries or the list of search results
  const searchList = searchResults ? true : false
  
  // Null variable to set search results with when page loads
  const initialSearchResults = null

  // Get all existing entries associated with logged-in user
  useEffect(() => {
    getEntries()
  }, []);

  // Sets searchResults array with null variable on page render so that entries array displays first
  useEffect(() => {
    setSearchResults(initialSearchResults)
  }, []);


  // Establishes search results as value of search bar and prevents user from entering blank search
  const currentSearchResults = (event) => {
    event.preventDefault()
    if (event.target[0].value !== "") {
    searchEntries(event.target[0].value)
    } else {
      window.alert("Please enter a search term")
    }
  }

  return (
    <>
      <Container className="text-center">
        <h1 className="page_title"></h1>
        <Form className="search_form text-center" onSubmit={currentSearchResults} >
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Entry Search" />
          </Form.Group>
          <Button className="search_button" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <div className="search_list"> { searchList ?
          searchResults.map(result =>
            <Card key={result.id} className="search_card" style={{ width: '18rem' }}>
              <Card.Body className="text-center">
                <Link className="text-black" to={`/entries/detail/${result.id}`}>{result.title}</Link>
              </Card.Body>
            </Card>
            ) 
          :
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