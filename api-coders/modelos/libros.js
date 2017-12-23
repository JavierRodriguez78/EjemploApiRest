var Sequelize = require('sequelize');

module.exports = function(sequelize){
  var Libros = sequelize.define('libros',{
    title:{
      type: Sequelize.STRING,
      field : 'title'
    },
    autor:{
      type: Sequelize.STRING,
      field: 'autor'
    }
  });

  return Libros;
}
