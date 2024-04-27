import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Container,
  Row,
  Button,
} from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/login/category/list")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  const toggleDescription = (productId) => {
    setExpandedDescriptions((prevState) => {
      if (prevState.includes(productId)) {
        return prevState.filter((id) => id !== productId);
      } else {
        return [...prevState, productId];
      }
    });
  };

  return (
    <Container>
      <Row>
        {/* {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100" style={{textAlign: "center", padding: "40px"}}>
              <center><CardImg variant="top" src={product.image} alt={product.title} style={{height: "120px", width:"150px"}}/></center>
              <CardBody>
                <CardTitle>{product.title}</CardTitle>
                <CardText>${product.price}</CardText>
                <CardText>
                  {expandedDescriptions.includes(product.id) ? product.description : `${product.description.slice(0, 100)}...`}
                  <br />
                  {product.description.length > 100 && (
                    <Button variant="link" onClick={() => toggleDescription(product.id)}>
                      {expandedDescriptions.includes(product.id) ? "Show Less" : "Show More"}
                    </Button>
                  )}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))} */}
      </Row>
    </Container>
  );
};

export default ProductList;
