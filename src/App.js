import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import DeckofCards from './DeckofCards'
import TopNavigation from './TopNavigation'
import { CSSTransition } from 'react-transition-group'

const routes = [
  { path: './DeckofCards', Component: DeckofCards }

]


function App() {
 
  return (
    <div className="App">
  <TopNavigation/>
  {routes.map(({ path, Component}) => (
    <Route key={ path } exact path={path}>
      {({ match}) => (
        <CSSTransition 
        in={match !== null}
        timeout={300} 
        classNames='fade'
        unmountOnExit 
        >
          <div className='fade'>
            <Component/>
          </div>
        </CSSTransition>
      )}
    </Route>
  ))}
  </div>
  );


}

export default App;
