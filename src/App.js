import React from 'react';
import PopularMovies from './components/movies/PopularMovies';
import MovieDetails from './components/movies/MovieDetails';
import TvShows from './components/tvshows/TvShows';
import Home from './components/home/Home';
import People from './components/people/People';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Movies DB Clone</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/movie">Movies</Nav.Link>
            <Nav.Link as={Link} to="/tvshows">TV Shows</Nav.Link>
            <Nav.Link as={Link} to="/people">People</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movie' component={PopularMovies} />
          <Route exact path='/movie/:id' component={MovieDetails} />
          <Route exact path='/tvshows' component={TvShows} />
          <Route exact path='/people' component={People} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
