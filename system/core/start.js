const bodyParser = require("body-parser");

//Creacion de archivo start para incluir las dependencias
module.exports = function (app) {
  let apiRoutes = require("../Router/routes");
  let apiVersion = "v1";

  app.get("/", (req, res) => res.send("Express world main"));

  app.use("/" + apiVersion, apiRoutes);

  InitApp(app);
};
function InitApp(app) {
  //puerto de salida
  const PORT = process.env.PORT || 3050;

  //Iniciamos el parser de tipo json
  app.use(bodyParser.json());

  //iniciamos el puerto
  app.listen(PORT, () => console.log(`Server start on port: ${PORT}`));
}
