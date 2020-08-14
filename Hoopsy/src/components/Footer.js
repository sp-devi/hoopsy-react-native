import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FooterIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footerContainer}>
                <View style={styles.header}>
                    <FooterIcon style={styles.imgLogo} name="basketball-hoop-outline" size={30} />
                </View>
                <View style={styles.header}>
                    <Icon style={styles.imgLogo} name="search" size={30} />
                </View>
                <View style={styles.header}>
                    <Icon style={styles.imgLogo} name="search" size={30} />
                </View>
                <View style={styles.header}>
                    <Icon style={styles.imgLogo} name="search" size={30} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#cc7904",
        height: 40,
        justifyContent: "space-between"
    },
    imgLogo: {
        height: 34,
        width: 34,
        marginTop: 5,
        marginLeft: 2
    },
});