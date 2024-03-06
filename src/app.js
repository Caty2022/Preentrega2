const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const multer = require("multer");
const PUERTO = 8080;
require("./database.js");

const productsRouter = require("./routes/products.router.js");
const cartsRouter = require("./routes/carts.router.js");
const viewsRouter = require("./routes/views.router.js");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/img");
    //Carpeta donde se guardan las imagenes.
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    //Mantengo el nombre original
  },
});
const upload = multer({ storage: storage });

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./src/public"));

//Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Multer
app.post("/upload", upload.single("imagen"), (req, res) => {
  res.send("Imagen cargada");
});

//Rutas:
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
