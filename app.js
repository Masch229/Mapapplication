const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const upload = multer({ dest: __dirname + "./uploads/images" });
const app2 = express();
const PORT = 3000;

app.use(express.static("./public"));

//app.get('/',(req,res)=>{
//   res.sendFile(path.resolve(__dirname),'./navbar-app/index.html')
//})

//app.all('*', (req, res)=>{
//    res.status(404).send('resource not found')
//})

app.use(express.static("public"));

app.get("/map", (req, res) => {
  res.sendFile(path.join(__dirname + "/public", "/allinone.html"));
});

app.post("/upload", upload.single("photo"), (req, res) => {
  if (req.file) {
    res.json(req.file);
  } else throw "error";
});

app.listen(PORT, () => {
  console.log("Listening at " + PORT);
});

app.get("/uploaded", function (req, res) {
  res.sendFile("/upload");
});

//var map = new H.Map(
//  document.getElementById("mapContainer"),
//  defaultLayers.vector.normal.map,
// {
//    zoom: 10,
//    center: { lat: 48.81, lng: 9.01 },
//  }
//);

app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
