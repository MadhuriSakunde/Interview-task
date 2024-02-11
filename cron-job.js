//  node-cron : This module allows you to schedule task in node.js.
// Step 1 : Intall node-cron using command in termial as `npm i --save node-cron`
// Step 2 : add code for cron job schedular and follow below pattern to add schedule method's cron expression parameter i.e. schedue time to execute task.

// field	value
// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *

// second	0-59
// minute	0-59
// hour	0-23
// day of month	1-31
// month	1-12 (or names)
// day of week	0-7 (or names, 0 or 7 are sunday)

var cron = require('node-cron');
cron.schedule('0 0 19 * * *', () => {
  console.log('running this task each day at 7:00 PM');
});
