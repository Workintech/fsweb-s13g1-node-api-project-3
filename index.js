// require your server and launch it
const server = require("./api/server"); //servere import ettik
require("dotenv").config();

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
