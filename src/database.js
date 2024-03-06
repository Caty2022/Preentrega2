const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://catalinakrenz3316:coderhouse@cluster0.w8yg92g.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Conexión exitosa"))
  .catch(() => console.log("Error en la conexión"));
