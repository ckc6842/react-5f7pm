import React from 'react'
import Router from './Router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

// FIXME: 분명 redux-persist 적용했는데도
// 새로고침하면 스토어가 날아가는 문제가 있음.
const App = () => {
  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App
