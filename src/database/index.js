import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl = "mongodb://127.0.0.1:27017/blogs";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
