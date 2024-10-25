import express from 'express'
import bodyParser from 'body-parser'
import contactRoutes from './routes/contactRoutes.js'
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use('/api', contactRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 
