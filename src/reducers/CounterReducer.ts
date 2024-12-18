const initialState = {
    firstName: "John",
    lastName: "Doe",
};

export function nameReducer(state = initialState, action: { type: string, payload: {firstName: string, lastName: string}}) {
    switch (action.type) {
        case 'PRINT_NAME':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
        default:
            return state;
    }
}