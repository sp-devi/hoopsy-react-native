/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header.js';
import EventTypeSelector from './src/components/EventTypeSelector.js';
import Footer from './src/components/Footer.js';
import SportEvent from './src/components/SportEvent.js';
import Login from './src/components/Login.js';

const App: () => React$Node = () => {
  return (
    <>
      <Login />
      {/* <View>
        <View style={{ height: 50 }}>
          <Header />
        </View>
        <View>
          <EventTypeSelector />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <SportEvent />
        </ScrollView>
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
          <Footer />
        </View>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  }
});

export default App;
