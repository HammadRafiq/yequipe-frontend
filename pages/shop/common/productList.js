import React, { useState, useContext, useEffect } from "react";
import { Col, Row, Media, Button, Spinner } from "reactstrap";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import FilterContext from "../../../helpers/filter/FilterContext";
import ProductItem from "../../../components/common/product-box/ProductBox1";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { useRouter } from "next/router";
import PostLoader from "../../../components/common/PostLoader";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";


const GET_PRODUCTS = gql`
  query products($indexFrom: Int, $limit: Int, $sort: String) {
    products(indexFrom: $indexFrom, limit: $limit, sort: $sort) {
      total
      hasMore
      items{
        _id
        title
        category
        description
        discount
        price
        sale
        stock
        images {
          alt
          src
        }
      }
    }
  }
`;

const ProductList = ({ colClass, layoutList, openSidebar, noSidebar }) => {
  const cartContext = useContext(CartContext);
  const quantity = cartContext.quantity;
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const router = useRouter();
  const [limit, setLimit] = useState(8);
  const curContext = useContext(CurrencyContext);
  const [grid, setGrid] = useState(colClass);
  const symbol = curContext.state.symbol;
  const filterContext = useContext(FilterContext);
  const selectedBrands = filterContext.selectedBrands;
  const selectedColor = filterContext.selectedColor;
  const selectedPrice = filterContext.selectedPrice;
  const selectedCategory = filterContext.state;
  const selectedSize = filterContext.selectedSize;
  const [sortBy, setSortBy] = useState("AscOrder");
  const [isLoading, setIsLoading] = useState(false);
  const [layout, setLayout] = useState(layoutList);
  const [url, setUrl] = useState();

  useEffect(() => {
    const pathname = window.location.pathname;
    setUrl(pathname);
    // router.push(
    //   `${pathname}?${filterContext.state}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}`, undefined, { shallow: true }
    // );
  }, [selectedBrands, selectedColor, selectedSize, selectedPrice]);

  var { loading, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      indexFrom: 0,
      limit: limit,
      sort: sortBy
    },
  })

  const handlePagination = () => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetchMore({
          variables: {
            indexFrom: data.products.items.length,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            setIsLoading(false);
            return {
              products: {
                __typename: prev.products.__typename,
                total: prev.products.total,
                items: [
                  ...prev.products.items,
                  ...fetchMoreResult.products.items,
                ],
                hasMore: fetchMoreResult.products.hasMore,
              },
            };
          },
        }),
      1000
    );
  };

  const removeBrand = (val) => {
    const temp = [...selectedBrands];
    temp.splice(selectedBrands.indexOf(val), 1);
    filterContext.setSelectedBrands(temp);
  };

  const removeSize = (val) => {
    const temp = [...selectedSize];
    temp.splice(selectedSize.indexOf(val), 1);
    filterContext.setSelectedSize(temp);
  };

  const removeColor = () => {
    filterContext.setSelectedColor("");
  };

  return (
    <Col className="collection-content">
      <div className="page-main-content">
        <Row>
          <Col sm="12">
            <Row>
              <Col xs="12">
                <ul className="product-filter-tags">
                  {selectedBrands.map((brand, i) => (
                    <li key={i}>
                      <a href={null} className="filter_tag">
                        {brand}
                        <i
                          className="fa fa-close"
                          onClick={() => removeBrand(brand)}
                        ></i>
                      </a>
                    </li>
                  ))}
                  {selectedColor ? (
                    <li>
                      <a href={null} className="filter_tag">
                        {selectedColor}
                        <i className="fa fa-close" onClick={removeColor}></i>
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                  {selectedSize.map((size, i) => (
                    <li key={i}>
                      <a href={null} className="filter_tag">
                        {size}
                        <i
                          className="fa fa-close"
                          onClick={() => removeSize(size)}
                        ></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <div className="collection-product-wrapper">
              <div className="product-top-filter">
                {!noSidebar ? (
                  <Row>
                    <Col xl="12">
                      <div
                        className="filter-main-btn"
                        onClick={() => openSidebar()}
                      >
                        <span className="filter-btn btn btn-theme">
                          <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                          Filter
                        </span>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
                <Row>
                  <Col>
                    <div className="product-filter-content">
                      <div className="search-count">
                        <h5>
                          {data
                            ? `Showing Products 1-${data?.products?.items?.length} of ${data?.products?.total}`
                            : "loading"}{" "}
                          Result
                        </h5>
                      </div>
                      <div
                        className="collection-grid-view"
                        style={
                          layout === "list-view"
                            ? { visibility: "hidden" }
                            : { visibility: "visible" }
                        }
                      >
                        <ul>
                          <li
                            onClick={() => setGrid("col-lg-6")}
                          >
                            {[...Array(2)].map(item => (
                              <div className="bar-item">
                              </div>
                            ))}
                          </li>
                          <li
                            onClick={() => setGrid("col-lg-4")}
                          >
                            {[...Array(3)].map(item => (
                              <div className="bar-item">
                              </div>
                            ))}
                          </li>
                          <li
                            onClick={() => setGrid("col-lg-3")}
                          >
                            {[...Array(4)].map(item => (
                              <div className="bar-item">
                              </div>
                            ))}
                          </li>
                          <li
                            onClick={() => setGrid("col-lg-2")}
                          >
                            {[...Array(6)].map(item => (
                              <div className="bar-item">
                              </div>
                            ))}
                          </li>
                        </ul>
                      </div>
                      <div className="product-page-per-view">
                        <select
                          onChange={(e) => setLimit(parseInt(e.target.value))}
                        >
                          <option value="10">10 Products Per Page</option>
                          <option value="15">15 Products Per Page</option>
                          <option value="20">20 Products Per Page</option>
                        </select>
                      </div>
                      <div className="product-page-filter">
                        <select onChange={(e) => setSortBy(e.target.value)}>
                          <option value="AscOrder">Sorting items</option>
                          <option value="HighToLow">High To Low</option>
                          <option value="LowToHigh">Low To High</option>
                          <option value="Newest">Newest</option>
                          <option value="Oldest">Oldest</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={`product-wrapper-grid ${layout}`}>
                <Row>
                  {/* Product Box */}
                  {loading ? (
                    <div className="row mx-0 margin-default mt-4">
                      <div className="col-xl-3 col-lg-4 col-6">
                        <PostLoader />
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <PostLoader />
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <PostLoader />
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <PostLoader />
                      </div>
                    </div>
                  ) : data?.products?.items?.length > 0 ? (
                    data?.products?.items?.map((product, i) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <ProductItem
                              des={true}
                              product={product}
                              symbol={symbol}
                              cartClass="cart-info cart-wrap"
                              addCompare={() =>
                                compareContext.addToCompare(product)
                              }
                              addWishlist={() =>
                                wishlistContext.addToWish(product)
                              }
                              addCart={() =>
                                cartContext.addToCart(product, quantity)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <Col xs="12">
                      <div>
                        <div className="col-sm-12 empty-cart-cls text-center">
                          <img
                            src={`/assets/images/empty-search.jpg`}
                            className="img-fluid mb-4 mx-auto"
                            alt=""
                          />
                          <h3>
                            <strong>Your Cart is Empty</strong>
                          </h3>
                          <h4>Explore more shortlist some items.</h4>
                        </div>
                      </div>
                    </Col>
                  )}
                </Row>
              </div>
              <div className="section-t-space">
                <div className="text-center">
                  <Row>
                    <Col xl="12" md="12" sm="12">
                      {data && data.products && data.products.hasMore && (
                        <Button className="load-more" onClick={() => handlePagination()}>
                          {isLoading && (
                            <Spinner animation="border" variant="light" />
                          )}
                          Load More
                        </Button>
                      )}
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ProductList;