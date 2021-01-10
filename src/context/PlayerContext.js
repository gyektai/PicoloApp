import createDataContext from './createDataContext';

const playerReducer = (state, action) => {
    switch (action.type) {
        case 'add_player':
            return [
                ...state,
                {
                    playerName: action.payload.playerName
                }
            ];
        default:
            return state;
    }
};

const addPlayer = (dispatch) => {
    return (playerName, callback) => {
        dispatch({ type: 'add_player', payload: { playerName }});
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
