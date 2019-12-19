import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Copy = () => {
  return <p>팝업에 대한 자세한 내용을 확인하려면 책을 클릭하세요. 팝업의 링크를 복사하거나 붙여넣을 수 있습니다. 링크는 책에 대한 별도의 페이지로 안내됩니다.</p>
}

const PRODUCTS = [
  { id: 0, src: '/images/proexpress-cover.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
  { id: 1, src: '/images/practicalnode-cover.jpeg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
  { id: 2, src: '/images/expressapiref-cover.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
  { id: 3, src: '/images/reactquickly-cover.jpg', title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly'},
  { id: 4, src: '/images/fullstack-cover.png', title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'}
]

class Index extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidUpdate() {
  }

  componentDidMount() {}

	render() {
		return (
      <div>
        <Copy/>
        <p>
          <Link to="/cart" className="btn btn-danger">
            Cart
          </Link>
        </p>
        <div>
          {
            PRODUCTS.map((picture) => (
              <Link key={ picture.id }
                    to={
                      {
                        pathname: `/products/${picture.id}`,
                        state: {
                          modal: true,
                          returnTo: this.props.location.pathname
                        }
                      }
                    }>
                <img style={{ margin: 10 }} src={ picture.src } height="100" />
              </Link>
            ))
          }
        </div>
      </div>
		)
	}
}

export default Index
