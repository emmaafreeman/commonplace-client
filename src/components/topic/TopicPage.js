import React, { useState, useEffect, useContext } from "react"
import { useHistory } from 'react-router-dom'
import { CommonplaceContext } from "../provider/CommonplaceProvider"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";


export const TopicPage = () => {
  const { topics, getTopics, deleteTopic, addTopic } = useContext(CommonplaceContext)
  const history = useHistory()

  useEffect(() => {
    getTopics()
  }, [])

  const [newTopic, setNewTopic] = useState({
    name: ""
  });

  // Update newTopic object with values entered into form inputs
  const handleControlledInputChange = (event) => {
    const newTopicToAdd = { ...newTopic }
    newTopicToAdd[event.target.id] = event.target.value
    setNewTopic(newTopicToAdd)
  }

  // // Add newTopic object to database, then change page to the Entry Detail page
  // const handleClickSaveTopic = (event) => {
  //   event.preventDefault()
  //   const topic = newTopic
  //   addTopic(topic)
  //     .then(getTopics())
  //       // .then(() => history.push(`/topics`))
  // }

  // Add newEntry object to database, then change page to the Entry Detail page
  const handleClickSaveTopic = (event) => {
    event.preventDefault()
    const topic = newTopic
    addTopic(topic).then(() => history.push(`/topics`))
    }

  

  const deleteThisTopic = (event) => {
    deleteTopic(parseInt(event?.target?.id))
  }
  
  // const deleteThisEntry = () => {
  //   deleteEntry(entryById)
  //     .then(() => {
  //       history.push("/")
  //     })
  // }

  return (
    <>
      <Container className="text-center">
        <h1 className="page_title">Topics</h1>
      </Container>
      <div className="form">
        <Container>
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
    </div>
      <div className="movie_list text-center">
        {
          console.log(topics)
}
{
          topics.map(topic =>
            <Card key={topic.id} className="movie_card" style={{ width: '18rem' }}>
              <Card.Body>
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