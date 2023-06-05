// const express = require('express');
import express from "express";
import loaders from "./loaders";

const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     return res.send('success');
// });

loaders(app);

app.listen(PORT, () => {
    console.log(`Application listening at ${PORT}`);
})