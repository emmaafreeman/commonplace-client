import React, { useContext, useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { CommonplaceContext } from "../provider/CommonplaceProvider.js"
import "./Commonplace.css"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const EditEntryForm = () => {
  const { editEntry, entryById, topics, getTopics} = useContext(CommonplaceContext)
  const history = useHistory();

  // Get all existing topics associated with logged-in user
  useEffect(() => {
    getTopics()
  }, [])

  // Create new object for form to update and add to database
  const [entryToEdit, setEntryToEdit] = useState({
    id: entryById.id,
    title: entryById.title,
    body: entryById.body,
    entry_topics: []
  });

  // Update entryToEdit object with values entered into form inputs
  const handleControlledInputChange = (event) => {
    const newEntryToEdit = { ...entryToEdit }
    newEntryToEdit[event.target.id] = event.target.value
    setEntryToEdit(newEntryToEdit)
  }

  // Edit entry object in database, then change page to the Entry Detail page
  const handleClickEditEntry = (event) => {
    event.preventDefault()
    editEntry(entryToEdit).then(() => history.push(`/entries/detail/${entryToEdit.id}`))
    }
  
  // When checkbox is clicked, value is added to entryToEdit object
  const handleEntryTopicsPush = (event) => {
    entryToEdit.entry_topics.push(event.target.id)
  }  

  return (
    <div className="form">
    <Container>
      <Form className="text-center">
        <h2 className="page_title"> Edit Entry </h2>

        <Form.Group className="mb-3">
          <Form.Control type="text" id="title" placeholder="Title" value={entryToEdit.title} onChange={handleControlledInputChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" id="body" placeholder="Body" value={entryToEdit.body} onChange={handleControlledInputChange} />
        </Form.Group>
        
        <div>
          {topics.map(topic =>
            <Form.Check key={topic.id} type="checkbox" id={topic.id} label={topic.name} onClick={handleEntryTopicsPush}/>
          )}
        </div>
        
        <Button variant="dark" type="submit" onClick={handleClickEditEntry}>
          Save Entry
        </Button>
        <Button className="form_button" variant="dark" type="submit" onClick={() => history.push("/")}>
          Cancel
        </Button>
      </Form>
    </Container>
    </div>
  )
}

