import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Image
                        style={styles.imgLogo}
                        source={require("../../src/assets/hoopsy_logo_2.png")}
                    />
                </View>
                <View style={styles.headerLogoName}>
                    <Text style={styles.headerLogoNameText} >
                        Hoopsy
                    </Text>
                </View>
                <View style={styles.searchTextIput}>
                    <TextInput
                        style={styles.searchTextIputPlaceholder}
                        placeholder="Enter city, event name"
                        placeholderTextColor="gray"
                        backgroundColor="white"
                    />
                </View>
                <View style={styles.header}>
                    <Icon style={styles.imgLogo} name="search" size={30} color="white" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "#cc4400",
    },
    header: {
        borderWidth: 1,
    },
    headerLogoNameText: {
        textAlign: "center",
        paddingLeft: 5,
        width: 80,
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff0e6",
    },
    imgLogo: {
        height: 34,
        width: 34,
        marginTop: 5
    },
    searchTextIput: {
        flex: 1,
        paddingLeft: 25,
    },
    searchTextIputPlaceholder: {
        height: 35,
        width: 225,
    }
});