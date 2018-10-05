import React, { Component } from 'react';
import Colors from '../theme/colors';
import { View, ScrollView, Image } from 'react-native';
import {
  Text,
} from '../components';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f7f7f7', flex: 1, padding: 16 }}>
        <Text size={25} fontWeight="bolder"> Minicursos </Text>
        <ScrollView horizontal>
          <View style={{
            backgroundColor: 'white', borderRadius: 5, padding: 8, width: 196, height: 356, marginRight: 8, ...Colors.shadows.card,
          }}

          >
            <View>
              <Image source={require('../../assets/images/react-native-banner.png')} style={{
                width: '100%',
                height: 131
              }} />
            </View>

            <View style={{ flex: 1 }}>
              <Text numberOfLines={1}>Como ser o melhor goleiro do Intercompp - </Text>
              <Text numberOfLines={2}>Afonso Tessari</Text>
              <View style={{ flex: 1, flexDirection:'row', flexWrap:'wrap' }}>
                  <View style={{
                    paddingHorizontal:12,
                    paddingVertical: 4,
                    borderRadius:12,
                    backgroundColor:Colors.badgeColors.color1,
                    alignSelf:'flex-start'

                  }}>
                  <Text>mobile</Text></View>
              </View>
              <View>
                <Text>Botao</Text>
              </View>
            </View>
          </View>
          <View style={{
            backgroundColor: 'white', borderRadius: 5, padding: 8, width: 196, height: 356, marginRight: 8, ...Colors.shadows.card,
          }}

          >
            <View>
              <Image source={require('../../assets/images/node-banner.png')} style={{
                width: '100%',
                height: 131
              }} />
            </View>


          </View>

          <View style={{
            backgroundColor: 'white', borderRadius: 5, padding: 8, width: 196, height: 356, marginRight: 8, ...Colors.shadows.card,
          }}

          >
            <View>
              <Image source={require('../../assets/images/javascript-banner.png')} style={{
                width: '100%',
                height: 131
              }} />
            </View>


          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}

export default HomeScreen;
