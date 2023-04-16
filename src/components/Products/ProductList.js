import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';


const items = [
    {
        id:"a1",
        title: 'Colors',
        price: 100,
        imageSrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        id:"a2",
        title: 'Black and white Colors',
        price: 50,
        imageSrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        id:"a3",
        title: 'Yellow and Black Colors',
        price: 70,
        imageSrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        id:"a4",
        title: 'Blue Color',
        price: 100,
        imageSrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]

const ProductList = () => {
    return (
        <Container style={{ marginTop: "20px" }}>
            <Row xs={1} md={2} lg={4}>
                {items.map((items, index) => (
                    <Col key={index}>
                        <ProductCard item={items} />
                    </Col>
                ))}
            </Row>

        </Container>
    );
};

export default ProductList;