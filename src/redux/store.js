import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        // categoryState: categoryState.reducer key can be custom but lets maintain standard name
    }
});
export default store;