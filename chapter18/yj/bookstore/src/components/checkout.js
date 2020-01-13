import React from 'react';
import { connect } from 'react-redux';
import { PRODUCTS } from './../constants/Products'

class Checkout extends React.Component {
    render() {
        let count = 0
        return <div>
            {console.log(this.props.cartItems)}
            <h1>Order History</h1>
            <table className="table table-bordered">
                <tbody>
                    {Object.keys(this.props.cartItems).map(
                        (item, index, list)=>{
                            count+= 1
                            return <tr key={item}>
                                <td>{PRODUCTS[this.props.cartItems[item]].title}</td>
                            </tr>
                        }
                    )}
                </tbody>
            </table>
            <p>Total:{count}</p>
        </div>
    }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    cartItems : state.addToCart.cartList
  });
  
  // props 로 넣어줄 액션 생성함수
  const mapDispatchToProps = dispatch => ({
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Checkout);
