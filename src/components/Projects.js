import { Container, Row, Tab, Nav, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import playerwon from "../components/images/playerwon.png";
import healthway from "../components/images/healthway.png";
import ecomm from "../components/images/ecommerce_product_page.PNG";
import creditcard from "../components/images/interactive_credit_card.PNG";
import ratingcard from "../components/images/interactive_rating_card.PNG";


export default function Projects() {
  const projects = [
    {
      title: 'PlayerWON',
      description: 'Description goes here',
      imgUrl: playerwon,
    },
    {
      title: 'HealthWay',
      description: 'Description goes here',
      imgUrl: healthway,
    },
    {
      title: 'eCommerce Product Page',
      description: 'Description goes here',
      imgUrl: ecomm,
      projectUrl: 'https://react-ecommerce-product-page.vercel.app/',
    },
    {
      title: 'Weather App',
      description: 'Description goes here',
      // imgUrl: weatherapp,
    },
    {
      title: 'Interactive Credit Card Details',
      description: 'Description goes here',
      imgUrl: creditcard,
      projectUrl: 'https://js-interactive-card-details-form.vercel.app/',
    },
    {
      title: 'Ratings Card',
      description: 'Description goes here',
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
            <p>Solo and group projects where I focused on frontend development. Click to check out each project.</p>
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
