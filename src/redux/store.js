import { configureStore } from "@reduxjs/toolkit";
import StudentsReducer from './StudentsReducer';

const store = configureStore({
    reducer: {
        students: StudentsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export default store;