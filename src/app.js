
import express from "express";
import userRoutes from './router/user.router.js';
import productsRoutes from './router/products.router.js';
import cartRoutes from './router/cart.router.js';
import { connectMongoDB } from "./config/mongoDB.config.js";

connectMongoDB();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/index', express.static("public")); 

app.use((req, res, next) => {
    console.log("Ruta a nivel app ejecutándose");
    next();
});

app.use("/api/users", userRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/carts", cartRoutes);

app.get('/test', (req, res) => {
    res.send('¡La ruta de prueba está funcionando!');
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("error");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

