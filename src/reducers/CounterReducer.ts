import {Customer} from "../models/customer.ts";

export const initialState : Customer[] = [];

export function CustomerReducer(state = initialState, action : {type: string, payload: Customer}) {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return [...state, action.payload];
        default:
            return state;
    }
}