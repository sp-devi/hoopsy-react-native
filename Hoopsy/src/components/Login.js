import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.emailAddressView}>
                    <TextInput
                        style={styles.emailAddressText}
                        placeholder="Email or Phone"
                        placeholderTextColor="gray"
                        backgroundColor="white"
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.passwordText}
                        placeholder="Password"
                        placeholderTextColor="gray"
                        backgroundColor="white"
                    />
                </View>
                <View style={styles.singInView}>
                    <TouchableOpacity
                        style={styles.singInButton}
                        onPress={() => { }}>
                        <Text style={styles.singInButtonText}>
                            Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: "#cc4400",
    },
    emailAddressView: {
        marginHorizontal: 50,
        marginVertical: 15,
        paddingTop: 50
    },
    passwordText: {
        marginHorizontal: 50,
        marginVertical: 15
    },
    singInView: {
        marginHorizontal: 50,
        marginVertical: 15
    },
    singInButton: {
        backgroundColor: "white",
        width: "100%",
    },
    singInButtonText: {
        textAlign: "center"
    }
});