import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class CoinView extends React.Component {
    render() {
        return (
            <View style={[styles.coinContainer, {backgroundColor: this.props.coin.colors[1]}]}>
                <View style={styles.coinRow}>
                    <Image
                        source={this.props.coin.img}
                        style={{ width: 100, height: 105, margin: 5, flex: 1, marginLeft: 8, marginTop: 48 }} />
                    <Text style={{ fontSize: 36, textAlignVertical: 'top', flex: 1.75, color: this.props.coin.colors[0], marginLeft: 20 }}>{this.props.coin.name}</Text>
                    <View style={{ backgroundColor: this.props.coin.colors[0], height: '100%', width: '100%', margin: 8, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 5, flex: 1 }} >
                        <Text style={{ color: '#000', textAlignVertical: 'center' }}>$1,000,000</Text>
                    </View>
                </View>
                <View style={[styles.coinRow, { top: -20 }]}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Coin market info goes here</Text>
                </View>
                <View style={[styles.coinRow, { justifyContent: 'flex-start', marginRight: 8 }]}>
                    <View style={[styles.buyButton, {backgroundColor: this.props.coin.colors[0]}]}>
                        <Text style={styles.buyText}>Buy</Text>
                    </View>
                    <View style={[styles.buyButton, {backgroundColor: this.props.coin.colors[0]}]}>
                        <Text style={styles.buyText}>Buy 10</Text>
                    </View>
                    <View style={[styles.buyButton, {backgroundColor: this.props.coin.colors[0]}]}>
                        <Text style={styles.buyText}>Buy 100</Text>
                    </View>
                    <View style={[styles.buyButton, {backgroundColor: this.props.coin.colors[0]}]}>
                        <Text style={styles.buyText}>Buy Max</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    coinContainer: {
    margin: 8,
    height: 200,
    width: '96%',
    flex: 1,
    borderRadius: 5
  },
  coinRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buyButton: {
      width: '100%',
      height: '100%',
      flex: 1,
      marginLeft: 8,
      borderRadius: 5,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center'
  },
  buyText: {
      fontSize: 16,
      color: '#fff'
  }
};