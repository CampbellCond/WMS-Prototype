import React from 'react'
import styled from 'styled-components'
import Home from './Home'
import Inputs from './Inputs'
import Export from './Export'
import Search from './Search'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const FullWrap = styled.div``

const HelloThere = styled.h1``

const HomeButton = styled.button``

const InputsButton = styled.button``

const ExportButton = styled.button``

const SearchButton = styled.button``

class App extends React.Component {
  render() {
    return (
      <FullWrap>
        <HelloThere>General Kenobi</HelloThere>
        <Router>
          <Link to="/">
            <HomeButton renderAs="button">
              <span>Home</span>
            </HomeButton>
          </Link>
          <Link to="/Inputs">
            <InputsButton renderAs="button">
              <span>Inputs</span>
            </InputsButton>
          </Link>
          <Link to="/Export">
            <ExportButton renderAs="button">
              <span>Export</span>
            </ExportButton>
          </Link>
          <Link to="/Search">
            <SearchButton renderAs="button">
              <span>Search</span>
            </SearchButton>
          </Link>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Inputs">
              <Inputs />
            </Route>
            <Route path="/Export">
              <Export />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>
          </Switch>
        </Router>
      </FullWrap>
    )
  }
}

export default App
