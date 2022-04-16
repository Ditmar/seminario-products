// Transpile todo el código que sigue a esta línea con babel y use el ajuste preestablecido '@babel/preset-env' (también conocido como ES6).
require("@babel/register")({
    presets: ["@babel/preset-env"]
  });
  
  // Importamos el resto de nuestra aplicación
  module.exports = require('./server.js')