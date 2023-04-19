import { Col } from 'react-bootstrap';

export default function ProjectCard({title, description, imgUrl, projectUrl}) {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx' >
        <img src={imgUrl} alt=''/>
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <a href={projectUrl} target='_blank' rel="noopener noreferrer"><button className='projectBtn'>View Project</button></a>
        </div>
      </div>
    </Col>
  )
}
