import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import ProductDetailView from './ProductDetailView'
import HeadingView from './HeadingView'
import CopyView from './CopyView'


class ProductListView extends React.Component {

  constructor (props) {
    super(props)
    console.log(props)

    this.state = {
      filteredBookList: props.filteredBookList,
      isDetailModal: false
    }
    this.showProductDetail = this.showProductDetail.bind(this)
    this.closeModalWindow = this.closeModalWindow.bind(this)
  }

  componentDidMount () {
  }
  
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      //
    }
  }

  showProductDetail (productId) {
    console.log(`selected productId: ${productId}`)
  }

  closeModalWindow () {
    // 컴포넌트를 다시 랜더링해야 하는가? 
    this.props.history.replace('/')
  }

  render () {
    return <div className="well">
      <HeadingView />
      <CopyView />
      <p>
        <Link to="/cart" className="btn btn-danger">Cart</Link>
      </p>
      <div>
        {
          this.state.filteredBookList.map(product => (
            <Link key={product.id}
              onClick={this.showProductDetail(product.id)}
              to={{pathname: `/products/${product.id}`, state: {returnTo: this.props.location.pathname}}}
              >
              <ProductItem src={product.thumbUrl} height="150" alt={product.name} />
            </Link>
          ))
        }
      </div>
    </div>
  }

}

const ProductItem = styled.img`
  margin: 10px;
  height: 150px;
  border: 1px solid #666
`

export default ProductListView
