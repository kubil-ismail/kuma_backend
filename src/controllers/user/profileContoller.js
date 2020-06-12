const profileModel = require('../../models/user/profileModel')
const response = require('../../helper/response')
const pagination = require('../../utils/pagination')

module.exports = {
  getProfile: async (req, res) => {
    const { id } = req.params
    const { search } = req.query
    const totalData = id ? 0 : await profileModel.countProfile({ name: search })
    const paginate = id ? { start: null, end: null } : pagination.set(req.query, totalData)
    const getProfile = profileModel.getProfile({ id: parseInt(id), name: search }, paginate.start, paginate.end)

    getProfile.then((result) => {
      if (result.length < 1) {
        res.status(400).send(response(
          false, 'Profile not found'
        ))
      } else {
        res.status(200).send(response(
          true, 'Get profile success', result, paginate
        ))
      }
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Get profile failed'
      ))
    })
  },
  getProfileNew: (req, res) => {
    const { id } = req.params
    const getProfileNew = profileModel.getProfileNew({ id: parseInt(id) })

    getProfileNew.then((result) => {
      if (result.length < 1) {
        res.status(400).send(response(
          false, 'Profile not found'
        ))
      } else {
        res.status(200).send(response(
          true, 'Get profile success', result
        ))
      }
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Get profile failed'
      ))
    })
  },
  // Get favorite book user
  getProfileFavorite: (req, res) => {
    const { id } = req.params
    const getProfileFavorite = profileModel.getProfileFavorite({ id: parseInt(id) })

    getProfileFavorite.then((result) => {
      if (result.length < 1) {
        res.status(400).send(response(
          false, 'Favorite book not found'
        ))
      } else {
        res.status(200).send(response(
          true, 'Get Favorite book success', result
        ))
      }
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Get Favorite book failed'
      ))
    })
  },
  createProfile: (req, res) => {
    const createData = req.body
    const createProfile = profileModel.createProfile(createData)

    createProfile.then(_ => {
      res.status(201).send(response(
        true, 'Create profile success', createData
      ))
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Create profile failed'
      ))
    })
  },
  updateProfile: async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    const checkProfileId = await profileModel.findProfileId({ id: parseInt(id) })

    if (checkProfileId) {
      const data = [updateData, { id: parseInt(id) }]
      const updateProfile = profileModel.updateProfile(data)

      updateProfile.then(_ => {
        res.status(200).send(response(
          true, 'Update profile success', data
        ))
      }).catch(_ => {
        res.status(400).send(response(
          false, 'Update profile failed'
        ))
      })
    } else {
      res.status(400).send(response(
        false, 'Profile not found'
      ))
    }
  },
  deleteProfile: (req, res) => {
    const { id } = req.params
    const deleteProfile = profileModel.deleteProfile({ id: id })

    deleteProfile.then(_ => {
      res.status(200).send(response(
        true, 'Delete profile success', { userId: id }
      ))
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Data profile success'
      ))
    })
  }
}
