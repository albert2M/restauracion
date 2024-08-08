const sequelizeDb = require('../../models')
const Restauracion = sequelizeDb.Restauracion

exports.create = (req, res) => {
  Restauracion.bulkCreate(req.body).then(async data => {
    res.status(200).send(data)
  }).catch(err => {
    if (err.errors) {
      res.status(422).send({
        message: err.errors
      })
    } else {
      res.status(500).send({
        message: 'Algún error ha surgido al insertar el dato.'
      })
    }
  })
}
