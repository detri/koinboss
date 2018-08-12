import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BuyButton extends React.Component {
    render() {
        return (
            <View style={[styles.buyButton, {backgroundColor: this.props.color}]}>
                <Text style={styles.buyText}>{this.props.children}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
});

export default BuyButton;