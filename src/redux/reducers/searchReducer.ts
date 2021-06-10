import { SET_RESULTS } from '../../constants/actionTypes';

interface Action {
    type: string,
    data: string,
    prev: string,
    next: string,
    total: number,
    query: string,
}

export const searchInitialState = {
    albums: {
        data: [],
        prev: '',
        next: '',
        total: 0,
        query: ''
    }
};

const searchReducer = (state = searchInitialState , action: Action) => {
    const {
        type,
        data,
        prev = '',
        next,
        total,
        query
    } = action;

    switch (type) {
        case SET_RESULTS:
            return {
                data,
                prev,
                next,
                total,
                query
            };
        default:
            return state;
    }
};

export default searchReducer;
