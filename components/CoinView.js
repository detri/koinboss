import React from 'react';
import BuyButton from './BuyButton.js';
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
                <View style={[styles.coinRow, { top: -20, alignItems: 'center', justifyContent: 'space-around' }]}>
                    <Text style={{ color: '#fff', fontSize: 16, left: 80, top: -20, flex: 2.75 }}>Coin market info goes here</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ margin: 4, backgroundColor: '#890000', borderRadius: 5, height: 50, flex: 1, top: 18, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{color: '#fff', fontSize: 16}}>Sell</Text>
                        </View>
                        <View style={{ margin: 4, backgroundColor: '#ff0000', borderRadius: 5, height: 50, flex: 1, top: 18, left: -2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{color: '#fff', fontSize: 16}}>All</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.coinRow, { justifyContent: 'flex-start', marginRight: 8, flex: 0.5 }]}>
                    <BuyButton color={this.props.coin.colors[0]}>Buy</BuyButton>
                    <BuyButton color={this.props.coin.colors[0]}>Buy 10</BuyButton>
                    <BuyButton color={this.props.coin.colors[0]}>Buy 100</BuyButton>
                    <BuyButton color={this.props.coin.colors[0]}>Buy Max</BuyButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
  }
});