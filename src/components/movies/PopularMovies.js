import React, { useState, useEffect } from 'react';
import MovieCards from './MovieCards';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { API_BASE_URL } from '../../utility/Constants';
import MovieLeftPanel from './MovieLeftPanel';

function PopularMovies() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [totalPageNum, setTotalPageNum] = useState(0);

    useEffect(() => {
        fetchPopularMovies(pageNum);
    }, [pageNum]);

    async function fetchPopularMovies(pageNum) {
        let response = await fetch(`${API_BASE_URL}${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNum}`);
        response = await response.json();
        setPopularMovies(previousData => [...previousData, ...response.results]);
        setTotalPageNum(response.total_pages);
    }

    return (
        <>
            <Container fluid>
                <Row noGutters>
                    <Col>
                        <h3 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                            Popular Movies
                        </h3>
                    </Col>
                </Row>
                <Row noGutters>
                    <Col md={3}>
                        <Row noGutters style={{ marginTop: '2rem' }}>
                            <Col>
                                <MovieLeftPanel />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9}>
                        <Row noGutters>
                            <Col>
                                {popularMovies.length > 0 ?
                                    <MovieCards movies={popularMovies} /> :
                                    null}
                            </Col>
                        </Row>
                        <Row noGutters>
                            <Col>
                                <Button
                                    onClick={() => pageNum < totalPageNum ? setPageNum(pageNum + 1) : setPageNum(totalPageNum)}
                                    variant="primary"
                                    size="lg"
                                    block
                                    style={{ display: pageNum === totalPageNum ? 'none' : 'block', padding: '20px', marginTop: '2rem', marginBottom: '2rem' }}
                                >
                                    <b>Load More</b>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PopularMovies;

