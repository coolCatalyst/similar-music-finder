import { ADD_SONGS, REMOVE_SONGS } from "../actions/types";

const initialState = {
    songs: []
}

const SongsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_SONGS:
            return [ ...action.songs, ...state ];
        case REMOVE_SONGS:
            return state.songs.filter(song => song.id !== action.id);
        
        default:
            return state;
    }
}

export default SongsReducer;