import React, { Component } from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { withNavigation } from "react-navigation";

export default withNavigation(class extends Component {
  render() {
    return (
      <View style={styles.flatListWrap}>
        <FlatList
          initialNumToRender={10}
          onEndReachedThreshold={0.1}
          // 被触发的回调
          onEndReached={this.props.loadMore}
          data={this.props.data}
          keyExtractor={item => item.id}
          getItemLayout={(data, index) => (
            { length: 68, offset: 68 * index, index }
          )}
          renderItem={({ item }) => (
            <TouchableHighlight
              activeOpacity={0.9}
              onPress={() =>
                this.props.navigation.navigate('Detail', {
                  item: item
                })
              }>
              <View style={styles.container}>
                <Image source={{ uri: item.author.avatar_url }} style={styles.avatar} />
                <View style={styles.rightContainer}>
                  <Text style={[styles.rightTopTitle]} numberOfLines={1} ellipsizeMode={'tail'}>{item.title}</Text>
                  <View style={[styles.rightBottomWrap]}>
                    <Text style={[styles.rightBottomCount]}>{item.reply_count}/{item.visit_count}</Text>
                    <Text style={[styles.rightBottomTime]}>{item.last_reply_at}</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
})

const styles = StyleSheet.create({
  flatListWrap: {
    flex: 1
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    height: 68
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 10
  },
  rightContainer: {
    flex: 1,
    marginLeft: 10
  },
  rightTopTitle: {
    fontSize: 16
  },
  rightBottomWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  rightBottomCount: {
    color: '#666'
  },
  rightBottomTime: {
    color: '#666'
  }
})
