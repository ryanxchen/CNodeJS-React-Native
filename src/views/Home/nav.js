import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const menuList = [
  { name: '全部', type: '' },
  { name: '精华', type: 'good' },
  { name: '分享', type: 'share' },
  { name: '问答', type: 'ask' },
  { name: '招聘', type: 'job' }
]

export default class extends Component {
  changeTypeHandle = (type) => {
    this.props.onChange(type)
  }

  render() {
    return (
      <View style={[styles.navWrap]}>
        {
          menuList.map((menu, index) => {
            return (
              <View style={[styles.navItem]} key={index}>
                <Text
                  onPress={() => this.changeTypeHandle(menu.type)}
                  style={[
                    styles.navItemText,
                    this.props.activeType === menu.type ? styles.navItemTextActive : ''
                  ]}>{menu.name}
                </Text>
              </View>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navWrap: {
    flexDirection: 'row',
    height: 48
  },
  navItem: {
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196f3'
  },
  navItemText: {
    color: '#fff',
    fontSize: 20
  },
  navItemTextActive: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})
