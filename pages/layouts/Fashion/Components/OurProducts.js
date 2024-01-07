import React, { useContext } from 'react'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Product4 } from '../../../../services/script'
import ProductItem from '../../../../components/common/product-box/ProductBox1'
import CartContext from '../../../../helpers/cart'
import { gql, useQuery } from "@apollo/client";


const data1 = [
    {
        "__typename": "Product",
        "id": 1,
        "title": "Shirt",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        "type": "fashion",
        "brand": "nike",
        "category": "Women",
        "price": "145",
        "new": "true",
        "stock": 5,
        "sale": "true",
        "discount": "40",
        "variants": [],
        "images": [
            {
                "__typename": "Images",
                "image_id": 111,
                "id": "1.1",
                "alt": "yellow",
                "src": "/assets/images/yequipe/product1.jpg"
            },
        ]
    },
    {
        "__typename": "Product",
        "id": 2,
        "title": "Track suite",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        "type": "fashion",
        "brand": "zara",
        "category": "Women",
        "price": "185",
        "new": "false",
        "stock": 2,
        "sale": "false",
        "discount": "40",
        "variants": [
            {
                "__typename": "Variants",
                "id": "2.1",
                "sku": "sku1",
                "size": "s",
                "color": "olive",
                "image_id": 211
            },
            {
                "__typename": "Variants",
                "id": "2.2",
                "sku": "sku2",
                "size": "s",
                "color": "navy",
                "image_id": 212
            },
            {
                "__typename": "Variants",
                "id": "2.3",
                "sku": "sku3",
                "size": "s",
                "color": "red",
                "image_id": 213
            },
            {
                "__typename": "Variants",
                "id": "2.4",
                "sku": "sku4",
                "size": "m",
                "color": "olive",
                "image_id": 211
            },
            {
                "__typename": "Variants",
                "id": "2.5",
                "sku": "sku4",
                "size": "m",
                "color": "navy",
                "image_id": 212
            },
            {
                "__typename": "Variants",
                "id": "2.6",
                "sku": "sku4",
                "size": "m",
                "color": "red",
                "image_id": 213
            },
            {
                "__typename": "Variants",
                "id": "2.7",
                "sku": "sku4",
                "size": "l",
                "color": "olive",
                "image_id": 211
            },
            {
                "__typename": "Variants",
                "id": "2.8",
                "sku": "sku4",
                "size": "l",
                "color": "navy",
                "image_id": 212
            },
            {
                "__typename": "Variants",
                "id": "2.9",
                "sku": "sku4",
                "size": "l",
                "color": "red",
                "image_id": 213
            }
        ],
        "images": [
            {
                "__typename": "Images",
                "image_id": 211,
                "id": "2.1",
                "alt": "olive",
                "src": "/assets/images/yequipe/product2.jpg"
            },
        ]
    },
    {
        "__typename": "Product",
        "id": 3,
        "title": "Sports pant",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        "type": "fashion",
        "brand": "denim",
        "category": "Women",
        "price": "174",
        "new": "false",
        "stock": 0,
        "sale": "false",
        "discount": "40",
        "variants": [
            {
                "__typename": "Variants",
                "id": "3.1",
                "sku": "sku3",
                "size": "l",
                "color": "white",
                "image_id": 311
            },
            {
                "__typename": "Variants",
                "id": "3.2",
                "sku": "skul3",
                "size": "m",
                "color": "white",
                "image_id": 311
            },
            {
                "__typename": "Variants",
                "id": "3.3",
                "sku": "sku3l",
                "size": "l",
                "color": "black",
                "image_id": 312
            },
            {
                "__typename": "Variants",
                "id": "3.4",
                "sku": "sku4m",
                "size": "m",
                "color": "black",
                "image_id": 312
            }
        ],
        "images": [
            {
                "__typename": "Images",
                "image_id": 311,
                "id": "3.1",
                "alt": "white",
                "src": "/assets/images/yequipe/product3.jpg"
            }
        ]
    },
    {
        "__typename": "Product",
        "id": 4,
        "title": "Water bottle",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        "type": "fashion",
        "brand": "madame",
        "category": "Women",
        "price": "98",
        "new": "true",
        "stock": 10,
        "sale": "false",
        "discount": "50",
        "variants": [
            {
                "__typename": "Variants",
                "id": "4.1",
                "sku": "sku4",
                "size": "s",
                "color": "white",
                "image_id": 411
            },
            {
                "__typename": "Variants",
                "id": "4.2",
                "sku": "skul4",
                "size": "l",
                "color": "white",
                "image_id": 411
            },
            {
                "__typename": "Variants",
                "id": "4.3",
                "sku": "sku4s",
                "size": "s",
                "color": "skyblue",
                "image_id": 412
            },
            {
                "__typename": "Variants",
                "id": "4.4",
                "sku": "sku4l",
                "size": "l",
                "color": "skyblue",
                "image_id": 412
            }
        ],
        "images": [
            {
                "__typename": "Images",
                "image_id": 411,
                "id": "4.1",
                "alt": "white",
                "src": "/assets/images/yequipe/product4.jpg"
            }
        ]
    }
]

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


const OurProducts = () => {
    const context = useContext(CartContext);

    var { loading, data, fetchMore } = useQuery(GET_PRODUCTS, {
        variables: {
            indexFrom: 0,
            limit: 4,
        },
    })

    return (
        <section className="section-our-products section-b-space">
            <Container>
                <h2 className="pb-4 text-center">Our Products</h2>
                <Slider {...Product4} className="product-m no-arrow">
                    {data?.products?.items?.map((product, i) => (
                        <div key={i}>
                            <ProductItem
                                product={product}
                                title="our prods"
                                addCart={() => context.addToCart(product, quantity)}
                                cartClass="cart-info cart-wrap"
                                backImage={false}
                            />
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    )
}

export default OurProducts