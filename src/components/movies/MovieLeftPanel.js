import React from 'react';
import { Col, Row, Accordion, Card, Nav } from 'react-bootstrap';
import CheckboxWithLabel from '../../containers/CheckboxWithLabel';

function MovieLeftPanel() {
    return (
        <>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0" style={{ marginRight: '2rem' }}>
                        <Card>
                            <Card.Header as="h5">
                                <Accordion.Toggle style={{ color: '#000' }} as={Nav.Link} variant="link" eventKey="0">
                                    Sort
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <CheckboxWithLabel label='Popularity Descending' />
                                    <CheckboxWithLabel label='Popularity Ascending' />
                                    <CheckboxWithLabel label='Rating Descending' />
                                    <CheckboxWithLabel label='Rating Ascending' />
                                    <CheckboxWithLabel label='Release Date Descending' />
                                    <CheckboxWithLabel label='Release Date Ascending' />
                                    <CheckboxWithLabel label='Title (A - Z)' />
                                    <CheckboxWithLabel label='Title (Z - A)' />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header as="h5">
                                <Accordion.Toggle style={{ color: '#000' }} as={Nav.Link} variant="link" eventKey="1">
                                    Filter
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </>
    )
}

export default MovieLeftPanel;
