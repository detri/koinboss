export const RANDOMIZE_TRENDS = 'koinboss/gameState/RANDOMIZE_TRENDS';
export const TICK_MARKET = 'koinboss/gameState/TICK_MARKET';

import Chance from 'chance';
const chance = new Chance();

export const COINS = {
    BlocKoin: 'blockoin'
}

const defaultState = {
    coinValues: {
        [COINS.BlocKoin]: {
            value: 15,
            min: 5,
            max: 25,
            trend: chance.bool()
        }
    }
}

export default reducer(state = defaultState, action = {}) {
    switch(action.type) {
        case RANDOMIZE_TRENDS:
            let coinValues = {
                ...state.coinValues
            };
            for (let coin of COINS) {
                coinValues[coin] = {
                    ...coinValues[coin],
                    trend: chance.bool()
                }
            }
            return {
                ...state,
                coinValues
            };
        case TICK_MARKET:
            let coinValues = {
                ...state.coinValues
            };
            for (let coin of COINS) {
                let min = coinValues[coin].min;
                let max = coinValues[coin].max;
                let diff = chance.integer({ min: 1, max: 3 });
                let newValue;
                if (coinValues[coin].trend) {
                    let potentialDiff = coinValues[coin].value + diff;
                    if (potentialDiff <= max) {
                        newValue = potentialDiff;
                    } else {
                        newValue = coinValues[coin].value;
                    }
                } else {
                    let potentialDiff = coinValues[coin].value - diff;
                    if (potentialDiff >= min) {
                        newValue = potentialDiff;
                    } else {
                        newValue = coinValues[coin].value;
                    }
                }
                coinValues[coin].value = newValue;
            }
            return {
                ...state,
                coinValues
            };
    }
}