### Forms and Refs

#### Creating a form component

##### Example 1

```jsx
import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
	render() {

		const { resort, date, powder, backcountry } = this.props

		return (
      /*form*/
			<form className="add-day-form">
        /*htmlFor for is a reserved work in JSX so we use htmlFor*/
				<label htmlFor="resort">Resort Name</label>
				<input id="resort"
					   type="text"
					   required
					   defaultValue={resort}/>

				<label htmlFor="date">Date</label>
				<input id="date"
					   type="date"
					   required
					   defaultValue={date}/>

				<div>
					<input id="powder"
						   type="checkbox"
               /*Default checked supplied from the default value*/
						   defaultChecked={powder}	/>
					<label htmlFor="powder">Powder Day</label>
				</div>

				<div>
					<input id="backcountry"
						   type="checkbox"
						   defaultChecked={backcountry} />
					<label htmlFor="backcountry">
						Backcountry Day
					</label>
				</div>
			</form>
		)
	}
}
/*defaultProps*/
AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
}

/*PropTypes*/
AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}
```

#### Using Refs in class components
Props in probably the only way parents' component interact with their children. When we modify a child however, you re-render it with new props.
In some cases, we want to reach out to individual elements to figure out what their values are. The way we can do this is with refs.
- (Source)[https://www.google.com.sa/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjI6-y8y-rWAhXFChoKHUfvDvgQFggkMAA&url=https%3A%2F%2Fmedium.com%2F%40bittuf3%2Frefs-in-react-all-you-need-to-know-fb9c9e2aeb81&usg=AOvVaw1vbcRPkvheMyhqTNksOCNo]
##### Example

```JSX
import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {

	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e) {
    /*to prevent the default behavior of the form submission, which will be to clear it out*/
		e.preventDefault()
		console.log('resort', this.refs.resort.value)
		console.log('date', this.refs.date.value)
		console.log('powder', this.refs.powder.checked)
		console.log('backcountry', this.refs.backcountry.checked)

	}

	render() {

		const { resort, date, powder, backcountry } = this.props

		return (
			<form onSubmit={this.submit} className="add-day-form">

				<label htmlFor="resort">Resort Name</label>
				<input id="resort"
					   type="text"
					   required
					   defaultValue={resort}
					   ref="resort"/>

				<label htmlFor="date">Date</label>
				<input id="date"
					   type="date"
					   required
					   defaultValue={date}
					   ref="date"/>

				<div>
					<input id="powder"
						   type="checkbox"
						   defaultChecked={powder}
						   ref="powder"/>
					<label htmlFor="powder">Powder Day</label>
				</div>

				<div>
					<input id="backcountry"
						   type="checkbox"
						   defaultChecked={backcountry}
						   ref="backcountry"/>
					<label htmlFor="backcountry">
						Backcountry Day
					</label>
				</div>
				<button>Add Day</button>
			</form>
		)
	}
}

AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
}


AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}
```

#### Using refs in stateless components

##### Example
```JSX
import { PropTypes, Component } from 'react'

export const AddDayForm = ({ resort,
							 date,
							 powder,
							 backcountry }) => {

	let _resort, _date, _powder, _backcountry

	const submit = (e) => {
		e.preventDefault()
		console.log('resort', _resort.value)
		console.log('date', _date.value)
		console.log('powder', _powder.checked)
		console.log('backcountry', _backcountry.checked)

	}

	return (
		<form onSubmit={submit} className="add-day-form">

			<label htmlFor="resort">Resort Name</label>
			<input id="resort"
				   type="text"
				   required
				   defaultValue={resort}
					 /*callback ref*/
				   ref={input => _resort = input}/>

			<label htmlFor="date">Date</label>
			<input id="date"
				   type="date"
				   required
				   defaultValue={date}
					 /*callback ref*/
				   ref={input => _date = input}/>

			<div>
				<input id="powder"
					   type="checkbox"
					   defaultChecked={powder}
					   ref="powder"
						 /*callback ref*/
					   ref={input => _powder = input}/>
				<label htmlFor="powder">Powder Day</label>
			</div>

			<div>
				<input id="backcountry"
					   type="checkbox"
					   defaultChecked={backcountry}
					   ref="backcountry"
						 /*callback ref*/
					   ref={input => _backcountry = input}/>
				<label htmlFor="backcountry">
					Backcountry Day
				</label>
			</div>
			<button>Add Day</button>
		</form>
	)
}

AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
}


AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}
```

#### Two-way function binding
- Passing data from child component to parent component (App.js) by two-way function biding.

##### Example 1
- SkiDayRow.js
```jsx
import { PropTypes } from 'react'

export const SkiDayRow = ({resort, date,
							powder, backcountry}) => (
	<tr>
		<td>
			/* {date.getMonth()+1/{daate.getDate()}}/
			 {date.getFullYear()}*/
			 /*Change to {date} instead*/
			{date}
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

SkiDayRow.propTypes = {
	resort: PropTypes.string.isRequired,
	/*date: PropTypes.string.isRequired,*/
	/*Change the above code to*/
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool,
	backcountry: PropTypes.bool
}
```

- AddDayForm.js
```jsx
import { PropTypes } from 'react'

export const AddDayForm = ({ resort,
							 date,
							 powder,
							 backcountry,
							 onNewDay }) => {

	let _resort, _date, _powder, _backcountry

	const submit = (e) => {
		e.preventDefault()
		onNewDay({
			resort: _resort.value,
			date: _date.value,
			powder: _powder.checked,
			backcountry: _backcountry.checked
		})
		_resort.value = ''
		_date.value = ''
		_powder.checked = false
		_backcountry.checked = false

	}

	return (
		<form onSubmit={submit} className="add-day-form">

			<label htmlFor="resort">Resort Name</label>
			<input id="resort"
				   type="text"
				   required
				   defaultValue={resort}
				   ref={input => _resort = input}/>

			<label htmlFor="date">Date</label>
			<input id="date"
				   type="date"
				   required
				   defaultValue={date}
				   ref={input => _date = input}/>

			<div>
				<input id="powder"
					   type="checkbox"
					   defaultChecked={powder}
					   ref="powder"
					   ref={input => _powder = input}/>
				<label htmlFor="powder">Powder Day</label>
			</div>

			<div>
				<input id="backcountry"
					   type="checkbox"
					   defaultChecked={backcountry}
					   ref="backcountry"
					   ref={input => _backcountry = input}/>
				<label htmlFor="backcountry">
					Backcountry Day
				</label>
			</div>
			<button>Add Day</button>
		</form>
	)
}

AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
}


AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}
```
