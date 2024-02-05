require('dotenv').config();
const express = require('express');
const {connectToDb} = require('./db/dbConnection');
const app = express();

app.use(express.json());
connectToDb();

app.use('/api/sms/v1/', () => {})
app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});