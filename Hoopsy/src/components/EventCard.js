import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class EventCard extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View style={styles.eventCardContainer}>
                <View style={styles.eventCard}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    eventCardContainer: {
        borderRadius: 5,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { 
            width: 1,
            height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.35,
        shadowRadius: 2,
        marginHorizontal: 5,
        marginVertical: 5,
        flex: 1
    },
    eventCard: {
        marginHorizontal: 15,
        marginVertical: 15
    }
});