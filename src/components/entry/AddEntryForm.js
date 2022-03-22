import React, { useContext, useState, useEffect} from "react"
import { useHistory } from 'react-router-dom';
import { CommonplaceContext } from "../provider/CommonplaceProvider.js"
import "./Commonplace.css"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const AddEntryForm = () => {
  const { addEntry, topics, getTopics } = useContext(CommonplaceContext)
  const history = useHistory();

  // Get all existing topics associated with logged-in user
  useEffect(() => {
    getTopics()
  }, [])

  // Create new object for form to update and add to database
  const [newEntry, setNewEntry] = useState({
    title: "",
    body: "",
    entry_topics: []
  });

  // Update newEntry object with values entered into form inputs
  const handleControlledInputChange = (event) => {
    const newEntryToAdd = { ...newEntry }
    newEntryToAdd[event.target.id] = event.target.value
    setNewEntry(newEntryToAdd)
  }

  // Add newEntry object to database, then change page to the Entry Detail page
  const handleClickSaveEntry = (event) => {
    event.preventDefault()
    addEntry(newEntry).then((entry) => history.push(`/entries/detail/${entry.id}`))
    }

  // When checkbox is clicked, value is added to newEntry object
  const handleEntryTopicsPush = (event) => {
    newEntry.entry_topics.push(event.target.id)
  }

  return (
    <div className="form">
    <Container>
      <Form className="text-center">
        <h2 className="page_title"> Add New Entry </h2>

        <Form.Group className="mb-3">
          <Form.Control type="text" id="title" placeholder="Title" value={newEntry.title} onChange={handleControlledInputChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" id="body" placeholder="Body" value={newEntry.body} onChange={handleControlledInputChange} />
        </Form.Group>
        
        <div>
          {topics.map(topic =>
            <Form.Check key={topic.id} type="checkbox" id={topic.id} label={topic.name} onClick={handleEntryTopicsPush}/>
          )}
        </div>
        
        <Button variant="dark" type="submit" onClick={handleClickSaveEntry}>
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