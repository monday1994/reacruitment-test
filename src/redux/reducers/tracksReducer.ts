import {SET_TRACKLIST} from '../../constants/actionTypes';

interface Action {
    type: string,
    tracksList: any[]
}

export const tracksInitialState = [];

const tracksReducer = (state = tracksInitialState , action: Action) => {
    const {
        type,
        tracksList
    } = action;

    switch (type) {
        case SET_TRACKLIST:
            return tracksList;
        default:
            return state;
    }
};

export default tracksReducer;
