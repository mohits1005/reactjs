export function selectBook(book){
    // console.log(book.title);
    //selectBook is an action creator and it needs to return an action,
    //an object with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}