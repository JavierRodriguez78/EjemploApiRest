var Libros = require('../modelos/libros');
var Sequelize = require('sequelize');

var _sequelize = new Sequelize('libros','root','123456',{
  host:'localhost',
  dialect:'mysql',
  pool: {
    max:5,
    min: 0,
    idle:10000
  }
});


function libroCtrl(req, res, next)
{
  var _libros = new Libros(_sequelize);
  var libro = req.body;

  this.addBook =  function(){
    this.createBook = _libros.create({
        title : libro.title,
        autor : libro.autor
      }).then(function(){
          res.status(200).send();
      }).error(function(err){
        res.status(403).send();
      });
  };

  this.getAll = function(){
    _libros.findAll()
    .then(function(data)
    {
      res.status(200).jsonp(data);
    })
  }

  this.getBookByID = function(){
    _libros.findById(req.params.id)
    .then(function(data)
    {
      res.status(200).jsonp(data);
    }).error(function(err){
    res.status(403).send();
    })
  };

  this.deleteBook = function(){
    _libros.destroy({where :{id:req.params.id}})
    .then(function(){
      res.status(204).send();
    })
    .error(function(){
      res.status(403).send();
    })
  }



  this.updateBookById = function()
  {
    _libros.findById(req.params.id)
    .then(function(book){
      book.title= req.body.title;
      book.autor = req.body.autor;
      book.save()
      .then(function(result){
        res.status(200).jsonp(result)
      })
    })
  }
}













module.exports = libroCtrl;
