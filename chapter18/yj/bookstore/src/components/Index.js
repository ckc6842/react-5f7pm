import React from 'react'
import { Link } from "react-router-dom";
import { PRODUCTS } from './../constants/Products.js'

const Copy = () => {
    return <p>Click book to show detail information.</p>
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <Copy/>
                <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
                <div>
                    {PRODUCTS.map(picture=>{
                        return (
                            <Link key={picture.id}
                                to={{pathname:`/products/${picture.id}`,
                                    state:{
                                        modal:true,
                                        returnTo:this.props.location.pathname}
                                    }}>
                                <img style={{margin:10}} alt={picture.src} src={picture.src} height="100"/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Index