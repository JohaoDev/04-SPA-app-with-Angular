const env = require("dotenv").config(),
  app = require("./app"),
  port = process.env.PORT || 3000,
  fs = require("fs"),
  httpsOptions = {
    key: fs.readFileSync("./security/key.pem"),
    cert: fs.readFileSync("./security/cert.pem"),
  };

let https = require("https").Server(httpsOptions, app);

https.listen(port, (err) => {
  !err
    ? console.log(`The service is running at https://localhost:${port}/`)
    : console.log(`the service is not working`);
});
