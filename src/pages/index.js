import React, { Component } from 'react'

// 组件
import Header from '../components/header'

import { connect } from 'react-redux'
import { changeAwards } from '../actions'

// 样式引入
import '../css/normalize.css'
import '../sass/main.scss'
import '../sass/index.scss'

// let store = createStore(todoApp)

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      btnStatus: [true, false, false],
      totalAmount: ''
    }
    this.clickBtn1 = () => {
      this.setState({btnStatus: [true, false, false]})
    }
  }
  componentWillReceiveProps(nextProps){
    // if(this.props != nextProps) console.log('输出todos为：', nextProps.todos);
  }
  componentWillMount() {

  }
  componentDidMount () {
    this.props.changeAwards([123, 234, 345])
  }
  render () {
    // const styleComponent = {
    //   // draw: {
    //   //   height: `${this.state.height}px`
    //   // },
    // }
    return (
      <div className="index">
      <Header />
        <div className="btns">
          <button onClick={this.clickBtn1} className={this.state.btnStatus[0] ? 'on' : 'out'} type="button">{this.state.btnStatus[0] ? '中奖名单' : ''}</button>
          <button onClick={this.clickBtn2} className={this.state.btnStatus[1] ? 'on' : 'out'} type="button">{this.state.btnStatus[1] ? '抽奖规则' : ''}</button>
          <button onClick={this.clickBtn3} className={this.state.btnStatus[2] ? 'on' : 'out'} type="button">{this.state.btnStatus[2] ? '奖项设置' : ''}</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  awards: state.awards
})

const mapDispatchToProps = dispatch => ({
  changeAwards: (arr) => dispatch(changeAwards(arr))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
