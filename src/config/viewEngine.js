// import Express
const express = require("express");
const path = require("path");

// Config View Engine
let cfgVE = (app) => {

    app.set("view engine", "ejs");
    app.set("views", "src/mysrc/views");
}
module.exports = cfgVE;