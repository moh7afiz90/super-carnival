const { createElement } = React
const { render } = ReactDOM

const main_title = createElement(
	'h6',
	{id: 'title', className: 'header'},
	'Hello World'
)

render(
	main_title,
	document.getElementById('react-container')
)
