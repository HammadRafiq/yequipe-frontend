import React, { Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col, Media } from "reactstrap";
import sauna from "../../../../public/assets/images/yequipe/sauna.jpg";
import pants from "../../../../public/assets/images/yequipe/pants.jpg";
import accessories from "../../../../public/assets/images/yequipe/accessories.jpg";
import arrow from "../../../../public/assets/images/yequipe/arrow.svg";
import Image from "next/image";

const Data = [
  {
    img: sauna,
    title: "Sauna Suit",
    link: "/shop/no_sidebar",
    class: "",
  },
  {
    img: pants,
    title: "Pants",
    link: "/shop/no_sidebar",
    class: "",
  },
  {
    img: accessories,
    title: "Accessories",
    link: "/shop/no_sidebar",
    class: "",
  },
];

const MasterCollectionBanner = ({ img, about, title, link, classes }) => {
  return (
    <Col md={4}>
      <Link href={link}>
        <div className={`collection-banner ${classes}`}>
          <Media src={img} className="img-fluid img-bg" alt="" />
          <div className="category-banner">
            <div className="d-flex justify-content-between align-items-center">
              <h3>{title}</h3>
              <Image src={arrow} />
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

const CollectionBanner = () => {
  return (
    <Fragment>
      <section className="section-categories section-b-space">
        <Container>
          <h2 className="pb-4">Yequipe product categories</h2>
          <Row className="partition2">
            {Data.map((data, i) => {
              return (
                <MasterCollectionBanner
                  key={i}
                  img={data.img.src}
                  about={data.about}
                  link={data.link}
                  title={data.title}
                  classes={data.class}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default CollectionBanner;
