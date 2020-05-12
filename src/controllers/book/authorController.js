const authorModel = require('../../models/book/authorModel')

module.exports = {
  getAuthor: (req, res) => {
    const { id } = req.params
    const getAuthor = authorModel.getAuthor({ id: parseInt(id) })

    getAuthor.then((result) => {
      res.status(200).send({ status: true, data: result })
    }).catch(_ => {
      res.status(400).send({ status: false, message: 'Data gagal diakses' })
    })
  },
  createAuthor: (req, res) => {
    const { name } = req.body
    const createAuthor = authorModel.createAuthor({ name: name })

    createAuthor.then(_ => {
      res.status(201).send({ status: true, message: 'Data berhasil ditambah' })
    }).catch(_ => {
      res.status(400).send({ status: false, message: 'Data gagal ditambah' })
    })
  },
  updateAuthor: async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const checkAuthorId = await authorModel.findAuthorId({ id: parseInt(id) })

    if (checkAuthorId) {
      const data = [{ name: name, update_at: new Date() }, { id: parseInt(id) }]
      const updateAuthor = authorModel.updateAuthor(data)

      updateAuthor.then(_ => {
        res.status(200).send({ status: true, message: 'Data berhasil diubah' })
      }).catch(_ => {
        res.status(400).send({ status: false, message: 'Data gagal diubah' })
      })
    } else {
      res.status(400).send({ status: false, message: 'Id author tidak terdaftar' })
    }
  },
  deleteAuthor: (req, res) => {
    const { id } = req.params
    const deleteAuthor = authorModel.deleteAuthor({ id: id })

    deleteAuthor.then(_ => {
      res.status(200).send({ status: true, message: 'Data berhasil dihapus' })
    }).catch(_ => {
      res.status(400).send({ status: false, message: 'Data gagal dihapus' })
    })
  }
}
