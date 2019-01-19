import React from 'react';
import {View, TextInput, Button, StyleSheet}  from 'react-native';

class AddTodo extends React.Component{
    constructor(){
        super();

        this.state = {
            text: ''
        }
    }

    onTextInput(text){
        this.setState({
            text
        })
    }

    addTodo() {
        this.props.add(this.state.text);
        this.setState({
            text: ''
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.imput}
                    value={this.state.text}
                    onChangeText={text => this.onTextInput(text)}
                    />
                <Button 
                    style={styles.button}
                    onPress={()=> this.addTodo()}
                    title='Add'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        backgroundColor:'lightgray',
        flexDirection: 'row',
    },
    imput: {
        flex: 1,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        marginRight: 10,
    },
    button: {
        flexShrink: 0,
    }
});

export default AddTodo;