import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { getFormattedDate } from '../../utility/Util';
import { IMAGE_URL_FROM_API } from '../../utility/Constants';
import ItemCards from '../../containers/ItemCards';

function MovieCards(props) {
    let movies = props.movies.map((movie, index) => {
        return <Col md={3} key={index}>
            <ItemCards
                resUrl={`/movie/${movie.id}`}
                resPath={`${IMAGE_URL_FROM_API}/${movie.poster_path}`}
                resTitle={movie.title}
                resReleaseDate={getFormattedDate(new Date(movie.release_date))}
            />
        </Col>
    });

    return (
        <>
            <Row>
                {movies}
            </Row>
        </>
    )
}

export default MovieCards;
