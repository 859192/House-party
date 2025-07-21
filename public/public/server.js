const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3000;

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// MongoDB connection (removed deprecated options)
mongoose.connect('mongodb://127.0.0.1:27017/form');

const db = mongoose.connection;
db.on('error', (err) => {
    console.error("MongoDB connection error:", err);
});
db.once('open', () => {
    console.log("MongoDB connected successfully");
});

const userSchema = new mongoose.Schema({
    name: String,
    mobile: String
});

const Users = mongoose.model("data", userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/post', async (req, res) => {
    const { name, mobile } = req.body;
    const user = new Users({
        name,
        mobile,
    });
    await user.save();
    console.log(user);
    res.send("Form Submitted Successfully");
});

app.listen(port, () => {
    console.log("Server running on port", port);
});
