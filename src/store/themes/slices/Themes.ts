import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { SetThemes } from "../..";

export interface Themes{
    name : string
}

const initialState : Themes = {
    name : ''
}


export const Themes = createSlice({
    name : 'Themes',
    initialState,
    reducers :{
        SetThemes : (state, {payload}) => {
            state.name = payload.name;
        } 
    }

})



// export const Themes = createSlice({
//     name : 'Themes',
//     initialState,
//     reducers :{},
//     extraReducers : (builder) => {
//         builder.addCase(SetThemes.fulfilled, (state, {payload}) => {
//             state.name = payload.name;
//         }
//     )}

// })

export const {SetThemes} = Themes.actions;
export default Themes.reducer;
