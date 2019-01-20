/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      todos : [],
    }
  }
  
  addTodo(text) {
    this.setState({
      todos: [{ text: text }].concat(this.state.todos)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodo add={text => this.addTodo(text)}/>
        <ScrollView
          contentContainerStyle={styles.dereg}>
          <TodoList todoList={this.state.todos}/>
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  dereg:{
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
});
