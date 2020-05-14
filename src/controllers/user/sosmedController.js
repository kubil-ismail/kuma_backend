const sosmedModel = require('../../models/user/sosmedModel')
const resData = require('../../helper/response')

module.exports = {
  getSosmed: (req, res) => {
    const { id } = req.params
    const getSosmed = sosmedModel.getSosmed({ id: parseInt(id) })

    getSosmed.then((result) => {
      res.status(200).send(resData(
        true, 'Get sosmed success', result
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Get sosmed failed'
      ))
    })
  },
  createSosmed: (req, res) => {
    const { facebook, instagram, twitter } = req.body
    const data = {
      facebook: facebook,
      instagram: instagram,
      twitter: twitter
    }
    const createSosmed = sosmedModel.createSosmed(data)

    createSosmed.then(_ => {
      res.status(201).send(resData(
        true, 'Create sosmed success', data
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Create sosmed failed'
      ))
    })
  },
  updateSosmed: async (req, res) => {
    const { id } = req.params
    const { facebook, instagram, twitter } = req.body
    const checkSosmedId = await sosmedModel.findSosmedId({ id: parseInt(id) })

    if (checkSosmedId) {
      const data = [
        {
          facebook: facebook,
          instagram: instagram,
          twitter: twitter
        },
        { id: parseInt(id) }
      ]
      const updateSosmed = sosmedModel.updateSosmed(data)

      updateSosmed.then(_ => {
        res.status(200).send(resData(
          true, 'Update sosmed success', data
        ))
      }).catch(_ => {
        res.status(400).send(resData(
          false, 'Update sosmed failed'
        ))
      })
    } else {
      res.status(400).send(resData(
        false, 'Sosmed not found'
      ))
    }
  },
  deleteSosmed: (req, res) => {
    const { id } = req.params
    const deleteSosmed = sosmedModel.deleteSosmed({ id: id })

    deleteSosmed.then(_ => {
      res.status(200).send(resData(
        true, 'Delete sosmed success', { userId: id }
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Data sosmed success'
      ))
    })
  }
}
