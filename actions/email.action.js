const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class EmailAction {

    static async sendEmail(message, from, author) {

        const msg = {
            to: process.env.TARETMAIL,
            from: process.env.FROMMAIL, // Use the email address or domain you verified above
            subject: `Resume Web Email From ${author} - ${from}`,
            text: message,
            html: message,
        };
        try {
            await sgMail.send(msg);
        } catch (error) {
            throw error;

        }
    }

}

module.exports = EmailAction;