import React, { Component } from 'react';
import {StyleSheet, ScrollView, View, Text, PermissionsAndroid} from 'react-native';
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
    const todo = this.props.navigation.getParam('todo');
    console.warn(todo)
    return (
      <View>
        <Text>{todo.text}</Text>
        <Text>
          Created at: {todo.location}
        </Text>
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
      idCount: 0,
      todos : [],
    }

    this.requestMapsPermission();
  }

  async requestMapsPermission(){
    try{
      const isGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, 
        {
          'title': 'FBI here',
          'message': 'We need to know your location ;)'
        }
      )
      this.setState({
        geolocationPermissionGranted: isGranted === 'granted',
      })
    } catch (err) {
      console.error(err);
    }
  }
  
  addTodo(text) {
    const id = this.state.idCount +1;
    this.setState({
      todos: [{ id, text}].concat(this.state.todos),
      idCount: id
    });

    if(this.state.geolocationPermissionGranted) {
      navigator.geolocation.getCurrentPosition((pos)=> {
        this.setTodoLocation(id, pos.coords)
      }, null, {enableHighAccuracy: true})
    }
  }

  async setTodoLocation(id, coords) {
    const {latitude, longitude} = coords;
    
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`);
      const data = await response.json();

      if(!data.error_message) {
        const address = data.results[0].formatted_address;
  
        const {todos} = this.state;
        todos.find(todo => todo.id === id).location = address;
  
        this.setState({
          todos
        })
      } else {
        throw JSON.stringify(data);
      }
    }
    catch(err) {
      console.error(err)
    }

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