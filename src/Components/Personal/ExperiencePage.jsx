import React, {useEffect} from 'react'
import {Container, Row, Col, Image, ListGroup} from 'react-bootstrap'
import Contact from '../Contact/Contact'
import ReactGA from 'react-ga'

const JobPosition = (props) => {
    return (<Container style={{marginTop: '0.1rem'}}>
        
        <div style={{backgroundColor: props.color ,display: 'flex', justifyContent: 'center', paddingTop: '1rem', paddingBottom: '1rem'}}>
            <Image roundedCircle={false} thumbnail={true} style={{ width: '100', height: '100', objectFit: 'cover' }}  variant="top" src = {props.logo} />
        </div>
        
        <div style={{padding: '0rem'}}>
            <center> 
                <h3>{props.company} </h3>
                <i> {props.title} </i>
            </center>
            
            <ListGroup >
                <ListGroup.Item> <b>Type:</b> {props.type} </ListGroup.Item>
                <ListGroup.Item> <b>Office Location: </b>
                    {props.location}
                 </ListGroup.Item>
                <ListGroup.Item> <b>Role desciption: </b> 
                    <ul style={{paddingLeft: '1rem'}}>
                        {props.description && props.description.map((desc) => {
                            return <li> {desc} </li>
                        })}   
                    </ul>
                </ListGroup.Item>
                <ListGroup.Item> <b>Concepts: </b> {props.concept} </ListGroup.Item>
            </ListGroup>
        </div>
    </Container>
    )
}
const ExperiencePage = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    return(
        <Container >
            <h3 style={{marginTop: '2rem'}}> Experience </h3>
            <hr />
            <Row>

            <Col sm={12} md={12}  
            style={{minHeight: '25rem',
             backgroundColor: 'white', marginTop: '2rem'}}>
             <JobPosition 
                logo="https://resource.globenewswire.com/Resource/Download/d94e6c3e-f117-4529-bc03-6b376222df90?size=2"
                company = "Vistaar Technologies" 
                title = "Software Engineer"
                color ="#174f8c"
                type = "Full-time"
                location = "Raheja Point 1, Ground Floor, Pt, Near, Nehru Rd, P and T Colony, Vakola, Santacruz East, Mumbai, Maharashtra 400055, India"
                description = {[
                    "Built and enhanced a robust, scalable application (SAAS Enterprise), working at the middleware and application levels", 
                    "Engaged in product enhancements, utilizing React JS and Ext JS, and implementing JavaScript on the Rhino Engine, consistently updating current solution and services",  
                    "Managed the migration of Oracle database to SQL server database, utilizing ETL process, achieving more performance", 
                    "Improved the performance of the solution by 40% through modifying database objects and code refactoring", 
                    "Leveraged agile methodologies to deliver high-quality code within fast-paced project timelines. Analyzed, Designed, Developed, Tested and Support- the complete software lifecycle"
                ]}
                concept = "Data Structure and Algorithms, Agile & Scrum Development, Object-Oriented Programming, SDLC, Testing, Deployment"
            />
            
            </Col>

                <Col sm={12} md={12}
                style={{minHeight: '25rem',
                 backgroundColor: 'white', marginTop: '2rem'}}>
                 <JobPosition 
                    logo="data:image/png;base64,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"
                    company = "Concordia University" 
                    title = "Teaching Assistant"
                    color ="#940024"
                    type = "Contract"
                    location = "1455 Boul. de Maisonneuve Ouest, Montréal, Canada, QC H3G 1M8"
                    description = {[
                        "Assisted the professor in teaching course Software Process and Engineering, providing guidance and support to students during lab sessions",
                        "Mentored development of student’s deliverables ensuring comprehensive software process principles",
                        "Regularly hold scrum meetings, accomplishing software life cycle",
                        "Updating functional design and project documentation team-wise"
                      ]}
                   concept = "Agile & Scrum Master, SVM, CI/CD, Teaching and Problem-Solving"   
                />
                
                </Col>
            </Row>
            
            <br />
            <br />
            <Container style={{marginTop: '2rem'}}>
                <h3> Volunteering Experience </h3>
                <hr/>
            </Container>
            

            <Row style={{marginTop: '2rem'}}>

                <Col sm={12} md={12} lg={3}>
                    <Image 
                        fluid 
                        src="https://camo.githubusercontent.com/10b1eea06f08917338c98d9ceb9795d51a5dcea6/68747470733a2f2f7365637572652e6d65657475707374617469632e636f6d2f70686f746f732f6576656e742f612f652f632f662f686967687265735f3435323830343735312e6a706567" 
                        objectFit="cover"
                        width="200px"
                        height="200px"/>
                </Col>
                
                <Col className='child' style={{backgroundColor: 'white'}}>
                    <h4 style={{textAlign: "start", paddingLeft: '2rem', paddingTop: '1rem'}}>Developer Circles from Facebook, Mumbai </h4>
                    <hr />
                    <ul>
                        <li> Managed and organized Facebook meetup, coordinating, scheduling, and ensuring a smooth and engaging experience for attendees.</li>
                    </ul>
                </Col>
            </Row>

            <Row style={{marginTop: '2rem'}}>
                <Col style={{backgroundColor: 'white'}}>
                    <h4 style={{textAlign: "start", paddingLeft: '2rem', paddingTop: '1rem'}}>Training and Placement Coordinator</h4>
                    <hr />
                    <ul>
                       <li>Led a team of individuals to organize on-campus career fairs, trainings, and events with HR representatives of companies.</li> 
                       <li>Collaborated with CSI and IEEE chapter of campus to facilitate industry exposure.</li> 
                    </ul>
                </Col>
                <Col sm={12} md={12} lg={3}>
                    <Image 
                        fluid 
                        src="https://universitykart.b-cdn.net//Content/upload/admin/04wqf1mt.cis.jpg" 
                        width="200px"
                        height="200px"
                    />
                </Col>
            </Row>

            <Row style={{marginTop: '2rem'}}>
                <Col sm={12} md={12} lg={3}>
                    <Image 
                        fluid 
                        src="https://upload.wikimedia.org/wikipedia/en/e/e0/Csi_logo_india.jpg" 
                        width="200px"
                        height="200px"
                    />
                </Col>
                
                <Col className='child' style={{backgroundColor: 'white'}}>
                    <h4 style={{textAlign: "start", paddingLeft: '2rem', paddingTop: '1rem'}}>Computer Society of India, DBIT </h4>
                    <hr />
                    <ul>
                        <li> Headed technical and creative team of ten individuals to organize software and programming training.</li>
                        <li> Coordinated with individuals from different industry backgrounds to organize interactive and hands-on events and workshops facilitated learning.</li>
                    </ul>
                </Col>
            </Row>

            <Row style={{backgroundColor: 'white', 
                marginTop: '2rem', 
                marginLeft: '0.1rem', 
                marginBottom: '2rem'
            }}>
                <Col >
                    <Contact />
                </Col>
            </Row>

        </Container>
    )
}

export default ExperiencePage;


