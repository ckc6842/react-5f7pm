import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { PRODUCTS } from './../constants/Products'

class Cart extends React.Component {
    render() {
        return <div>
            {console.log(this.props.cartItems)}
            {(Object.keys(this.props.cartItems).length === 0)?
            <p>No items in cart</p> : ''}
            <ul>
                {Object.keys(this.props.cartItems).map(
                    (item, index, list)=>{
                        return <li key={item}>
                            {PRODUCTS[this.props.cartItems[item]].title}
                            {/* {this.props.route.products[item].title}
                            -{this.props.rout.cartItems[item]} */}
                        </li>
                    }
                )}
            </ul>
            <Link to="/checkout"
                className="btn btn-primary">
                Pay Here
            </Link>
            <Link to="/" className="btn btn-info">Home</Link>
        </div>
    }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    cartItems : state.addToCart.cartList
  });
  
  // props 로 넣어줄 액션 생성함수
  const mapDispatchToProps = dispatch => ({
    // changeColor: color => dispatch(changeColor(color)),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);
