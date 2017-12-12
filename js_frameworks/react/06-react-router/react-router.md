### React Router

#### Incorporating the router

- Install React Router
```cmd
npm install react-router@3.0.0 --save
```

- Import router in index.js

- hashHistory: is going to listen to address bar for any changes and it will keep track of those changes. Ideal when there is no server

```jsx
import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Router, Router, hashHistory } from 'react-router'
import { Error404 } from './components/Error404'

window.React = React

render(
    <Router history={hashHistory}>
        /*App component*/
      <Route path="/" component={App}>
        /*Incase user go undefined URL*/
      <Router path="*" component={Error404}>
    </Router>,
    document.getElementById('react-container')
)
```

- Error404.js

```jsx
export const Error404 = () =>
  <div>
    <h1> Whooops, page not found</h1>
  </div>
```

#### Setting up routes



#### Navigating with the link component

- Navbar (menu.js)
```jsx
import { link } from 'react-router'

export const Menu = () =>

  <nav>
    <link to="/">Home</link>
    /*activeClassName is css element*/
    <link to="/add-day" activeClassName="selected" >Add Day</link>
    <link to="/list-days"></link>
  <nav>
```
- App.js

```jsx
import { Component } from 'react'
import { Menu } from './Menu'

export class App extends Component {
	render() {
		return (
			<div className="app">
      /*Import the menu component here*/
			<Menu />
			{(this.props.location.pathname === "/") ?
			  <SkiDayCount total={this.countDays()}
							 powder={this.countDays(
							 		"powder"
							 	)}
							 backcountry={this.countDays(
							 		"backcountry"
							 	)}/> :
			 (this.props.location.pathname === "/add-day") ?
			 	<AddDayForm /> :
			 	<SkiDayList days={this.state.allSkiDays}/>				 
			}

			</div>
		)
	}
}
```

#### Using router parameters
