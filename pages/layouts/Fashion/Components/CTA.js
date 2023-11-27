import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";


const CTA = () => {
    return (
        <Fragment>
            <section className="section-cta">
                <Container>
                    <div className="wrapper d-flex align-items-center">
                        <div className="flex-fill">
                            <Row>
                                <Col lg={6}>
                                    <h1>Its still better outside</h1>
                                    <Link href="/shop/no_sidebar">
                                        <div className="btn btn-outline btn-outline-white mt-4">
                                            Explore Our Winter Collection
                                        </div>
                                    </Link>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
        </Fragment>
    );
};

export default CTA;
