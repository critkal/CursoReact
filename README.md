# CursoReact
Artefatos produzidos durante o curso de React Native de verão

## First time run (Ubuntu)

For instance, be sure to have Android Studio installed and have an emulated device running. The build process you will do at the console will automatically open your app on the device.

1. Install nvm
```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash``` and then ```nvm install stable```

2. Install React Native
```npm install -g react-native-cli```

3. Create app
```react-native init AwesomeProject```

4. Run app
```react-native run-android```

5. Start coding (```App.js```)

So, Let's begin: Open the ```App.js``` file and check the code.

### Component declaration: 
```javascript
class Hello extends Component {
  render() {
    return (
      <Text>
        Hello World!
      </Text>
    )
  }
}
```
- this snippet will display a Hello World text at the top of the screen.

### State declarations: 

```javascript
//just an example
this.state = {
      name: 'Kalizi',
    }
```

Obs.: Never use ```setState``` inside the ```render()``` call, it will enqueue changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.


### Styling
For styling, we have the following code:
```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
```
Obs.: Flex is the only styling that works on React Native

To apply the style, we go to the ```Text``` declaration and set it's style to ```container```

```html
<Text style={styles.container}>
    Hello World!
</Text>
```