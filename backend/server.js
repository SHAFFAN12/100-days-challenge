const express = require('express');
require('dotenv').config();
const dbConnect = require('./db');

const app = express();
dbConnect();
app.use(express.json({extended:false}));
//routes

app.use('/api/v1/user/', require('./routes/user'));
app.use('/api/v1/contact/', require('./routes/contact'));
app.use('/api/v1/auth/', require('./routes/auth'));


const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));