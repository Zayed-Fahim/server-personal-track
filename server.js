const app = require("./app");
require("dotenv").config();
const connect = require("./utils/dbConnect");

const port = process.env.PORT || 5000;

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
