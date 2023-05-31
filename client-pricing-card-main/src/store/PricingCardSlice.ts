import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "../../public/data.json";
import { Lesson, RootState } from "../interface/interface";

const initailLessonsState: Lesson[] = data.map((lesson) => {
  return {
    nbLessons: lesson.nbLessons,
    duration: lesson.duration,
    label: {
      ru: lesson.label.ru,
      en: lesson.label.en,
    },
    description: lesson.description,
    plan: lesson.plan,
    type: lesson.type,
    price: {
      primary: lesson.price.primary,
      secondary: lesson.price.secondary,
    },
  };
});
const initialState: RootState = {
  lessonState: initailLessonsState,
  plan: "foreigner",
  foreignRegular: 1000,
  foreignPlus: 1200,
  foreignFlexi: 1400,
  native5: 750,
  native10: 1300,
  native20: 2600,
  native40: 5000,
};

const pricingCardSlice = createSlice({
  name: "pricing-card",
  initialState,
  reducers: {
    setPlanType: (state, action: PayloadAction<string>) => {
      state.plan = action.payload;
    },
    setForeignRegularPrice: (
      state,
      action: PayloadAction<{ numClasses: number; duration: number }>
    ) => {
      const { numClasses, duration } = action.payload;
      const price = state.lessonState.find(
        (lesson) =>
          lesson.plan === "REGULAR" &&
          lesson.type === "FOREIGNER" &&
          lesson.nbLessons === numClasses &&
          lesson.duration === duration
      );
      state.foreignRegular = price?.price.primary ?? 1000;
      console.log(price?.price.primary);
    },
    setForeignPlusPrice: (
      state,
      action: PayloadAction<{ numClasses: number; duration: number }>
    ) => {
      const { numClasses, duration } = action.payload;
      const price = state.lessonState.find(
        (lesson) =>
          lesson.plan === "PLUS" &&
          lesson.type === "FOREIGNER" &&
          lesson.nbLessons === numClasses &&
          lesson.duration === duration
      );
      state.foreignPlus = price?.price.primary ?? 1200;
    },
    setForeignFlexiPrice: (
      state,
      action: PayloadAction<{ numClasses: number; duration: number }>
    ) => {
      const { numClasses, duration } = action.payload;
      const price = state.lessonState.find(
        (lesson) =>
          lesson.plan === "FLEXI" &&
          lesson.type === "FOREIGNER" &&
          lesson.nbLessons === numClasses &&
          lesson.duration === duration
      );
      state.foreignFlexi = price?.price.primary ?? 1400;
    },
    setNativePrice5: (
      state,
      action: PayloadAction<{ numClasses: number; duration: number }>
    ) => {
      const { duration } = action.payload;
      const price = state.lessonState.find(
        (lesson) =>
          lesson.type === "NATIVE" &&
          lesson.nbLessons === 5 &&
          lesson.duration === duration
      );
      state.native5 = price?.price.primary ?? 1400;
    },
    setNativePrice10: (
      state,
      action: PayloadAction<{ numClasses: number; duration: number }>
    ) => {
      const { duration } = action.payload;
      const price = state.lessonState.find(
        (lesson) =>
          lesson.type === "NATIVE" &&
          lesson.nbLessons === 10 &&
          lesson.duration === duration
      );
      state.native10 = price?.price.primary ?? 1400;
    },
    setNativePrice20: (
      state,
      action: PayloadAction<{ numClasses: number; duration: number }>
    ) => {
      const { duration } = action.payload;
      const price = state.lessonState.find(
        (lesson) =>
          lesson.type === "NATIVE" &&
          lesson.nbLessons === 20 &&
          lesson.duration === duration
      );
      state.native20 = price?.price.primary ?? 1400;
    },
    setNativePrice40: (
      state,
      action: PayloadAction<{ numClasses: number; duration: number }>
    ) => {
      const { duration } = action.payload;
      const price = state.lessonState.find(
        (lesson) =>
          lesson.type === "NATIVE" &&
          lesson.nbLessons === 40 &&
          lesson.duration === duration
      );
      state.native40 = price?.price.primary ?? 1400;
    },
  },
});

export const {
  setPlanType,
  setForeignRegularPrice,
  setForeignPlusPrice,
  setForeignFlexiPrice,
  setNativePrice5,
  setNativePrice10,
  setNativePrice20,
  setNativePrice40,
} = pricingCardSlice.actions;

export default pricingCardSlice.reducer;
