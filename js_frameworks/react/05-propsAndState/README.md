## React Props & State
### Props
This simply is shorthand for properties. Props are how components talk to each other. If you’re at all familiar with React then you should know that props flow downwards from the parent component.
There is also the case that you can have default props so that props are set even if a parent component doesn’t pass props down.
[Source](https://hackernoon.com/understanding-state-and-props-in-react-94bc09232b9c)
### State
Props shouldn’t change, so state steps up. Normally components don’t have state and so are referred to as stateless. A component using state is known as stateful. Feel free to drop that little tidbit at parties and watch people edge away from you.
So state is used so that a component can keep track of information in between any renders that it does. When you setState it updates the state object and then re-renders the component. This is super cool because that means React takes care of the hard work and is blazingly fast.
[Source](https://hackernoon.com/understanding-state-and-props-in-react-94bc09232b9c)

### Composing components

- In index.js, create data object
```jsx
import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
	<SkiDayList days={
    /*Data Object*/
		[
			{
				resort: "Squaw Valley",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Kirkwood",
				date: new Date("3/28/2016"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mt. Tallac",
				date: new Date("4/2/2016"),
				powder: false,
				backcountry: true
			}
		]
	}/>,
	document.getElementById('react-container')
)
```

### Display data objects in child components
import data object in this SkiDayRow

```jsx
export const SkiDayRow = ({resort, date, powder, backcountry}) => (
	<tr>
		<td>
      /*Methods*/
			{date.getMonth()+1}/{date.getDate()}/
			{date.getFullYear()}
		</td>
		<td>
			{resort}
		</td>
		<td>
			{(powder) ? <SnowFlake/> : null}
		</td>
		<td>
			{(backcountry) ? <Terrain /> : null}
		</td>
	</tr>						
)
```

importing data object in this SkiDayList
```jsx
import {SkiDayRow} from './SkiDayRow'
export const SkiDayRow = ({days}) => (
  <table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Resort</th>
				<th>Powder</th>
				<th>Backcountry</th>
			</tr>
		</thead>
		<tbody>
    /*Render SkiDayRow component here*/
			{days.map((day, i) =>
				<SkiDayRow key={i}
              /*OR
                resort={day.resort}
                date={day.date}
                powder={day.powder}
                backcountry={day.backcountry}
              */
              /*
                OR using ES6 spread operator as below
              */
						   {...day}/>
				)}
		</tbody>
	</table>

)
```

#### Default props (Optional but very useful)

- Default props it used when other props values are not provided.

##### Example 1


```jsx
export const SkiDayCount = createClass({
  /*Default Props*/
  getDefaultProps() {
    return {
      total: 50,
      powder: 50,
      backcountry: 15,
      goal: 100
    }
  },
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <Calendar />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
            <SnowFlake />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
            <Terrain />
          <span>days</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
})
```

##### Example 2 (statless way)

```jsx
const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}
/*Default Props*/
export const SkiDayCount = ({total = 70, powder = 20, backcountry =10, goal = 100}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
					<Calendar />
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
					<SnowFlake />
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
					<Terrain />
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total,
						goal
					)}
				</span>
			</div>
		</div>
)

```
#### Validating Types with React.PropTyle
- PropTypes allow us to supply a property type to all of our properties to make sure we are supplying the right type.
They can be used for:
1. Arrays
2. Functions
3. Booleans
4. Strings
5. Numbers
and more.
- isRequired: is required to supply a vaule

##### Example 1
```jsx
import { createClass, PropTypes } from 'react'
export const SkiDayCount = createClass({
  /*PropTypes*/
  propTypes: {
    total: PropTypes.number.isRequired,
    powder: PropTypes.number,
    backcountry: PropTypes.number
  },
  getDefaultProps() {
    return {
      powder: 50,
      backcountry: 15,
      goal: 100
    }
  },
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <Calendar />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
            <SnowFlake />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
            <Terrain />
          <span>days</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
})
```

##### Example (ES6 way)

```jsx
import { Component, PropTypes } from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export class SkiDayCount extends Component {
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <Calendar />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
            <SnowFlake />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
            <Terrain />
          <span>days</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
}

/*defaultProps*/
SkiDayCount.defaultProps = {
  total: 50,
  powder: 10,
  backcountry: 15,
  goal: 75
}
/*PropTypes*/
SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number
}
```

##### Example 3 (statless way)
```jsx
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total=70, powder=20, backcountry=10, goal=100}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
					<Calendar />
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
					<SnowFlake />
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
					<Terrain />
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total,
						goal
					)}
				</span>
			</div>
		</div>
)

/*PropTypes*/
SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number
}
```

#### Custom validation

##### Example 1

```jsx
import { PropTypes } from 'react'

SkiDayRow.propTypes = {
	resort: PropTypes.string.isRequired,
	/*custome validation (custom propTypes)*/
	date: PropTypes.instanceOf(Date).isRequired,
	powder: PropTypes.bool,
	backcountry: PropTypes.bool
}
```

- We can use functions to make custom validation.
##### Example 2
```jsx
export const SkiDayList = ({days}) => (
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Resort</th>
				<th>Powder</th>
				<th>Backcountry</th>
			</tr>
		</thead>
		<tbody>
			{days.map((day, i) =>
				<SkiDayRow key={i}
						   {...day}/>
				)}
		</tbody>

	</table>
)
/*custome validation (custom propTypes)*/
SkiDayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"SkiDayList should be an array"
				)
		} else if(!props.days.length) {
			return new Error(
				"SkiDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}
```

#### Working with State
- State represent the possible condition of our React app, by:
1. Identifying the minimal representation of app state.
2. Reduce state to as few components as possible.
3. To avoid overwriting state variables, which can create chaos in application.

##### App.js
```jsx
import { createClass } from 'react'

export const App = createClass({
	getInitialState() {
		return {
			allSkiDays: [
			{
				resort: "Squaw Valley",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Kirkwood",
				date: new Date("3/28/2016"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mt. Tallac",
				date: new Date("4/2/2016"),
				powder: false,
				backcountry: true
			}
		]
		}
	},
	render() {
		return (
			<div className="app">
				{this.state.allSkiDays[0]["resort"]}
			</div>
		)
	}
})
```
##### index.js
```jsx
import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'

window.React = React

render(
	<App />,
	document.getElementById('react-container')
)
```

#### Passing state as props
##### App.js
```jsx
import { createClass } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'

export const App = createClass({
	getInitialState() {
		return {
			allSkiDays: [
			{
				resort: "Squaw Valley",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Kirkwood",
				date: new Date("3/28/2016"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mt. Tallac",
				date: new Date("4/2/2016"),
				powder: false,
				backcountry: true
			}
		]
		}
	},
	/*ES5 style*/
	countDays(filter) {
		return this.state.allSkiDays.filter(function(day){
			if(filter) {
				return day[filter]
			} else {
				return day
			}
			}).length
	}
	/*OR*/
	/*ES6 style*/
	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	},
	render() {
		return (
			<div className="app">
				<SkiDayList days={this.state.allSkiDays}/>
				<SkiDayCount total={}
										 powder={this.countDays(
											 	"powder"
											 )}
										  backcountry={this.countDays(
												"backcountry"
												)}/>
			</div>
		)
	}
})
```

#### State with ES6 classes
```jsx
import { component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'

export class App extends Component{
	/*State constructor*/
	constructor(props) {
		super(props)
		this.state = {
					allSkiDays: [
					{
						resort: "Squaw Valley",
						date: new Date("1/2/2016"),
						powder: true,
						backcountry: false
					},
					{
						resort: "Kirkwood",
						date: new Date("3/28/2016"),
						powder: false,
						backcountry: false
					},
					{
						resort: "Mt. Tallac",
						date: new Date("4/2/2016"),
						powder: false,
						backcountry: true
					}
				]
		}
	}
	/*Methods*/
	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}
	/*Render*/
	render() {
		return (
			<div className="app">
				<SkiDayList days={this.state.allSkiDays}/>
				<SkiDayCount total={}
										 powder={this.countDays(
											 	"powder"
											 )}
										  backcountry={this.countDays(
												"backcountry"
												)}/>
			</div>
		)
	}
}
```
