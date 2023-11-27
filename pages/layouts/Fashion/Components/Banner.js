import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";

const Data = [
  {
    img: "home1",
    title: "welcome to fashion",
    desc: "men fashion",
    link: "/left-sidebar/collection ",
  },
  {
    img: "home2",
    title: "welcome to fashion",
    desc: "women fashion",
    link: "/left-sidebar/collection ",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0 section-banner">
        <Container>
          <div className="wrapper d-flex align-items-center">
            <div className="flex-fill">
              <Row>
                <Col lg={6}>
                  <h1>Explore Our Innovative Sports Support</h1>
                  <p className="body1 py-3">
                    Experience the Power of Our Premium Sauna Suits - Elevate Your Workouts, Maximize Results, and Reach Your Fitness Goals in Style!
                  </p>
                  <Link href="/shop/no_sidebar">
                    <div className="btn btn-outline btn-outline-white">
                      Shop now
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

export default Banner;
