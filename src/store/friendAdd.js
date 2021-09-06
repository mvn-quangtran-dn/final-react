import {  createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const friendAdd = createSlice({
    name  : 'friendAdd',
    initialState,
    reducers:  {
        addOrRemoveFriend : (state, friend)  => {
          const idx = state.value.findIndex(x => x.id ===friend.payload.id);
          // const idx = state.value.indexOf(x => x.id===friend.param.id);
          if (idx !== -1) {
            state.value.splice(idx, 1);
          } else {
            state.value.push(friend.payload);
          }
        },
        removeFriend : (state, friend)  => {
          const idx = state.value.findIndex(x => x.id ===friend.payload.id);
          if (idx !== -1) {
            state.value.splice(idx, 1);
          }
        }
    }

});

export const { addOrRemoveFriend } = friendAdd.actions;

export default friendAdd.reducer;