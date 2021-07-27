import { createSlice } from "@reduxjs/toolkit"
const initialState = { users: [] }

const testStore = createSlice({
    name: 'test',
    initialState: initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload
            console.log(state.users)
        }
    }
})

export const testActions = testStore.actions
export default testStore.reducer