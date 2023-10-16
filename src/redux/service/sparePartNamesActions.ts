// sparePartNamesActions.ts
import { createAction } from "@reduxjs/toolkit";

export const addSparePartName = createAction<string>("sparePartNames/addName");
export const initializeSparePartNames = createAction<string[]>(
  "sparePartNames/initialize"
);
