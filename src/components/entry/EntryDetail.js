import React, { useContext, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { CommonplaceContext } from "../provider/CommonplaceProvider"
import "../Commonplace.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export const EntryDetail = () => {
  const { deleteEntry, getEntryById, entryById } = useContext(CommonplaceContext)
  const { entryId } = useParams();
  const history = useHistory()

  // Get saved entry by id
  useEffect(() => {
    getEntryById(entryId)
  }, []);


  // Delete an entry from database, then change page to Entry Search
  const deleteThisEntry = () => {
    deleteEntry(entryById)
      .then(() => {
        history.push("/")
      })
  }

  // Finds the entry object in database, then changes to Edit Form
  const editThisEntry = (event) => {
    getEntryById(entryById.id).then(() => {
      history.push(`/entries/edit/${event.target.id}`)
    })
  }

  return (
    <>
      <Container className="detail text-center d-flex">
        <Card className="detail_card d-flex mx-auto">
          <Card.Body>
            <Card.Title>{entryById?.title}</Card.Title>
            <p>{entryById?.body}</p>
            <div className="detail_card_topics">
              {
                entryById?.entry_topics?.map(topic =>
                  <Card key={topic.id} className="detail_card_topic text-center">
                    <Card.Text>{topic?.name}</Card.Text>
                  </Card>
                )
              }
            </div>
            <Button onClick={deleteThisEntry} variant="dark">Delete Entry</Button>
            <Button className="form_button" id={entryById?.id} onClick={editThisEntry} variant="dark">Edit Entry</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}