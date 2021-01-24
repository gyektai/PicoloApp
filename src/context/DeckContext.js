import createDataContext from './createDataContext';

const deckReducer = (state, action) => {
    switch (action.type) {
        case 'change_deck':
            return action.payload.deck;
        default:
            return state;
    }
};

const changeDeck = (dispatch) => {
    return (deck, callback) => {
        dispatch({ type: 'change_deck', payload: { deck } });
        if(callback) {
            callback();
        };
    };
};

export const { Context, Provider } = createDataContext(
                                        deckReducer,
                                        { changeDeck },
                                        [{ title: 'Quick Play'}]
                                    );