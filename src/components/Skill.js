import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandBootstrap } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";


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
            <p>Here's my Tech Stack.</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <TbBrandHtml5 size={100}/>
              <TbBrandCss3 size={100}/>
              <TbBrandJavascript size={100}/>
              <TbBrandReact size={100}/>
              <TbBrandBootstrap size={100}/>
              <TbBrandTailwind size={100}/>
              <DiRuby size={100}/>
              <SiRubyonrails size={100}/>
              <SiPostgresql size={100}/>
              <BsGit size={100}/>
              <BsGithub size={100}/>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
