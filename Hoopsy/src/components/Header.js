import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
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
                <View style={styles.searchTextIput}>
                    <TextInput
                        style={styles.searchTextIputPlaceholder}
                        placeholder="Enter city, event name"
                        placeholderTextColor="gray"
                        backgroundColor="white"
                    />
                </View>
                <View style={styles.header}>
                    <Icon style={styles.imgLogo} name="search" size={30} />
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
        backgroundColor: "#cc7904"
    },
    header: {
        height: 45,
        backgroundColor: "#cc7904"
    },
    imgLogo: {
        height: 34,
        width: 34,
        marginTop: 5
    },
    searchTextIput: {
        flex: 1
    },
    searchTextIputPlaceholder: {
        height: 35,
    },
});