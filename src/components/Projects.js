import { Container, Row, Tab, Nav, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import playerwon from "../components/images/playerwon.png";
import healthway3 from "../components/images/healthway3.png";
import weatherapp from "../components/images/weather_app.PNG";
import ecomm from "../components/images/ecommerce_product_page.PNG";
import creditcard from "../components/images/interactive_credit_card.PNG";
import ratingcard from "../components/images/interactive_rating_card.PNG";


export default function Projects() {
  const projects = [
    // {
    //   title: 'PlayerWON',
    //   description: 'PlayerWON is a marketplace app made for gamers looking for game coaches. My main roles for this project were UI design and frontend development.',
    //   imgUrl: playerwon,
    //   projectUrl: 'Coming Soon',
    // },
    // {
    //   title: 'HealthWay',
    //   description: 'HealthWay is an app made for tracking healtheck progress and paperwork. My main roles for this project were UI design and frontend development.',
    //   imgUrl: healthway3,
    //   projectUrl: 'Coming Soon',
    // },
    {
      title: 'eCommerce Product Page',
      description: 'This is a frontend project found on Frontend Mentor whose aim is to replicate the design as closely as possible. I used React as the JS framework and this was my first experience with Tailwind.',
      imgUrl: ecomm,
      projectUrl: 'https://react-ecommerce-product-page.vercel.app/',
    },
    {
      title: 'Weather App',
      description: 'Made with HTML, CSS, and JS, this app pulls info from the OpenWeather API. My main focus here was practicing how to call APIs with JS.',
      imgUrl: weatherapp,
      projectUrl: 'https://js-weather-app-kappa.vercel.app/',
    },
    {
      title: 'Interactive Credit Card Details',
      description: 'Another project from Frontend Mentor, this project is made with HTML, CSS, and JS. My main focus was practicing DOM manipulation and form validation.',
      imgUrl: creditcard,
      projectUrl: 'https://js-interactive-card-details-form.vercel.app/',
    },
    {
      title: 'Ratings Card',
      description: 'A simple project also from Frontend Mentor, it is made with HTML, CSS, and JS. My main focus was practicing handling user interactions and updating the DOM.',
      imgUrl: ratingcard,
      projectUrl: 'https://js-interactive-rating-component-main.vercel.app/',
    }
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            {/* <p>Solo and group projects where I focused on frontend development. Click to check out each project.</p> */}
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
            {/* <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey='first'>Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Tab TWo</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" disabled>Tab Three</Nav.Link>
              </Nav.Item>
            </Nav> */}
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey='second'>Filler</Tab.Pane>
              <Tab.Pane eventKey='third'>Filler</Tab.Pane>
          </Tab.Content>
          </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )


}
