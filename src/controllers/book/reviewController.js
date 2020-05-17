const reviewModel = require('../../models/book/reviewModel')
const resData = require('../../helper/response')
const pagination = require('../../utils/pagination')

module.exports = {
  getReview: async (req, res) => {
    const { id } = req.params
    const query = req.query
    const totalData = id ? 0 : await reviewModel.countReview(query)
    const paginate = id ? { start: null, end: null } : pagination.set(req.query, totalData)
    const getReview = reviewModel.getReview({ id: parseInt(id), query }, paginate.start, paginate.end)

    getReview.then((result) => {
      if (result.length < 1) {
        res.status(400).send(resData(
          false, 'Review not found'
        ))
      } else {
        res.status(200).send(resData(
          true, 'Get review success', result, paginate
        ))
      }
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Get review failed'
      ))
    })
  },
  createReview: (req, res) => {
    const creteData = req.body
    const createReview = reviewModel.createReview(creteData)

    createReview.then(_ => {
      res.status(201).send(resData(
        true, 'Create review success', creteData
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Create review failed'
      ))
    })
  },
  updateReview: async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    const checkReviewId = await reviewModel.findReviewId({ id: parseInt(id) })

    if (checkReviewId) {
      // Update data & ID data
      const data = [updateData, { id: parseInt(id) }]
      const updateReview = reviewModel.updateReview(data)

      updateReview.then(_ => {
        res.status(200).send(resData(
          true, 'Update review success', data
        ))
      }).catch(_ => {
        res.status(400).send(resData(
          false, 'Update review failed'
        ))
      })
    } else {
      res.status(400).send(resData(
        false, 'Review not found'
      ))
    }
  },
  deleteReview: (req, res) => {
    const { id } = req.params
    const deleteReview = reviewModel.deleteReview({ id: id })

    deleteReview.then(_ => {
      res.status(200).send(resData(
        true, 'Delete review success', { idReview: id }
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Delete review success'
      ))
    })
  }
}
