import React, { Component } from 'react'
import { Image, View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native'
import HTML from 'react-native-render-html';
import $http from '../../axios'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      replies: []
    }
  }

  static navigationOptions = ({ navigation }) => {
    return { title: navigation.getParam('item', {}).title }
  }

  async componentWillMount () {
    const { navigation } = this.props
    const id = navigation.getParam('item', {}).id
    const res = await $http.get(`/topic/${id}`)
    this.setState({
      replies: res.replies
    })
  }

  render() {
    const { navigation } = this.props
    const item = navigation.getParam('item', {})

    console.log('item:', item);

    return (
      <ScrollView style={styles.wrap}>
        <Text style={styles.title}>{item.title}</Text>
        <HTML html={item.content} imagesMaxWidth={Dimensions.get('window').width} />
        <Text style={styles.reply}>{item.reply_count}回复</Text>
        {
          this.state.replies.map((replie, index) => (
            <View key={index} style={styles.replieRow}>
              <View style={styles.rowAuthorWrap}>
                <Image source={{ uri: replie.author.avatar_url }} style={{ width: 34, height: 34 }} />
                <Text style={{ marginLeft: 10, marginRight: 6}}>{replie.author.loginname}</Text>
                <Text style={{ color: '#08c'}}>{index + 1}楼</Text>
              </View>
              <HTML html={replie.content} imagesMaxWidth={Dimensions.get('window').width} />
            </View>

          )
          )
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: 14
  },
  reply: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: -14,
    marginRight: -14,
    backgroundColor: '#f6f6f6',
    padding: 10,
    color: '#444'
  },
  replieRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingTop: 12,
    paddingBottom: 6
  },
  rowAuthorWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})