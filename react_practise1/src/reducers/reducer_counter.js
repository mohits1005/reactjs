export default function (state = 0, action) {
    switch (action.type) {
        case 'COUNTER_INCREMENT':
            return action.payload + 1;
        case 'COUNTER_DECREMENT':
            return action.payload - 1;
    }
    return state;
}