import React, { useState, useEffect, useContext } from "react"
import { useHistory } from 'react-router-dom'
import { CommonplaceContext } from "../provider/CommonplaceProvider"
import '../Commonplace.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";


export const TopicPage = () => {
  const { topics, getTopics, deleteTopic, addTopic } = useContext(CommonplaceContext)
  const history = useHistory()

  // Get all existing topics associated with logged-in user
  useEffect(() => {
    getTopics()
  }, [])

  // Create new object for form to update and add to database
  const [newTopic, setNewTopic] = useState({
    name: ""
  });

  // Update newTopic object with values entered into form inputs
  const handleControlledInputChange = (event) => {
    const newTopicToAdd = { ...newTopic }
    newTopicToAdd[event.target.id] = event.target.value
    setNewTopic(newTopicToAdd)
  }

  // Add newTopic object to database, then re-render Topics page
  const handleClickSaveTopic = (event) => {
    event.preventDefault()
    const topic = newTopic
    addTopic(topic).then(() => history.push(`/topics`))
  }

  // Delete a topic from database
  const deleteThisTopic = (event) => {
    deleteTopic(parseInt(event?.target?.id))
  }

  return (
    <>
      <Container className="form">
        <Form className="text-center">
          <h2 className="page_title"> Add New Topic </h2>

          <Form.Group className="mb-3">
            <Form.Control type="text" id="name" placeholder="Topic name" value={newTopic.name} onChange={handleControlledInputChange} />
          </Form.Group>

          <Button variant="dark" type="submit" onClick={handleClickSaveTopic}>
            Save Topic
          </Button>
        </Form>
      </Container>
      <div className="search_list">
        {
          topics.map(topic =>
            <Card key={topic.id} className="search_card" style={{ width: '18rem' }}>
              <Card.Body className="text-center">
                <Card.Title>{topic?.name}</Card.Title>
                <Button id={topic?.id} onClick={deleteThisTopic} variant="dark">Delete</Button>
              </Card.Body>
            </Card>
          )
        }
      </div>
    </>
  )
}