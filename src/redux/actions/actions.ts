import {dezerAPIclient} from '../../utils/apiService';
import {SET_RESULTS, SET_TRACKLIST} from '../../constants/actionTypes';

export const search = (shouldClearSearchResults: boolean = false, query: string) => async (dispatch: Function, getState: Function) => {
    try {
        const searchQuery = query || null;

        const {data: {data}, total, next, prev} = await dezerAPIclient.get(`/search?q=artist:"${searchQuery}"`);

        dispatch({type: SET_RESULTS, data, total, next, prev, query: searchQuery})
    } catch(err) {
        console.error(err);
    }
};

export const fetchTrackList = (albumId: string) => async (dispatch: Function) => {
    try {
        const {data: {data}} = await dezerAPIclient.get(`/album/${albumId}/tracks`);

        dispatch({type: SET_TRACKLIST, tracksList: data})
    } catch(err) {
        console.error(err);
    }

};