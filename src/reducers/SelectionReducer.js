export default (state = 0, action) => {
    switch (action.type) {
        case 'select_video':
            return action.payload;
        default:
            return state;
    }
};