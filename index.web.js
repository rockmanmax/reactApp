import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View  
} from 'react-native';  
  
class ReactNativeTestWeb extends Component {  
  render() {  
    return (  
      <view style="{styles.container}">  
        <text style="{styles.welcome}">  
          Welcome to React Native!  
        </text>  
        <text style="{styles.instructions}">  
          To get started, edit index.web.js  
        </text>  
        <text style="{styles.instructions}">  
          Press Cmd+R to reload  
        </text>  
      </view>  
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
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
  },  
  instructions: {  
    textAlign: 'center',  
    color: '#333333',  
    marginBottom: 5,  
  },  
});  
  
AppRegistry.registerComponent('ReactNativeTestWeb', () => ReactNativeTestWeb);  
AppRegistry.runApplication('ReactNativeTestWeb', { rootTag: document.getElementById('react-app') });  