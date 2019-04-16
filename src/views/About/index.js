import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: '关于' }
  }

  render () {
    return (
      <ScrollView style={[styles.pageWrap]}>
        <Text style={[styles.row]}>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</Text>
        <Text style={[styles.row]}>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</Text>
        <Text style={[styles.row]}>CNode 的 SLA 保证是，一个9，即 90.000000%。</Text>
        <Text style={[styles.row]}>社区目前由 <Text style={[styles.highlight]} href="http://cnodejs.org/user/alsotang" >@alsotang</Text> 在维护，有问题请联系：<Text style={[styles.highlight]} href="https://github.com/alsotang" 
          >https://github.com/alsotang</Text>
        </Text>
        <Text style={[styles.row]}>请关注我们的官方微博：<Text style={[styles.highlight]} href="http://weibo.com/cnodejs" >http://weibo.com/cnodejs</Text>
        </Text>
        <View style={[styles.titleWrap]}>
          <Text style={[styles.title]}>移动客户端</Text>
        </View>
        <Text style={[styles.row]}>客户端由 <Text style={[styles.highlight]} href="https://cnodejs.org/user/soliury" >@soliury</Text> 开发维护。
        </Text>
        <Text style={[styles.row]}>源码地址： <Text style={[styles.highlight]} href="https://github.com/soliury/noder-react-native" 
          >https://github.com/soliury/noder-react-native</Text> 。
        </Text>
        <Text style={[styles.row]}>立即体验 CNode 客户端，直接扫描页面右侧二维码。</Text>
        <Text style={[styles.row, styles.lastRow]}>另，安卓用户同时可选择：<Text style={[styles.highlight]} href="https://github.com/TakWolf/CNode-Material-Design" 
          >https://github.com/TakWolf/CNode-Material-Design</Text> ，这是 Java 原生开发的安卓客户端。
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  pageWrap: {
    padding: 14
  },
  titleWrap: {
    marginTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  row: {
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
    lineHeight: 16
  },
  lastRow: {
    paddingBottom: 12
  },
  highlight: {
    color: '#08c'
  }
})