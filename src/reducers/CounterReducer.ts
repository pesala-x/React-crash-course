const initialState = {
    firstName: "John",
    lastName: "Doe",
};

export function nameReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case 'PRINT':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
        default:
            return state;
    }
}