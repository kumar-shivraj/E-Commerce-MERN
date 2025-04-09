import { Card } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <strong>${product.price}</strong>
          </div>
          <Card.Text as="div">
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
