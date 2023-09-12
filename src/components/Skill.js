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
import { DiFirebase } from "react-icons/di";


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
          <div className="">
            <h2 className="d-none d-sm-block d-md-none" >My Stack</h2>
            <Col className="skill-box">
              <h2 className="mystack-d">My Stack</h2>
              <div className="skills-top flex mb-5">
                <TbBrandHtml5 size={100} className="skill-icon"/>
                <TbBrandCss3 size={100} className="skill-icon"/>
                <TbBrandJavascript size={100} className="skill-icon"/>
                <TbBrandReact size={100} className="skill-icon"/>
                <TbBrandBootstrap size={100} className="skill-icon"/>
                <TbBrandTailwind size={100} className="skill-icon"/>
              </div>
              <div className="skills-bot flex">
                {/* <DiFirebase size={100} className="skill-icon"/> */}
                <DiRuby size={100} className="skill-icon"/>
                <SiRubyonrails size={100} className="skill-icon"/>
                <SiPostgresql size={100} className="skill-icon"/>
                <BsGit size={100} className="skill-icon"/>
                <BsGithub size={100} className="skill-icon"/>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  )
}
