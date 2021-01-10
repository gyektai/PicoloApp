import createDataContext from './createDataContext';

const playerReducer = (state, action) => {
    switch (action.type) {
        case 'add_player':
            return [
                ...state,
                {
                    playerName: action.payload.name
                }
            ];
        default:
            return state;
    }
};

const addPlayer = (dispatch) => {
    return (name, callback) => {
        dispatch({ type: 'add_player', payload: { name }});
        if(callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
                                        playerReducer,
                                        { addPlayer },
                                        []
                                    );
