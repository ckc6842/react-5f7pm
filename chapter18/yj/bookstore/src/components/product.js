import React from 'react';
import {Link} from 'react-router-dom';
import { PRODUCTS } from './../constants/Products.js'
import { addToCart } from './../actions/index.js'
import { connect } from 'react-redux';

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.handleBuy = this.handleBuy.bind(this)
    }

    handleBuy(bookID) {
        const { addToCart } = this.props;
        addToCart(this.props.match.params.id);
    }

    render() {
        return(
            <div>
                <img src={PRODUCTS[
                    this.props.match.params.id].src}
                    alt={this.props.match.params.id}
                    style={{height:'80%'}} />
                <p>{PRODUCTS[this.props.match.params.id].title}</p>
                <Link
                    to={{
                        pathname:'/cart',
                        state:{productId : this.props.match.params.id}
                    }}
                    onClick={this.handleBuy}
                    className="btn btn-primary">
                        Buy
                </Link>
            </div>
        )
    }
}

// export const addToCart = bookID => ({ type: types.ADD_TO_CART, bookID })

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    // color: state.counter.color,
  });
  
  // props 로 넣어줄 액션 생성함수
  const mapDispatchToProps = dispatch => ({
     addToCart: bookID => dispatch(addToCart(bookID)),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product);

// export default Product;
