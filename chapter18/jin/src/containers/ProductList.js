import { connect } from 'react-redux'
import * as BookActions from '../actions'
import { bindActionCreators } from 'redux'
import ProductListView from '../components/ProductListView'
// import { getBookList } from '../selectors'

// TODO 스토어에 상품 목록이 있다면 상품 목록을 뷰에 넘겨주고 없다면
// 초기 상품 목록을 가져와서 넘겨준다
// 초기 상품 목록을 가져와서 스토어에 저장되면 상품 목록이 변경되기 때문에
// 화면에 바인딩 되어 있는 selector 에 의해 자동 갱신이 될까?
const baseBookList = [
  {
    id: 0,
    name: 'Pro Express.js',
    thumbUrl: 'images/proexpress-cover.jpg',
  },
  {
    id: 1,
    name: 'Node.js',
    thumbUrl: 'images/practicalnode-cover.jpeg',
  },
  {
    id: 2,
    name: 'Express.js',
    thumbUrl: 'images/expressapiref-cover.jpg',
  },
  {
    id: 3,
    name: 'React Quickly',
    thumbUrl: 'images/reactquickly-cover.jpg',
  },
  {
    id: 4,
    name: 'Full Stack Javascript',
    thumbUrl: 'images/fullstack-cover.png',
  },
]

// TODO selector 의 리턴값을 알 수 없어서 초기 북 목록과 호출해서 지정하는 것과 분기하기가 어려움
const mapStateToProps = state => ({
    // filteredBookList: getBookList
    filteredBookList: baseBookList
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BookActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListView)
