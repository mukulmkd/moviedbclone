import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ItemCards(props) {
    return (
        <>
            <Card style={{ marginTop: '2rem' }}>
                <Nav.Link as={Link} to={props.resUrl} style={{ padding: '0', color: '#0e0e0e' }}>
                    <Card.Img src={props.resPath} />
                    <Card.Body style={{ minHeight: '140px' }}>
                        <h2 className="movie-title">{props.resTitle}</h2>
                        <p className="movie-date">{props.resReleaseDate}</p>
                    </Card.Body>
                </Nav.Link>
            </Card>
        </>
    )
}

export default ItemCards;
