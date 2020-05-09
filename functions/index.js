const functions = require('firebase-functions');
const admin =  require('firebase-admin');

admin.initializeApp();

const messaging = admin.messaging();

exports.sendMessage = functions.https.onCall((data, context) => {
    setTimeout(() => {
        messaging.send({
            webpush: {
                notification: {
                    tag: "thisIsATag"
                }
            },
            token: data.token
        });
    }, 10000);
});
  