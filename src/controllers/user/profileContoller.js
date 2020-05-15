const profileModel = require('../../models/user/profileModel')
const resData = require('../../helper/response')

module.exports = {
  getProfile: async (req, res) => {
    const { id } = req.params
    const getProfile = profileModel.getProfile({ id: parseInt(id) })

    getProfile.then((result) => {
      res.status(200).send(resData(
        true, 'Get profile success', result
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Get profile failed'
      ))
    })
  },
  createProfile: (req, res) => {
    const createData = req.body
    const createProfile = profileModel.createProfile(createData)

    createProfile.then(_ => {
      res.status(201).send(resData(
        true, 'Create profile success', createData
      ))
    }).catch(_ => {
      res.status(400).send(resData(
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
        res.status(200).send(resData(
          true, 'Update profile success', data
        ))
      }).catch(_ => {
        console.log(_)
        res.status(400).send(resData(
          false, 'Update profile failed'
        ))
      })
    } else {
      res.status(400).send(resData(
        false, 'Profile not found'
      ))
    }
  },
  deleteProfile: (req, res) => {
    const { id } = req.params
    const deleteProfile = profileModel.deleteProfile({ id: id })

    deleteProfile.then(_ => {
      res.status(200).send(resData(
        true, 'Delete profile success', { userId: id }
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Data profile success'
      ))
    })
  }
}
