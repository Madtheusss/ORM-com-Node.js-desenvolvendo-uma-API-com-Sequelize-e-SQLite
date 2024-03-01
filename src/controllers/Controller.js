class Controller {
  constructor(serviceEnt) {
    this.serviceEnt = serviceEnt;
  }
  async getAll(req, res){
    try {
      const RegistryList = await this.serviceEnt.getAllRegister();
      return res.status(200).json(RegistryList)
    }catch(err){
    // Error
    }
  }
}

module.exports = Controller