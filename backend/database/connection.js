const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/GymApp");

    console.log("Conectado correctamente a BD: GymApp");
  } catch (error) {
    console.log(error);
    throw new Error("No se ha podido conectar a la DB");
  }
};

module.exports = {
  connection,
};
