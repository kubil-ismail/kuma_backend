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
    const { name, bio, birthdate, gender, sosmedId, userId } = req.body
    const data = {
      fullname: name,
      bio: bio,
      birthdate: birthdate,
      gender: gender,
      social_media_id: sosmedId,
      user_id: userId
    }
    const createProfile = profileModel.createProfile(data)

    createProfile.then(_ => {
      res.status(201).send(resData(
        true, 'Create profile success', data
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Create profile failed'
      ))
    })
  },
  updateProfile: (req, res) => {
    const { id } = req.params
    const { name, bio, birthdate, gender, sosmedId, userId } = req.body
    const data = [
      {
        fullname: name,
        bio: bio,
        birthdate: birthdate,
        gender: gender,
        social_media_id: sosmedId,
        user_id: userId
      },
      { id: parseInt(id) }
    ]
    const updateProfile = profileModel.updateProfile(data)

    updateProfile.then(_ => {
      res.status(200).send(resData(
        true, 'Update profile success', data
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Update profile failed'
      ))
    })
  },
  deleteProfile: (req, res) => {
    const { id } = req.params
    const deleteProfile = profileModel.deleteProfile({ id: id })

    deleteProfile.then(_ => {
      res.status(200).send(resData(
        true, 'Data berhasil dihapus', { userId: id }
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Data gagal dihapus'
      ))
    })
  }
}
