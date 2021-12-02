const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const path = process.argv[3];

request(url, function (error, response, body) {
  console.error("error: ", error);
  console.log("statusCode: ", response && response.statusCode);
  console.log("body: ", body);

  const bytes = body.length;

  fs.writeFile(path, body, { encoding: "utf-8" }, () => {
    if (error) {
      return console.error(error);
    } else {
      console.log(`Downloaded and save ${bytes} to ${path}`);
    }
  });
});
