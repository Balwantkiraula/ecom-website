import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../Context/CartContext';

const ProductCard = (props) => {

  const { id, title, price, imageSrc } = props.item;
  const ctx = useContext(CartContext)
  const orderList = [...ctx.orderList]

  const buttonClickHandler = () => {
    const n = orderList.length;
    for (let i = 0; i <= n; i++) {
      if (i < n && orderList[i].id === id) {
        orderList[i].quantity += 1;
        break;
      }
      else if (i === n) {
        const obj = { ...props.item, quantity: 1 }
        orderList.push(obj);
      }
    }
    ctx.setOrderList(orderList)
    console.log(orderList)

  }


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Price: ₹{price}
        </Card.Text>
        <Button variant="primary" onClick={buttonClickHandler}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;