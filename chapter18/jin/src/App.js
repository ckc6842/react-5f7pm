/**
 * 앱 고유의 초기화 과정이 필요하다면 App.js 에서 주요 작업은 이루어지게 구성
 */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppRouter from './AppRouter'
import reducer from './reducers'

// TODO 스토어를 생성하는 시점이 index or app?
// index 의 역할을 앱을 html 에 역어주는 역할만 할 것인가, 아니면 앱을 초기화 하는 역할까지 할 것인가?
const store = createStore(reducer)

// TODO 앱에서 기본 화면을 그려줄려고 할 게 아니고 라우터를 연결해 줘야 한다.
// 웹 앱의 첫 페이지가 상품 목록으로 가는 것은 라우터의 설정이다.
const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App
