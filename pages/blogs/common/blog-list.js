import React from "react";
import { Col, Media, Row } from "reactstrap";
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/client";
import moment from "moment"
import PostLoader from "../../../components/common/PostLoader";

const GET_BLOGS = gql`
  query blogs{
    blogs{
      items{
        title
        desc
        date
        img{
          alt
          src
        }
      }
    }
  }
`;

const BlogList = () => {
  var { data, loading } = useQuery(GET_BLOGS);

  return (
    <>
      {loading ? (
        <div className="row mx-0 margin-default mt-4">
          <div className="col-12">
            <PostLoader />
          </div>
        </div>
      ) :
        data?.blogs?.items?.length > 0 ?
          data?.blogs?.items?.map((item, i) => (
            <Row className="blog-media" key={i}>
              <Col xl="5">
                <div className="blog-left">
                  <Media
                    src={item.img.src}
                    className="img-fluid blur-up lazyload bg-img"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </Col>
              <Col xl="7">
                <div className="blog-right">
                  <div>
                    <h6 style={{ color: "#747474" }}>
                      {moment(item.date).format("LL")}
                    </h6>
                    <a href="#">
                      <h4>{item.title}</h4>
                    </a>
                    {/* <ul className="post-social">
                  <li>Posted By : Admin Admin</li>
                  <li>
                    <i className="fa fa-heart"></i> 5 Hits
                  </li>
                  <li>
                    <i className="fa fa-comments"></i> 10 Comment
                  </li>
                </ul> */}
                    <p
                      style={{ overflow: "hidden", display: "-webkit-box", lineClamp: 4, WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          )) :
          (
            <div className="mt-4">
              No blogs found
            </div>
          )
      }
    </>
  );
};

export default BlogList;
