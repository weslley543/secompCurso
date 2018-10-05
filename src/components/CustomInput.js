import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native';
import Colors from '../theme/colors';
import { Text } from '../components';
class CustomInput extends Component {
    render() {
        return (
            <View>
                <Text
                color={Colors.theme.primaryColor}
                size={16}
                fontWeight='light'
                >
                {this.props.label}
                </Text>
                <TextInput
                    {...this.props}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="grey"
                    selectionColor="rgba(255,255,255, 0.33)"
                    style={styles.input}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.theme.primaryColor,
        borderWidth: 1,
        borderRadius: 40,
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 22,
        color: 'white',
    }
});

export default CustomInput;