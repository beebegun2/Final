//import React, Bootstrap, Jqueary, React-app, React-Router

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

//export different objects based on array
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

    const needs = [
        {
            id: 1,
            name: 'Shannon',
            need1: 'I need a garbage disposal',
            need2: 'I need a new couch',
            need3: 'I need groceries'
        },
        {
            id: 2,
            name:'MacKenzie',
            need1: 'I need money',
            need2: 'I need tires',
            need3: 'I need books'
        },
        {
            id: 3,
            name:'McKayla',
            need1: 'I need clothes',
            need2: 'I need dog collars',
            need3: 'I need a new piano'
        },
    ];

    const wants = [
        {
        id: 1,
            name: 'Shannon',
            want1: 'I want a new motorcycle',
            want2: 'I want a new shed',
            want3: 'I want a new ladder'
        },
        {
            id: 2,
            name:'MacKenzie',
            want1: 'I want a new car',
            want2: 'I want a new apartment',
            want3: 'I want a new dog'
        },
        {
            id: 3,
            name:'McKayla',
            want1: 'I want a new house',
            want2: 'I want a new clothes',
            want3: 'I want a new kitty'
        }
    ]
    
    //create buttons for each link to each new page
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
                        <Needs needs={needs} />
                    </Route>
                    <Route path='/wants'>
                        <Wants wants={wants} />
                    </Route>
                </Switch>
            </div>
        </Router>
    </Container>
    );
}

//create different functions for each link - to pop up based by id type in mock api

function Wants({ wants }) {
    const match = useRouteMatch();
    const findWantById = (id) => 
        wants.filter((want) => want.id == id)[0];
    return (
        <div>
            {wants.map((want, index) => {
                return (
                    <Alert key={index} variant='primary'> 
                        <Link to={`${match.url}/${want.id}`}>
                            {want.name}
                        </Link>
                    </Alert>
                );
            })}
    
    <Switch>
        <Route 
            path={`${match.path}/:wantId`}
                render={(props) => (
                    <Want
                        {...props}
                        data={findWantById(props.match.params.wantId)}
                    />
                )}
            />
        <Route path={match.path}>
            <center><h2><i>Click on a name to see what they want</i></h2></center>
        </Route>
    </Switch>
 </div>
  );
  }
    
    
    function Want(props) {
        const { data } = props;
        return data == undefined ? <h1>404 Not Found</h1> : (
            <Card>
                <Card.Header><h2>{data.name}'s Christmas List</h2></Card.Header>
                <Card.Body>
                    <Card.Subtitle>{data.want1}</Card.Subtitle>
                    <Card.Subtitle>{data.want2}</Card.Subtitle>
                    <Card.Subtitle>{data.want3}</Card.Subtitle>
        </Card.Body>
         </Card>
     );
    }
    
    function Needs({ needs }) {
        const match = useRouteMatch();
        const findNeedById = (id) => 
            needs.filter((need) => need.id == id)[0];
        return (
            <div>
                {needs.map((need, index) => {
                    return (
                        <Alert key={index} variant='primary'> 
                            <Link to={`${match.url}/${need.id}`}>
                                {need.name}
                            </Link>
                        </Alert>
                    );
                })}
        
        <Switch>
            <Route 
                path={`${match.path}/:needId`}
                    render={(props) => (
                        <Need
                            {...props}
                            data={findNeedById(props.match.params.needId)}
                        />
                    )}
                />
            <Route path={match.path}>
                <center><h2><i>Click on a name to see what they need</i></h2></center>
            </Route>
        </Switch>
     </div>
      );
      }
        
        
        function Need(props) {
            const { data } = props;
            return data == undefined ? <h1>404 Not Found</h1> : (
                <Card>
                    <Card.Header><h2>{data.name} Needs These</h2></Card.Header>
                    <Card.Body>
                        <Card.Subtitle>{data.need1}</Card.Subtitle>
                        <Card.Subtitle>{data.need2}</Card.Subtitle>
                        <Card.Subtitle>{data.need3}</Card.Subtitle>
            </Card.Body>
             </Card>
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