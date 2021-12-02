import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'Example...',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUsername: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateUsername } = userSlice.actions

export default userSlice.reducer