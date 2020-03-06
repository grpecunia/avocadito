import React from "react";
import "./App.css";
import { Navbar, Nav, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Avocadito.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#ben">Benefits</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x400?avocado"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Avocaditos</h3>
            <p>We don't play with avocados, we eat them</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x401?avocado"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Avocadito</h3>
            <p>And they are delicious</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/801x400?avocado"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Aguacate</h3>
            <p>That's now a spanish avocado :)</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <hr
          className="featurette-divider"
          style={{ paddingBottom: "40px" }}
          id="howTo"
        />

        <div
          className="row featurette"
          style={{ paddingBottom: "50px" }}
          id="howTo"
        >
          <div
            className="col-md-7"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          >
            <br />
            <h2 className="featurette-heading">
              What are the benefits of{" "}
              <span className="text-muted">Avocadito?</span>
            </h2>
            <p className="lead">Very simple! They are 1,2,3</p>
            <a href="/#top">
              <button className="btn btn-success center">
                Groovy Avocadito
              </button>
            </a>
            <br />
          </div>
          <div
            className="col-md-5"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          >
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80"
              alt="Avocado"
            />
          </div>
        </div>
        <hr
          className="featurette-divider"
          style={{ paddingTop: "40px", paddingBottom: "40px" }}
        />

        <div className="row props" style={{ paddingBottom: "60px" }}>
          <div
            className="col-lg-3"
            style={{
              paddingBottom: "40px",
              paddingTop: "40px",
              backgroundColor: "#e9ecef",
              textAlign: "center",
              alignItems: "center"
            }}
          >
            <img
              className="rounded-circle"
              src="https://images.unsplash.com/photo-1573566291259-fd494a326b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80"
              alt=""
              width="140"
              height="140"
            />
            <br />
            <br />
            <h2>Avocado Data</h2>
            <br />
            <p>Lorem ipsum - we need text</p>
          </div>
          <br />
          <br />
          <div
            className="col-lg-3 offset-1"
            style={{
              paddingBottom: "40px",
              paddingTop: "40px",
              backgroundColor: "#e9ecef",
              textAlign: "center",
              alignItems: "center"
            }}
          >
            <img
              className="rounded-circle"
              src="https://images.unsplash.com/photo-1573566291259-fd494a326b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80"
              alt=""
              width="140"
              height="140"
            />
            <br />
            <br />
            <h2>Avocado Data</h2>
            <br />
            <p>Lorem ipsum - we need text</p>
          </div>
          <br />
          <br />
          <div
            className="col-lg-3 offset-1"
            style={{
              paddingBottom: "40px",
              paddingTop: "40px",
              backgroundColor: "#e9ecef",
              textAlign: "center",
              alignItems: "center"
            }}
          >
            <img
              className="rounded-circle"
              src="https://images.unsplash.com/photo-1573566291259-fd494a326b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80"
              alt=""
              width="140"
              height="140"
            />
            <br />
            <br />
            <h2>Avocado Data</h2>
            <br />
            <p>Lorem ipsum - we need text</p>
          </div>
        </div>
        <hr
          className="featurette-divider"
          style={{ paddingTop: "40px", paddingBottom: "40px" }}
        />

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/800x400?avocado"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Avocaditos</h3>
              <p>We don't play with avocados, we eat them</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/800x401?avocado"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Avocadito</h3>
              <p>And they are delicious</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/801x400?avocado"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Aguacate</h3>
              <p>That's now a spanish avocado :)</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <hr
          className="featurette-divider"
          style={{paddingBottom: "40px" }}
        />

        <div className="row props" style={{ paddingBottom: "60px" }}>
          <div
            className="col-lg-3"
            style={{
              paddingBottom: "40px",
              paddingTop: "40px",
              backgroundColor: "#e9ecef",
              textAlign: "center",
              alignItems: "center"
            }}
          >
            <img
              className="rounded-circle"
              src="https://images.unsplash.com/photo-1573566291259-fd494a326b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80"
              alt=""
              width="140"
              height="140"
            />
            <br />
            <br />
            <h2>Avocado Data</h2>
            <br />
            <p>Lorem ipsum - we need text</p>
          </div>
          <br />
          <br />
          <div
            className="col-lg-3 offset-1"
            style={{
              paddingBottom: "40px",
              paddingTop: "40px",
              backgroundColor: "#e9ecef",
              textAlign: "center",
              alignItems: "center"
            }}
          >
            <img
              className="rounded-circle"
              src="https://images.unsplash.com/photo-1573566291259-fd494a326b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80"
              alt=""
              width="140"
              height="140"
            />
            <br />
            <br />
            <h2>Avocado Data</h2>
            <br />
            <p>Lorem ipsum - we need text</p>
          </div>
          <br />
          <br />
          <div
            className="col-lg-3 offset-1"
            style={{
              paddingBottom: "40px",
              paddingTop: "40px",
              backgroundColor: "#e9ecef",
              textAlign: "center",
              alignItems: "center"
            }}
          >
            <img
              className="rounded-circle"
              src="https://images.unsplash.com/photo-1573566291259-fd494a326b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80"
              alt=""
              width="140"
              height="140"
            />
            <br />
            <br />
            <h2>Avocado Data</h2>
            <br />
            <p>Lorem ipsum - we need text</p>
          </div>
        </div>
      </div>
      <footer
        className="page-footer font-small blue pt-4"
        style={{
          backgroundColor: "green",
          paddingTop: "40px",
          paddingBottom: "40px",
          color: "white",
          textDecoration: "none"
        }}
      >
        <div
          className="container-fluid text-center text-md-left container"
          style={{ paddingTop: "40px" }}
        >
          <div className="row" style={{ display: "align-space-evenly" }}>
            <div className="col-md-6 mt-md-0 mt-3">
              <h5>About the Avocadito Project</h5>
              <p>
                Avocadito is a hackathon project from Ironhack. It is also
                intended as a tool for data analysts and/or novel curious
                thinkers that want to dive into analysis of stock market
                information. <br />
                <br />
              </p>
            </div>

            <hr
              className="clearfix w-100 d-md-none pb-3"
              style={{ paddingLeft: "10px" }}
            />

            <div
              className="col-md-3 mb-md-0 mb-3"
              style={{ textAlign: "center" }}
            >
              <h5 className="text-uppercase">Proudly Originated at</h5>
              <br />
              <a
                href="https://www.ironhack.com/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4017/s300/logo-ironhack-blue.png"
                  alt="Ironhack"
                  width="120vw"
                  height="120vh"
                />
              </a>
              <br />
              <br />
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase" style={{ textAlign: "center" }}>
                Links
              </h5>

              <ul className="list-unstyled" style={{ textAlign: "center" }}>
                <li>
                  <a
                    href="https://docs.quandl.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Recipes
                  </a>
                </li>
                <li>
                  <a
                    href="https://react-google-charts.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stories
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/axios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Benefits
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
