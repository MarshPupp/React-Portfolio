import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Project() {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                            <Card.Title>Misc Project</Card.Title>
                            <Card.Link href='#'>Github</Card.Link>
                            <Card.Link href='#'>Deployed Site</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Project;