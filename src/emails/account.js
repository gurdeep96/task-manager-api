const sgMail = require('@sendgrid/mail')
//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/* sgMail.send({
    to : 'gurdeepsinghh96@gmail.com',
    from : 'gurdeepsinghh96@gmail.com',
    subject :'Testing SendGrid API',
    text : 'Hi, Guru here!'

})
 */

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to : email,
        from : 'gurdeepsinghh96@gmail.com',
        subject : 'Welcome to the Task App',
        text : `Welcome to the app, ${name}. Let me know how did you find our app.`
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to : email,
        from : 'gurdeepsinghh96@gmail.com',
        subject : 'Thanks for using the Task App',
        text : `GoodBye ${name}, Let us know how can we improve the application before saying bye.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}