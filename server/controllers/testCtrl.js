const testModel = require('../models/test')

const post = async (req, res) => {
    const {firstName,lastName}  = req.body
    await testModel.create({firstName:firstName,lastName:lastName}, (err, res) => {
        if (err) throw err
        res.json({ message: "hdbcjhd" })
    })
    res.json({ message: "error" })
}


module.exports = { post }