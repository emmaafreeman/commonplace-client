import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { CommonplaceContext } from "./CommonplaceProvider"
import "./Commonplace.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const EntryDetail = () => {
  const { entries, getEntries, deleteEntry, getEntryById } = useContext(CommonplaceContext)
  const [entry, setEntry] = useState({})
  const { entryId } = useParams();
  const history = useHistory()

  // Get all saved entries, then find id of the specific entry on each detail page
  // useEffect(() => {
  //   getEntries()
  //   const thisEntry = entries.find(e => e.id === parseInt(entryId))
  //   setEntry(thisEntry)
  // }, [entryId])


  useEffect(() => {
    getEntryById(entryId).then((data) => {
      setEntry(data);
    });
  }, []);
  

  // Delete an entry from database, then change page to Entry Search
  const deleteThisEntry = () => {
    deleteEntry(entry)
      .then(() => {
        history.push("/")
      })
  }

  // Finds the entry object in database, then allows user to edit by changing page to Edit Movie Form
  const editThisEntry = (event) => {
    getEntryById(entry).then(() => {
      history.push(`/entries/edit/${event.target.id}`)
    })
  }

  return (
    <>
      <Container className="detail text-center d-flex">
        <Card className="detail_card d-flex mx-auto" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{entry?.title}</Card.Title>
            <p>{entry?.body}</p>
            <Button onClick={deleteThisEntry} variant="dark">Delete Entry</Button>
            <Button className="form_button" id={entry?.id} onClick={editThisEntry} variant="dark">Edit Entry</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}