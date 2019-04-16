import React, { Component } from 'react';
import { View } from 'react-native';
import Nav from './nav'
import Main from './main'
import $http from '../../axios/index'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      activeType: '',
      page: 1,
      isLoading: false
    }
  }

  static navigationOptions = ({ navigation }) => {
    return { title: '首页' }
  }

  componentWillMount () {
    this.getList('', 1)
  }

  getList = async (type, pageNum, isInit = true) => {
    if (this.state.isLoading) return

    this.setState({ isLoading: true })

    const response = await $http.get('/topics', { params: {
      tab: type, page: pageNum, limit: 10
    }})
      .catch(error => { console.log(error) })

    console.log(22000, pageNum, response);
    this.setState({
      data: isInit ? response : [...this.state.data, ...response],
      page: pageNum,
      isLoading: false
    })
    return Promise.resolve()

  }

  loadMoreHandle = () => {
    this.getList(this.state.activeType, this.state.page + 1, false)
  }

  typeChange = (type) => {
    if (type !== this.state.activeType) {
      this.getList(type, 1, true)
        .then(() => {
          this.setState({ activeType: type })
        })
        .catch(() => {
          this.setState({ activeType: type })
        })
    }
  }

  render() {
    return (
      <View style={{flexDirection: 'column', flex: 1}}>
        <Nav activeType={this.state.activeType} onChange={this.typeChange}></Nav>
        <Main
          data={this.state.data}
          loadMore={this.loadMoreHandle}
        ></Main>
      </View>
    );
  }
}
