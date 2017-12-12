## React Components
### Component syntax style
* createClass()
* ES6 class
* Stateless functional Component

#### Creating components with createClass()
```jsx
import React from 'react'

export const SkiDayCount = React.createClass({
    render(){
      return (
          <div>
            <h1>Hello World!</h1>
          </div>
      )
    }
})
```

- Adding components properties
Properties are objects and each properties is a key.
They can be used for strings, numbers, methods and boolean.
##### Example
* in index.js
```jsx
import React from 'react'
import {render} from 'react-dom'
import SkiDayCount from './components/SkiDayCount'

window.React = React
render(
    <SkiDayCount name="string"
                 total={50}
                 powder={20}
                 backcountry={10}
                 goal={100}
    />
    docment.getElemetById('app')
)
```

* in SkiDayCount component
```jsx
import React from 'react'

export const SkiDayCount = React.createClass({
    render(){
      return (
        <div className="ski-day-count">
          <div className="total-days">
            <span>{this.props.total}</span>
            <span>days</span>
          </div>
          <div className="powder-days">
            <span>{this.props.powder}</span>
            <span>days</span>
          </div>
          <div className="backcountry-days">
            <span>{this.props.backcountry}</span>
            <span>days</span>
          </div>
          <div>
            <span>{this.props.goal}</span>
          </div>
      </div>
      )
    }
})
```

- Methods
In addition to properties we can add methods are local to components

##### Example
```jsx
import React from 'react'

export const SkiDayCount = React.createClass({
    precentToDecimal (decimal) {
      return ((decimal * 100) + '%')
    },
    calcGoalProgress(total, goal) {
      return this.precentToDecimal(total/goal)
    },
    render(){
      return (
        <div className="ski-day-count">
          <div className="total-days">
            <span>{this.props.total}</span>
            <span>days</span>
          </div>
          <div className="powder-days">
            <span>{this.props.powder}</span>
            <span>days</span>
          </div>
          <div className="backcountry-days">
            <span>{this.props.backcountry}</span>
            <span>days</span>
          </div>
          <div>
            <span>
            {
              this.calcGoalProgress
              (
                  this.props.total,
                  this.props.goal
              )
            }
            </span>
          </div>
      </div>
      )
    }
})
```
#### Creating components with ES6 class syntax
Going to factor the SkiDayCount component.
1. Getting rid of the comas.
2. Replace const with class.
3. import component instead of React.
##### Example

```jsx
import {component} from 'react'

export class SkiDayCount extends Component {
    precentToDecimal (decimal) {
      return ((decimal * 100) + '%')
    }
    calcGoalProgress(total, goal) {
      return this.precentToDecimal(total/goal)
    }
    render(){
      return (
        <div className="ski-day-count">
          <div className="total-days">
            <span>{this.props.total}</span>
            <span>days</span>
          </div>
          <div className="powder-days">
            <span>{this.props.powder}</span>
            <span>days</span>
          </div>
          <div className="backcountry-days">
            <span>{this.props.backcountry}</span>
            <span>days</span>
          </div>
          <div>
            <span>
            {
              this.calcGoalProgress
              (
                  this.props.total,
                  this.props.goal
              )
            }
            </span>
          </div>
      </div>
      )
    }
}
```
#### Creating stateless functional components
- Stateless component can not access the keyword ```this```, so properties are passed down directly into the function.
- Has a better performance among the other 2 types
- Local methods need to be removed and put into their own functions
- Syntax
```jxs
const MyComponent = (props) => (
    <div>{props.title}</div>
)
```

##### Example
```jsx
const precentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) = {
  return precentToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) =>     
     (
        <div className="ski-day-count">
          <div className="total-days">
            <span>{total}</span>
            <span>days</span>
          </div>
          <div className="powder-days">
            <span>{powder}</span>
            <span>days</span>
          </div>
          <div className="backcountry-days">
            <span>{backcountry}</span>
            <span>days</span>
          </div>
          <div>
            <span>
            {
              this.calcGoalProgress
              (
                  total,
                  goal
              )
            }
            </span>
          </div>
      </div>
    )
```
#### React Icons
http://gorangajic.github.io/react-icons/

npm install
```cmd
npm install --save react-icons
```

- Usage
```jsx
import React from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/md/snowflake'

export const SkiDayCount = React.createClass({
    precentToDecimal (decimal) {
      return ((decimal * 100) + '%')
    },
    calcGoalProgress(total, goal) {
      return this.precentToDecimal(total/goal)
    },
    render(){
      return (
        <div className="ski-day-count">
          <div className="total-days">
            <span>{this.props.total}</span>
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
            {
              this.calcGoalProgress
              (
                  this.props.total,
                  this.props.goal
              )
            }
            </span>
          </div>
      </div>
      )
    }
})
```
