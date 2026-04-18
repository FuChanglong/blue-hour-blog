import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    name: string
    age: number
}

const initialState: UserState = {
    name: '张三',
    age: 18
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload
        }
    }
})

export const { setName } = userSlice.actions
export default userSlice.reducer