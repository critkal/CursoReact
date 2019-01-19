import React from 'react';
import {View, Text, StyleSheet}  from 'react-native';

class Todo extends React.Component{
  render () {
    return (
      <View>
        <Text style={styles.todo}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  todo: {
    fontSize: 15,
    textAlign: 'center',
    color: '#4286f4',
  },
});
export default Todo;