import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <div className="container">
    <Navbar
      bg="light"
      expand="lg"
      className="container my-4 shadow-sm p-3 rounded rounded border border-1 "
    >
      <Container fluid>
        <Navbar.Brand href="#">NexusBerry</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Products</Nav.Link>
            <Nav.Link href="#action2">Sales</Nav.Link>
            <Nav.Link href="#action2">Customers</Nav.Link>

            <NavDropdown title="Hold" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Customers 1</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;
