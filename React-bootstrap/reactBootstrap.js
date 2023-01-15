import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function reactBootstrap() {
  return (
    <Card style={{width:"20rem", margin:"20px 0px 0px 20px"}} className="p-1">
        <Card.Body>
            <Card.Title>Rezaul Karim RK</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit quibusdam est tenetur nobis asperiores omnis ullam, hic laboriosam provident.</Card.Text>
            <Button type='submit'>Learn more</Button>
        </Card.Body>
    </Card>
  )
}
