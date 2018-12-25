var moment = require('moment');
var date = moment();
export default function () {
    return [
        { title: 'Node JS', body: 'Finish the course', time: date.format('h:mm a'), status: 1 },
        { title: 'Eggs', body: 'Get some eggs', time: date.format('h:mm a'), status: 0 },
        { title: 'Youghurt', body: 'Eat Curd', time: date.format('h:mm a'), status: 0 },
        { title: 'Sleep', body: 'Get Plenty', time: date.format('h:mm a'), status: 0 },
    ]
}