import React, { Component } from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';


const defaultNavigationOptions = {
  title: 'ToXesque',
  headerStyle: {
    backgroundColor: '#7e57c2',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white',
  }
}

class TodoDetails extends Component {
  static navigationOptions ={
    ...defaultNavigationOptions,
    title: 'Xesquing Details'
  }
  render () {
    return (
      <View>
        <Text>{this.props.navigation.getParam('text')}</Text>
      </View>
    )
  }
}


class Home extends Component {
  static navigationOptions = {
    ...defaultNavigationOptions,
  };

  constructor(props){
    super(props);

    // setTimeout(()=> {
    //   this.props.navigation.navigate('TodoDetails', {
    //     text: 'LERISGOOOO'
    //   });
    // }, 3000);

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
          <TodoList navigation={this.props.navigation} todoList={this.state.todos}/>
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

const AppNavigator = createStackNavigator({
  Home : {
    screen: Home 
  },
  TodoDetails : {
    screen: TodoDetails
  }
})

export default createAppContainer(AppNavigator);