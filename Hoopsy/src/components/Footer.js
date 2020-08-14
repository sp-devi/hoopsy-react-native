import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FooterIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserIcon from 'react-native-vector-icons/FontAwesome';


export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footerContainer}>
                <View style={styles.footer}>
                    <Icon style={styles.imgLogo} name="event" size={30} />
                </View>
                <View style={styles.footer}>
                    <UserIcon style={styles.imgLogo} name="user" size={30} />
                </View>
                <View style={styles.footer}>
                    <UserIcon style={styles.imgLogo} name="group" size={30} />
                </View>
                <View style={styles.footer}>
                    <FooterIcon style={styles.imgLogo} name="forum-outline" size={30} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: "row",
        height: 45,
        borderTopWidth: 0.25,
        justifyContent: "space-between",
        backgroundColor: "#cc4400"
    },
    imgLogo: {
        height: 34,
        width: 34,
        margin: 7,
        color: "#ffffff"
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});