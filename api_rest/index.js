const clientsRoutes=require('./routes/clients');
const express = require("express");
const app=express();
const port=3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

clientsRoutes(app);
app.listen(port);
