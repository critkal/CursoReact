/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';

export default class App extends Component {
  constructor(){
    super();

    const todo1 = {
      text: 'This hate that you gave me',
    };
    const todo2 = {
      text: 'Keep saying the same thing',
    };
    const todo3 = {
      text: 'To sing when you hurt and to sing when you cry',
    };
    const todo4 ={
      text: 'To sing when you live and tho sing when you die',
    }
    this.state = {
      todos : [todo1, todo2, todo3, todo4],
    }
  }
  
  addTodo(text) {
    this.setState({
      todos: [{text: text}]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodo add={text => this.addTodo(text)}/>
        <TodoList todoList={this.state.todos}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    color: '#8286F4',
    margin: 10,
  }
});
