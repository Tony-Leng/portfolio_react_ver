import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../components/images/ProfilePic.png"

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] =useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer" ];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

useEffect(() => {
  let ticker = setInterval(() => {
    tick();
  }, delta);

  return () => {clearInterval(ticker)};
}, {text})

const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

  setText(updatedText);

  if (isDeleting) {
    setDelta(prevDelta => prevDelta /2)
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
  }
}

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagLine">Welcome to my Portfolio</span>
            <h1>{`I'm a `}<span className="wrap">{text}</span></h1>
            <p>My name is Tony and I was born and raised in San Diego, California, USA to refugee parents from Cambodia. I've been living and working in Tokyo, Japan since 2017. I enjoy front-end developing and UI design for the web.
            </p>
            <button onClick={()=> console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
