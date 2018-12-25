var moment = require('moment');
var date = moment();
// export default function () {
//     return [
//         { title: 'Node JS', body: 'Finish the course', time: date.format('h:mm a'), status: 1 },
//         { title: 'Eggs', body: 'Get some eggs', time: date.format('h:mm a'), status: 0 },
//         { title: 'Youghurt', body: 'Eat Curd', time: date.format('h:mm a'), status: 0 },
//         { title: 'Sleep', body: 'Get Plenty', time: date.format('h:mm a'), status: 0 },
//     ]
// }
export default function (state = [], action) {
    console.log('Action received', action);
    switch (action.type) {
        case 'INSERT_NOTE':
            console.log('Reducer Notes: '+action.payload);
            // return state.concat([action.payload.data]); //[city, city, city]
            let note = {};
            note.title = action.payload.term;
            note.body = action.payload.noteBody;
            note.time = date.format('h:mm a')
            note.status = 0
            return [note, ...state]; //[city, city, city]

    }
    return state;
}