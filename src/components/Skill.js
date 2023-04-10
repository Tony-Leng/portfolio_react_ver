import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>
                Skills
              </h2>
            </div>
            <p>Default text describing this section.</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                {/* <img src={} alt="image"/> */}
                <h5>Title of the whatever</h5>
              </div>
              <div className="item">
                {/* <img src={} alt="image"/> */}
                <h5>Title of the whatever</h5>
              </div>
              <div className="item">
                {/* <img src={} alt="image"/> */}
                <h5>Title of the whatever</h5>
              </div>
              <div className="item">
                {/* <img src={} alt="image"/> */}
                <h5>Title of the whatever</h5>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
