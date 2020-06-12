const sosmedModel = require('../../models/user/sosmedModel')
const response = require('../../helper/response')

module.exports = {
  getSosmed: (req, res) => {
    const { id } = req.params
    const getSosmed = sosmedModel.getSosmed({ id: parseInt(id) })

    getSosmed.then((result) => {
      if (result.length < 1) {
        res.status(400).send(response(
          false, 'Sosmed not found'
        ))
      } else {
        res.status(200).send(response(
          true, 'Get sosmed success', result
        ))
      }
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Get sosmed failed'
      ))
    })
  },
  createSosmed: (req, res) => {
    const createData = req.body
    const createSosmed = sosmedModel.createSosmed(createData)

    createSosmed.then(_ => {
      res.status(201).send(response(
        true, 'Create sosmed success', createData
      ))
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Create sosmed failed'
      ))
    })
  },
  updateSosmed: async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    const checkSosmedId = await sosmedModel.findSosmedId({ id: parseInt(id) })

    if (checkSosmedId) {
      const data = [updateData, { id: parseInt(id) }]
      const updateSosmed = sosmedModel.updateSosmed(data)

      updateSosmed.then(_ => {
        res.status(200).send(response(
          true, 'Update sosmed success', data
        ))
      }).catch(_ => {
        console.log(_)
        res.status(400).send(response(
          false, 'Update sosmed failed'
        ))
      })
    } else {
      res.status(400).send(response(
        false, 'Sosmed not found'
      ))
    }
  },
  deleteSosmed: (req, res) => {
    const { id } = req.params
    const deleteSosmed = sosmedModel.deleteSosmed({ id: id })

    deleteSosmed.then(_ => {
      res.status(200).send(response(
        true, 'Delete sosmed success', { userId: id }
      ))
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Data sosmed success'
      ))
    })
  }
}
