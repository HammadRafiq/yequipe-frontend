import React, { Fragment } from 'react'
import { Col, Container, Media, Row } from 'reactstrap'
const ActivitiesImg = "/assets/images/yequipe/activities.png"

const headings = ["Road Running", "Gym", "Lifestyle", "Hiking And Outdoor", "Sports"]

const Activities = () => {
    return (
        <Fragment>
            <section className="section-activities section-b-space">
                <Container>
                    <div className='content-wrapper'>
                        <Row style={{ alignItems: "center" }}>
                            <Col xs={12} md={8}>
                                <h3>ACTIVITIES</h3>
                                {headings.map(item => (
                                    <div>
                                        <h2 className='cool-link'>{item}</h2>
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} md={4}>
                                <Media src={ActivitiesImg} style={{ width: "100%" }} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default Activities