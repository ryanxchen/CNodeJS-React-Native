import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: '新手入门' }
  }

  render() {
    return (
      <ScrollView style={styles.pageWrap}>
        <View style={[styles.titleWrap]}>
          <Text style={[styles.title]}>Node.js 入门</Text>
        </View>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>汇智网 Node.js 课程</Text>》</Text>
        <Text style={[styles.row]}><Text href="http://www.hubwiz.com/course/?type=nodes" style={[styles.highlight]}>http://www.hubwiz.com/course/?type=nodes</Text></Text>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>快速搭建 Node.js 开发环境以及加速 npm</Text>》</Text>
        <Text style={[styles.row]}><Text href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" style={[styles.highlight]}>http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</Text></Text>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>Node.js 包教不包会</Text>》</Text>
        <Text style={[styles.row]}><Text href="https://github.com/alsotang/node-lessons" style={[styles.highlight]}>https://github.com/alsotang/node-lessons</Text></Text>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>ECMAScript 6入门</Text>》</Text>
        <Text style={[styles.row]}><Text href="http://es6.ruanyifeng.com/" style={[styles.highlight]}>http://es6.ruanyifeng.com/</Text></Text>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>七天学会NodeJS</Text>》</Text>
        <Text style={[styles.row]}><Text href="https://github.com/nqdeng/7-days-nodejs" style={[styles.highlight]}>https://github.com/nqdeng/7-days-nodejs</Text></Text>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>Node入门-<Text style={[styles.em]}>一本全面的Node.js教程</Text></Text>》</Text>
        <Text style={[styles.row]}><Text href="http://www.nodebeginner.org/index-zh-cn.html" style={[styles.highlight]}>http://www.nodebeginner.org/index-zh-cn.html</Text></Text>
        <View style={[styles.titleWrap]}>
          <Text style={[styles.title]}>Node.js 资源</Text>
        </View>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>node weekly</Text>》</Text>
        <Text style={[styles.row]}><Text href="http://nodeweekly.com/issues" style={[styles.highlight]}>http://nodeweekly.com/issues</Text></Text>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>node123-<Text style={[styles.em]}>node.js中文资料导航</Text></Text>》</Text>
        <Text style={[styles.row]}><Text href="https://github.com/youyudehexie/node123" style={[styles.highlight]}>https://github.com/youyudehexie/node123</Text></Text>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>A curated list of delightful Node.js packages and resources</Text>》</Text>
        <Text style={[styles.row]}><Text href="https://github.com/sindresorhus/awesome-nodejs" style={[styles.highlight]}>https://github.com/sindresorhus/awesome-nodejs</Text></Text>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>Node.js Books</Text>》</Text>
        <Text style={[styles.row]}><Text href="https://github.com/pana/node-books" style={[styles.highlight]}>https://github.com/pana/node-books</Text></Text>
        <View style={[styles.titleWrap]}>
          <Text style={[styles.title]}>Node.js 名人</Text>
        </View>
        <Text style={[styles.row]}>《<Text style={[styles.strong]}>名人堂</Text>》</Text>
        <Text style={[styles.row]}><Text href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82" style={[styles.highlight]}>https://github.com/cnodejs/nodeclub/wiki/名人堂</Text></Text>
        <View style={[styles.titleWrap]}>
          <Text style={[styles.title]}>Node.js 服务器</Text>
        </View>
        <Text style={[styles.row, styles.lastRow]}>新手搭建 Node.js 服务器，推荐使用无需备案的 <Text href="https://www.digitalocean.com/?refcode=eba02656eeb3" style={[styles.highlight]}>DigitalOcean(https://www.digitalocean.com/)</Text></Text>
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
  strong: {
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
