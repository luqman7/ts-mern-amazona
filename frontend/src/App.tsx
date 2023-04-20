import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { sampleProduct } from "./data"

function App() {
  return (
    <div className="vh-100 d-flex flex-column">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>TS Amazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Row>
            {sampleProduct.map((product) => (
              <>
                <Col key={product.slug} sm={6} md={4} lg={3}>
                  <h2>{product.name}</h2>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <p>RM {product.price}</p>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">All right reserved</div>
      </footer>
    </div>
  )
}

export default App
