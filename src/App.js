import React from 'react'
import Header from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import './App.css';
import SimpleBottomNavigation from './components/MainNav';
import { Container} from '@mui/material';
import Trending from './components/Pages/Trending';
import Movies from './components/Pages/Movies';
import Series from './components/Pages/Series';
import Search from './components/Pages/Search';
const App = () => {
  return (<>
  <BrowserRouter>
  
  <Header/>
    <div className="App">
      <Container>
          <Switch>
            <Route exact path="/" component={Trending}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/Series" component={Series}/>
            <Route path="/Search" component={Search}/>
          </Switch>
      </Container>
    </div>
    <SimpleBottomNavigation/>
    
    </BrowserRouter> 
 </> )
}

export default App
