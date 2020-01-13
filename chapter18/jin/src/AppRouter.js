/**
 * 웹 앱의 전체 서비스 경로를 알 수 있게 별도의 컴포넌트로 관리한다.
 * 라우팅 영역의 포맷이나, 자동화 테스트의 문제는 고민이 필요하다.
 * Redux 를 사용해서 데이타 저장소를 사용하는 웹 앱의 경우 대부분의 라우터 경로가
 * 데이타의 로딩 & 바인딩을 담당하는 컨테이너 성격의 컴포넌트와 화면 랜더딩 담당의
 * 순수 뷰 컴포넌트로 나눠질 수 있으므로 가급적 이름을 통한 구분이 가능하도록 컨벤션을 정의한다. 
 */

import React from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import {
  ProductList,
  ProductDetail,
  Cart,
  Checkout
} from './containers'

// TODO 라우터의 테스트 방법
class AppRouter extends React.Component {
  render() {
    return <BrowserRouter>
      <Switch>
        <Route path="/" exact component={(props) => <ProductList {...props}/>} />
        <Route path="/products" component={(props) => <ProductList {...props}/>} />
        <Route path="/products/:id" component={(props) => <ProductDetail {...props}/>} />
        <Route path="/cart" component={(props) => <Cart {...props}/>} />
        <Route path="/checkout" component={(props) => <Checkout {...props}/>} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  }
}

export default AppRouter
