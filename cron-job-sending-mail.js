var cron = require('node-cron');
var nodemailer = require('nodemailer'); // install nodemailer to send emails.

// created test account here for testing purpose. you can add your personal account detail below in create Tranport method parameter.
var testAccount = nodemailer.createTestAccount();

testAccount.then((account) => {
    
    // you can put personal email id's username password below to send email from.
    var transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    const mailOptions = {
        from: transporter.options.auth.user, // put email id from which we have to send mail
        to: 'abc@gmail.com, infodetails@gmail.com', // put list of emails here to whom we have to send mail
        subject: 'KYC Reminder', // put subject of mail
        attachments: [
            {
                filename: 'meeting-detail.txt',
                content: 'Please provide KYC as soon as possible !' // put content have add in email file attachment
            }
        ], // put atachment path or contect here which we have to send in mail
        html: '<p>hi KYC verification is pending. Please provide KYC as soon as possible.</p>'// put mail plain text body
    };
    
    // Email will be send each day at 7:00 PM
    cron.schedule('0 0 19 * * *', () => {
        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                console.log(err);
            else
                console.log('Email Sent Successfully !', info);
        });
    });
});

