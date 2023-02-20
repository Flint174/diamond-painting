import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImageState {
  src: string | null;
}

export const imageInitialState: ImageState = {
  src: null,
};

export const imageSlice = createSlice({
  name: "image",
  initialState: imageInitialState,
  reducers: {
    setImage: (state, { payload }: PayloadAction<string>) => {
      state.src = payload;
    },
  },
});

export const { setImage } = imageSlice.actions;
export const imageReducer = imageSlice.reducer;
