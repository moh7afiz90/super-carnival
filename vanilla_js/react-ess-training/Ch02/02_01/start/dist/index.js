const { createElement } = React
const { render } = ReactDom

const Title = createElement(
  'h2',
  {
    id: 'title',
    className: 'header'
  }
)


render(
  Title,
  document.getElementById('app')
)
