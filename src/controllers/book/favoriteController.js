const favoriteModel = require('../../models/book/favoriteModel')
const response = require('../../helper/response')

module.exports = {
  getFavorite: (req, res) => {
    const { id } = req.params
    const getFavorite = favoriteModel.getFavorite({ id: parseInt(id) })

    getFavorite.then((result) => {
      if (result.length < 1) {
        res.status(400).send(response(
          false, 'Favorite not found'
        ))
      } else {
        res.status(200).send(response(
          true, 'Get favorite success', result
        ))
      }
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Get favorite failed'
      ))
    })
  },
  createFavorite: (req, res) => {
    const createData = req.body
    const createFavorite = favoriteModel.createFavorite(createData)

    createFavorite.then(_ => {
      res.status(201).send(response(
        true, 'Create favorite success', createData
      ))
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Create favorite failed'
      ))
    })
  },
  updateFavorite: async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    const checkFavoriteId = await favoriteModel.findFavoriteId({ id: parseInt(id) })

    if (checkFavoriteId) {
      const data = [updateData, { id: parseInt(id) }]
      const updateFavorite = favoriteModel.updateFavorite(data)

      updateFavorite.then(_ => {
        res.status(200).send(response(
          true, 'Update favorite success', data
        ))
      }).catch(_ => {
        res.status(400).send(response(
          false, 'Update favorite failed'
        ))
      })
    } else {
      res.status(400).send(response(
        false, 'Favorite not found'
      ))
    }
  },
  deleteFavorite: (req, res) => {
    const { id } = req.params
    const deleteFavorite = favoriteModel.deleteFavorite({ id: id })

    deleteFavorite.then(_ => {
      res.status(200).send(response(
        true, 'Delete favorite success', { idFavorite: id }
      ))
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Delete favorite success'
      ))
    })
  }
}
