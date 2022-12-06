import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'; 
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
}   from 'react-router-dom';

export default function App() {
    const favorites = [
        {
            id: 1,
            name: 'Shannon',
            color: 'My favorite color is pink',
            candy: 'My favorite candy is any thing chocolate',
            hobby: 'My favorite hobby is riding my motorcycle'
        },
        {
            id: 2,
            name:'MacKenzie',
            color: 'My favorite color is red',
            candy: 'My favorite candy is recees',
            hobby: 'My favorite hobby is fighting fires'
        },
        {
            id: 3,
            name:'McKayla',
            color: 'My favorite color is yellow',
            candy: 'My favorite candy is ice cream',
            hobby: 'My favorite hobby is dancing'
        },
    ];

    
    return (
        <Container>
            <Router>
                <div>
                    <ButtonGroup>
                        <Button variant='outline-secondary'>
                            <Link to='/wants'>Wants</Link>
                        </Button>
                        </ButtonGroup>
                    <ButtonGroup>    
                        <Button variant='outline-secondary'>
                            <Link to='/needs'>Needs</Link>
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button variant='outline-secondary'>
                            <Link to='/favorites'>Favorites</Link>
                        </Button>
                    </ButtonGroup>
                           
                <Switch>
                    <Route path='/favorites'>
                        <Favorites favorites={favorites} />
                    </Route>
                    <Route path='/needs'>
                        <Needs needs={['I need a spot cleaner','I need a vaccuum','I need a ladder']} />
                    </Route>
                    <Route path='/'>
                        <Wants />
                    </Route>
                </Switch>
            </div>
        </Router>
    </Container>
    );
}

function Wants() {
    return <h2>This is what I want!</h2>
}

function Needs(props) {
    const { needs } = props;
return (
    <div>
        <ul>
            {needs.map((need, index) => (
            <li key={index}>{need}</li>
            ))}
        </ul>
    </div>
);
}


function Favorites({ favorites }) {
    const match = useRouteMatch();
    const findFavoriteById = (id) => 
    favorites.filter((favorite) => favorite.id == id)[0];

    return (
        <div>          
            {favorites.map((favorite, index) => {
                return (
                    <Alert key={index} variant='primary'> 
                    <Link to={`${match.url}/${favorite.id}`}>
                        {favorite.name}
                    </Link>
                </Alert>
                );
            })}

        <Switch>
            <Route 
            path={`${match.path}/:favoriteId`}
            render={(props) => (
                <Favorite
                {...props}
                data={findFavoriteById(props.match.params.favoriteId)}
                />
            )}
            />
            <Route path={match.path}>
                <center><h2><i>Click a name to see some of their favorite things</i></h2></center>
            </Route>
        </Switch>
    </div>
    );
}


function Favorite(props) {
    const { data } = props;
    return data == undefined ? <h1>404 Not Found</h1> : (
        <Card>
            <Card.Header><h2>{data.name}'s Favorite Things</h2></Card.Header>
            <Card.Body>
                <Card.Subtitle>{data.color}</Card.Subtitle>
                <Card.Subtitle>{data.candy}</Card.Subtitle>
                <Card.Subtitle>{data.hobby}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}