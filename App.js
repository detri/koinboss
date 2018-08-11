import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CoinView from './components/CoinView.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.logoPlaceholder}>KOINBOSS</Text>
        </View>
        <View style={styles.moneyDisplay}>
          <View style={styles.moneyContainer} />
          <View style={styles.separator} />
          <View style={styles.moneyContainer} />
        </View>
        <View style={styles.horizSeparator} />
        <ScrollView style={styles.scroll}>
          <CoinView
            coin={{
              name: 'BlocKoin',
              img: require('./resources/coin-logos/BlocKoinLogO.png'),
              colors: ['#f9ba2b', '#0842b3']
            }}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d9e8d6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  navbar: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#3d9645'
  },
  scroll: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  logoPlaceholder: {
    fontSize: 24,
    color: '#d9e8d6',
    paddingLeft: 15
  },
  moneyDisplay: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    padding: 8,
    paddingBottom: 5,
    justifyContent: 'space-around'
  },
  moneyContainer: {
    height: '100%',
    borderRadius: 5,
    width: '49%',
    backgroundColor: '#fff'
  },
  separator: {
    height: '100%',
    width: 2,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#6c966c'
  },
  horizSeparator: {
    height: 2,
    width: '96%',
    backgroundColor: '#6c966c'
  }
});
