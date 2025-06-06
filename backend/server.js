import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error: ", error);
    });
    app.listen(process.env.PORT || 5010, () => {
      console.log(`Server is Running`);
    });
  })
  .catch((error) => {
    console.log("MongoDb connection Failed !!!", error);
  });
