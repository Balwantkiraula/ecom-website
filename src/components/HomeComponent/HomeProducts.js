import { Col, Card, Button } from "react-bootstrap";
const HomeProduct = () => {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img
          variant="top"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
        />
        <Card.Body>
          <Card.Title>Product </Card.Title>
          <Card.Text>
            This is a description of product . It is a very good product and
            will be useful for your needs.
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default HomeProduct;
