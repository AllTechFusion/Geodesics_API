const firebase = require("firebase-admin");
const admin=require('firebase-admin');
var serviceAccount = require('./admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),//vikrantvilaszore@gmail.com
    databaseURL: "https://doctor-crm-app.firebaseio.com",
    authDomain: "doctor-crm-app.firebaseapp.com",
    });
    const DB = admin.firestore();
module.exports = DB;