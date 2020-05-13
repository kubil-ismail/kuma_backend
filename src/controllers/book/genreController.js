const genreModel = require('../../models/book/genreModel')

module.exports = {
  getGenre: (req, res) => {
    const { id } = req.params
    const getGenre = genreModel.getGenre({ id: parseInt(id) })

    getGenre.then((result) => {
      res.status(200).send({
        status: true,
        data: result
      })
    }).catch(_ => {
      res.status(400).send({
        status: false,
        message: 'Data gagal diakses'
      })
    })
  },
  createGenre: (req, res) => {
    const { name } = req.body
    const createGenre = genreModel.createGenre({ name: name })

    createGenre.then(_ => {
      res.status(201).send({
        status: true,
        message: 'Data berhasil ditambah'
      })
    }).catch(_ => {
      res.status(400).send({
        status: false,
        message: 'Data gagal ditambah'
      })
    })
  },
  updateGenre: async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const checkGenreId = await genreModel.findGenreId({ id: parseInt(id) })

    if (checkGenreId) {
      const data = [
        { name: name, update_at: new Date() },
        { id: parseInt(id) }
      ]
      const updateGenre = genreModel.updateGenre(data)

      updateGenre.then(_ => {
        res.status(200).send({
          status: true,
          message: 'Data berhasil diubah'
        })
      }).catch(_ => {
        res.status(400).send({
          status: false,
          message: 'Data gagal diubah'
        })
      })
    } else {
      res.status(400).send({
        status: false,
        message: 'Id Genre tidak terdaftar'
      })
    }
  },
  deleteGenre: (req, res) => {
    const { id } = req.params
    const deleteGenre = genreModel.deleteGenre({ id: id })

    deleteGenre.then(_ => {
      res.status(200).send({
        status: true,
        message: 'Data berhasil dihapus'
      })
    }).catch(_ => {
      res.status(400).send({
        status: false,
        message: 'Data gagal dihapus'
      })
    })
  }
}
