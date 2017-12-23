var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
libCtrl = require ('./controladores/libroCtrl'),
cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

var router = express.Router();







router.get('/', function(req,res){
  res.send("Yeeeaaaaahhhh estoy en marcha");
});

router.get('/pringaillo/',function(req, res){
  res.send("hola pringaillo 2 ");
})
router.get('/pringaillo/:nombre',function(req, res){
  var nombre = req.params.nombre;
  res.send("hola pringaillo "+ nombre);
})

router.get('/libros/',function (req,res, next){
  var _librosCTrol = new libCtrl(req, res, next) ;
  _librosCTrol.getAll();
});


router.get('/libros/:id',function(req,res,next){
  var _librosCTrol = new libCtrl(req, res, next) ;
  _librosCTrol.getBookByID();
})


router.post('/libros/', function(req, res,next){
   var _librosCTrol = new libCtrl(req, res, next) ;
   _librosCTrol.addBook();
});


router.put('/libros/:id', function (req, res,next){
  var _librosCTrol = new libCtrl(req, res, next) ;
  _librosCTrol.updateBookById();
})

router.post('/pringaillo', function (req,res){
  var info= req.body.name;
  console.log(info);
  res.status(200).send();
})

router.delete('/libros/:id', function(req, res, next){
  var _librosCTrol = new libCtrl(req, res, next) ;
  _librosCTrol.deleteBook();
})

app.use(router);

app.listen(3000, function(){
  console.log("Yeeeaaaahhh nuestro primer servidor")
});
