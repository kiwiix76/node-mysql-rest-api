import express from 'express';
import plantesRoutes from "../src/routes/plantes.routes.js";
import cueillettesRoutes from "../src/routes/cueillettes.routes.js";
import indexRoutes from "../src/routes/index.routes.js";

// import {PORT} from './src/config.js'
const app = express();

app.use(express.json())

app.use(indexRoutes);
app.use('/api',plantesRoutes);
app.use('/api',cueillettesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Route Not found'
    });
});

export default app;