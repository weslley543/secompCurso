import React, { Component } from 'react';
import { View, TextInput, ImageBackground, TouchableHighlight, KeyboardAvoidingView, } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Constants } from 'expo';
import Colors from '../theme/colors';
import {
  LinearIcon,
  Logo, Text, CustomInput
} from '../components';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/images/bg.png')}
        style={{ width: '100%', height: '100%' }}
      >

        <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight, paddingHorizontal: 16 }}>
          <View style={{ alignItems: 'center', marginTop: 52 }}>
            <Logo color="white" style={{ width: 212, height: 52 }} />
            <Text fontWeight="light" color="white" style={{ textAlign: 'center', width: '50%' }}>Semana do Curso de Ciência da Computação</Text>

          </View>

          <KeyboardAvoidingView behavior="padding" style={{flex:1, marginHorizontal:16}}>
            <View style={{ flex: 1, justifyContent: 'center' }}>

              <CustomInput
                label="EMAIL : "
                value={this.state.email}
                onChangeText={(email) => { this.setState({ email: email }) }}
              />

              <CustomInput
                label="SENHA : "
                value={this.state.password}
                onChangeText={(password) => this.setState({ password: password })}
                secureTextEntry
              />

              <TouchableHighlight onPress={() => { this.props.navigation.navigate('DashboardTabs') }}
                style={{
                  backgroundColor: Colors.theme.primaryColor,
                  alignItems: 'center', paddingVertical: 16, borderRadius: 40, marginTop: 30
                }}>

                <Text style={{ color: 'white' }}>ENTRAR</Text>

              </TouchableHighlight>

              <Text color="white" style={{ textAlign: 'center' }}>Para criar uma conta,
              
              
              
<Text fontWeight="bold"
                  color={Colors.theme.primaryColor}
                  style={{ textDecorationLine: 'underline' }}>clique aqui
    </Text> </Text>
            </View>
          </KeyboardAvoidingView>

        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
