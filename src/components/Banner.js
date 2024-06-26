import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import profilePic from "../components/images/ProfilePic.png"

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["I'm an aspiring Product Manager"];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

useEffect(() => {
  let ticker = setInterval(() => {
    tick();
  }, delta);

  return () => { clearInterval(ticker) };
}, [text])

const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
    setDelta(prevDelta => prevDelta / 2);
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setIndex(prevIndex => prevIndex - 1);
    setDelta(period);
  } else if (isDeleting && updatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setIndex(1);
    setDelta(500);
  } else {
    setIndex(prevIndex => prevIndex + 1);
  }
}

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col className="intro-text" xs={12} md={6} xl={7}>
            <span className="tagline">Hi, I'm Tony.</span>
            <h1>I'm an aspiring Product Manager</h1>
            {/* <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='["Frontend Web Developer", "UI/UX Designer"]'><span className="wrap">{text}</span></span></h1> */}
            <p>I was born and raised in San Diego, California, USA to refugee parents from Cambodia. I've been living and working in Tokyo, Japan since 2017. My aim is to create products that help people by existing at the intersection between business, design and engineering.
            </p>
            <button className="hidden-sm" onClick={()=> window.location = 'mailto:lengtk@gmail.com'}>Contact Me <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={profilePic} alt="Profile Image"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
