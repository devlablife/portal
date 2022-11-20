const admin = require("firebase-admin");
const functions = require("firebase-functions");
const { default: next } = require("next");

admin.initializeApp();

const server = next({
  dev: false,
  conf: { distDir: ".next" },
});

const handle = server.getRequestHandler();

exports.web = functions
  .runWith({
    memory: "512MB",
    minInstances: process.env.GCLOUD_PROJECT === 'devlablife' ? 0 : 1,
  })
  .https.onRequest((req, res) => {
    return server.prepare().then(() => handle(req, res));
  });
