export function incrementCounter(count) {
    console.log('Increment '+count);
    return {
        type: 'COUNTER_INCREMENT',
        payload: count
    }
}
export function decrementCounter(count) {
    console.log('Decrement ' + count);
    return {
        type: 'COUNTER_DECREMENT',
        payload: count
    }
}