const favoriteModel = require('../../models/book/favoriteModel')
const resData = require('../../helper/response')

module.exports = {
  getFavorite: (req, res) => {
    const { id } = req.params
    const getFavorite = favoriteModel.getFavorite({ id: parseInt(id) })

    getFavorite.then((result) => {
      if (result.length < 1) {
        res.status(400).send(resData(
          false, 'Favorite not found'
        ))
      } else {
        res.status(200).send(resData(
          true, 'Get favorite success', result
        ))
      }
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Get favorite failed'
      ))
    })
  },
  createFavorite: (req, res) => {
    const createData = req.body
    const createFavorite = favoriteModel.createFavorite(createData)

    createFavorite.then(_ => {
      res.status(201).send(resData(
        true, 'Create favorite success', createData
      ))
    }).catch(_ => {
      res.status(400).send(resData(
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
        res.status(200).send(resData(
          true, 'Update favorite success', data
        ))
      }).catch(_ => {
        res.status(400).send(resData(
          false, 'Update favorite failed'
        ))
      })
    } else {
      res.status(400).send(resData(
        false, 'Favorite not found'
      ))
    }
  },
  deleteFavorite: (req, res) => {
    const { id } = req.params
    const deleteFavorite = favoriteModel.deleteFavorite({ id: id })

    deleteFavorite.then(_ => {
      res.status(200).send(resData(
        true, 'Delete favorite success', { idFavorite: id }
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Delete favorite success'
      ))
    })
  }
}
