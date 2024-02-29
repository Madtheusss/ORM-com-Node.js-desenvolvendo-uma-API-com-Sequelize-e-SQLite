const database = require('../models')
class PessoaController{
  static async getAll(req, res){
    try{
      const peopleList = await database.Pessoa.findAll();
      return res.status(200).json(peopleList);
    }catch(err){
      //erro
    }
  }
}

module.exports = PessoaController;