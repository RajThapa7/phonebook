require('dotenv').config();
var admin = require("firebase-admin");

var serviceAccount = require('../serviceAccount.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function decodeIDToken(req, res, next) {
    const header = req.headers?.authorization;
    if (header !== 'Bearer null' && req.headers?.authorization?.startsWith('Bearer ')) {
  const idToken = req.headers.authorization.split('Bearer ')[1];
  try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req['user'] = decodedToken;
      } catch (err) {
        console.log(err);
      }
    }
  next();
  }
  module.exports = decodeIDToken;