import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from './weather/slices'
import themeReducer from './themes/slices/Themes'
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer : {
        AppTheme : themeReducer,
        weatherData : weatherReducer
    },
    middleware:  [sagaMiddleware]
    // middleware:  getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch