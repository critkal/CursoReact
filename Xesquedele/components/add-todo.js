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
                <View style={styles.button}>
                    <Button 
                    disabled={this.state.text.length <= 3}
                    color={'#7e57c2'}
                    onPress={()=> this.addTodo()}
                    title='+'
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        backgroundColor:'#b085f5',
        flexDirection: 'row',
    },
    imput: {
        flex: 5,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 2,
        marginRight: 10,
        elevation: 3,
    },
    button: {
        flex: 1,
        flexShrink: 0,
        elevation: 3,
    }
});

export default AddTodo;