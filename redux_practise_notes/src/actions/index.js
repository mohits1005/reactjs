export function insertNote(note) {
    console.log('action: '+note);
    return {
        type: 'INSERT_NOTE',
        payload: note
    }
}