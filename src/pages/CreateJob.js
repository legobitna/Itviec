import React from 'react'
import {Form, Button,Col} from 'react-bootstrap'

export default function CreateJob() {
    return (
        <div className="App">
      <div className="searchHeader-login">
        <div className="pageMenu">
          <img
            className="logo-itviec"
            alt="itviec"
            src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"
          />
        </div>
      </div>
      <div className="middle">
        <Form className="login-form">
          <Form.Row>
              
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="url" placeholder="Enter salary" />
            </Form.Group>

          </Form.Row>

          <Form.Group controlId="formGridImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control placeholder="Image url" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Benefit</Form.Label>
            <Form.Control placeholder="Benefit 1" />
            <Form.Control placeholder="Benefit 2" />
            <Form.Control placeholder="Benefit 3" />
          </Form.Group>

          <Form.Group controlId="formGridImage">
            <Form.Label>Job Description</Form.Label>
            <Form.Control placeholder="Type Job description"  style={{height:"200px"}}/>
          </Form.Group>

          <Form.Group controlId="formGridImage">
            <Form.Label>Tags</Form.Label>
            <Form.Control placeholder="make several tags by white space (ex. React Javascript)" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>District</Form.Label>
              <Form.Control />
            </Form.Group>
          

            
          </Form.Row>

         

          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
    )
}
