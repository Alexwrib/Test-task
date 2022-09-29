import {createSlice} from "@reduxjs/toolkit";

interface  UsersType {
   id:string;
   name:string;
   tel:string
}

const initialState:UsersType[] = [
    {id: '1', name: 'Саня', tel: '+37455024164'}
];

const contactSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        editUser: (state, action) => {
            const {id, name, tel} = action.payload
            const existingUser = state.find(user => user.id === id)
            if (existingUser) {
                existingUser.name = name;
                    existingUser.tel = tel;
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const existingUser = state.find(user => user.id === id)
            if (existingUser) {
                return state.filter(user => user.id !== id);
            }
        }
    }
});

export const {addUser, editUser, deleteUser} = contactSlice.actions
export default contactSlice.reducer