import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class EventTypeSelector extends Component {

    onUpcomingEventPressHandler() {
        
    }

    render() {
        return (
            <View style={styles.eventSelectorContainer}>
                <View style={styles.eventSelector}>
                    <TouchableOpacity onPress={this.onUpcomingEventPressHandler} activeOpacity={0.5} >
                        <Text style={styles.eventTypeText}>Upcoming</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.eventSelector}>
                    <TouchableOpacity activeOpacity={0.5} >
                        <Text style={styles.eventTypeText}>Joining</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.eventSelector}>
                    <TouchableOpacity activeOpacity={0.5} >
                        <Text style={styles.eventTypeText}>Past</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    eventSelectorContainer: {
        flexDirection: "row",
        height: 40,
        borderTopColor: "#ddd",
        borderTopWidth: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: "#ddd",
        alignItems: "center",
        paddingHorizontal: 5
    },
    eventSelector: {
        flex: 1,
        justifyContent: "center",
    },
    eventTypeText: {
        textAlign: "center"
    }
});