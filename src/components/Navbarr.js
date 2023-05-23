import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";

function Navbarr( { settext, setrate} ) {
  return (
    
    <div>
        <Navbar bg="dark" expand="lg" variant='dark' >
      <Container fluid>
        <Navbar.Brand className='brand' href="#">Popcornflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <img
              src="https://img.freepik.com/vecteurs-premium/popcorn-dans-baignoire-rayee_157999-54.jpg?w=2000"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='home' href="#action1">Home</Nav.Link>
            
          </Nav>
          <div className='rating_navbar' style={{ marginRight:'20px'}}>
          <ReactStars
    count={5}
    size={24}
    activeColor="red"
    onChange={(newRating)=>setrate(newRating)}
  />
  </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => settext(e.target.value) }
            />
            <Button className='btn' variant="outline-success" style={{backgroundColor:"red" , border:'none'}} >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr