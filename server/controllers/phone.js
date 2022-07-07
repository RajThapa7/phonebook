const Phone = require('../model/phone')

const getAllNumbers = async (req, res) => {
    // const numbers = await Phone.find({ createdBy: req.user.uid }).sort('createdAt')
    res.status(200).send(req.user)
  } 

  const addNumbers = async (req, res)=>{
    req.body.createdBy = req.user.uid
    const numbers = await Phone.create(req.body)
    res.status(200).json({ numbers })
  }

  module.exports = {getAllNumbers, addNumbers}