import React, { useState, useContext } from "react";
import Link from "next/link";
import sizeChart from "../../../public/assets/images/size-chart.jpg";
import { Modal, ModalBody, ModalHeader, Media, Input, ButtonGroup, Button } from "reactstrap";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import CartContext from "../../../helpers/cart";
import { Form } from "antd"

const sizes = ["XS", "S", "M", "L", "XL"]

const DetailsWithPrice = ({ item, stickyClass, changeColorVar }) => {
  const [modal, setModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M")
  const CurContect = useContext(CurrencyContext);
  const symbol = CurContect.state.symbol;
  const toggle = () => setModal(!modal);
  const product = item;
  const context = useContext(CartContext);
  const stock = context.stock;
  const plusQty = context.plusQty;
  const minusQty = context.minusQty;
  const quantity = context.quantity;
  const setQuantity = context.setQuantity;

  const [form] = Form.useForm()

  const changeQty = (e) => {
    setQuantity(parseInt(e?.target?.value));
  }


  return (
    <>
      <div className={`product-right ${stickyClass}`}>
        <Form form={form}>
          <h2> {product.title} </h2>
          {product.discount && product.discount > 0 && (
            <h4>
              <del>
                {symbol}
                {product.price}
              </del>
              <span>{product.discount}% off</span>
            </h4>
          )}
          <h3>
            {symbol}
            {product.price - (product.price * (product.discount ?? 0)) / 100}
          </h3>
          <div className="product-description border-product">
            <h6 className="product-title">Select Size</h6>
            <ButtonGroup className="custom-radio-group">
              {sizes.map(size => (
                <Button
                  outline
                  onClick={() => setSelectedSize(size)}
                  active={selectedSize === size}
                >
                  {size}
                </Button>
              ))}
            </ButtonGroup>
            <h6 className="product-title">quantity</h6>
            <div className="qty-box">
              <div className="input-group">
                <span className="input-group-prepend">
                  <button disabled={quantity <= 1} type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                    <i className="fa fa-angle-left"></i>
                  </button>
                </span>
                <Input type="number" disabled={true} min={1} max={product?.stock ?? 1} name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />
                <span className="input-group-prepend">
                  <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(product)} data-type="plus" data-field="">
                    <i className="fa fa-angle-right"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="product-buttons">
            <a href={null} className="btn btn-solid" onClick={() => context.addToCart(product, quantity)}>
              add to cart
            </a>
            <Link href={`/page/account/checkout`} className="btn btn-solid" onClick={() => context.addToCart(product, quantity)}>
              buy now
            </Link>
          </div>
          <div className="border-product">
            <h6 className="product-title">product details</h6>
            <p>{product.description}</p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default DetailsWithPrice;
