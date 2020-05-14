const profileModel = require('../../models/user/profileModel')

module.exports = {
  getProfile: async (req, res) => {
    const { id } = req.params
    const getProfile = profileModel.getProfile({ id: parseInt(id) })

    getProfile.then((result) => {
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
      res.status(201).send({
        status: true,
        message: 'Data berhasil ditambah',
        data: data
      })
    }).catch(_ => {
      res.status(400).send({
        status: false,
        message: 'Data gagal ditambah'
      })
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
      res.status(201).send({
        status: true,
        message: 'Data berhasil diubah',
        data: data
      })
    }).catch(_ => {
      res.status(400).send({
        status: false,
        message: 'Data gagal diubah'
      })
    })
  },
  deleteProfile: (req, res) => {
    const { id } = req.params
    const deleteProfile = profileModel.deleteProfile({ id: id })

    deleteProfile.then(_ => {
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
