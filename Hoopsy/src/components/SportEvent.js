import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Button } from 'react-native';

import EventCard from './EventCard';
import EventCalendarDate  from './EventCalendarDate';

export default class SportEvent extends Component {

    render() {
        return (
            <EventCard>
                <View style={styles.eventDate}>
                    <EventCalendarDate>
                        November 30, 2020
                    </EventCalendarDate>
                </View>
            </EventCard>
        );
    }
}
// </EventCard>
const styles = StyleSheet.create({

});
