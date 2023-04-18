import { Col } from 'react-bootstrap';

export default function ProjectCard({title, description, imgUrl, projectUrl}) {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx' >
        <img src={imgUrl} alt=''/>
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          {/* <button className='projectBtn' onClick={projectUrl}>View Project</button> */}
        </div>
      </div>
    </Col>
  )
}
