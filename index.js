const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


const authRoutes = require('./src/routes/auth.route.js');
const otpRoutes = require('./src/routes/otp.route.js');

// sadfsdaf


const connectDb = require('./src/database/db.js');


const app = express();
const port = 3000;

dotenv.config();
app.use(cors())

app.use(bodyParser.json());
connectDb()


app.use('/api/auth', authRoutes);
app.use('/api/otp/', otpRoutes);







app.get("/", (req, res) => {
    res.send("Server is running");
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
