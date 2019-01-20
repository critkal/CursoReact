import React from 'react';
import {View, Text, StyleSheet}  from 'react-native';

class Todo extends React.Component{
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 7.5,
    marginBottom: 7.5,
    textAlign: 'left',
    shadowColor: 'black',
    shadowOffset: {
      width:10,
      height:10
    },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    color: '#4286f4',
  }
});
export default Todo;