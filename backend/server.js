const app = require("./app");
const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
  console.log(`app is running at http://localhost:${PORT}`);
});

