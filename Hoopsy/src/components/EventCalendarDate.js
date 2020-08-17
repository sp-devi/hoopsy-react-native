import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class EventCalendarDate extends Component {

    getMonth() {
        return (
            <View>
                {this.props.children}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.calendarDateContainer}>
                <View style={styles.calendarDateMonth}>
                    <Text>
                        {this.getMonth()}
                    </Text>
                </View>
            </View>
        );
    }
}
// </EventCard>
const styles = StyleSheet.create({
    calendarDateContainer: {
        flexDirection: "column"
    }
});
