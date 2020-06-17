const reviewModel = require('../../models/book/reviewModel')
const response = require('../../helper/response')
const pagination = require('../../utils/pagination')
const Filter = require('bad-words')
const filter = new Filter()

module.exports = {
  getReview: async (req, res) => {
    const { id } = req.params
    const query = req.query
    const totalData = id ? 0 : await reviewModel.countReview(query)
    const paginate = id ? { start: null, end: null } : pagination.set(req.query, totalData)
    const getReview = reviewModel.getReview({ id: parseInt(id), query }, paginate.start, paginate.end)

    getReview.then((result) => {
      if (result.length < 1) {
        res.status(200).send(response(
          false, 'Review not found'
        ))
      } else {
        res.status(200).send(response(
          true, 'Get review success', result, paginate
        ))
      }
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Get review failed'
      ))
    })
  },
  createReview: (req, res) => {
    // Contoh kata kasar aja ini ya :)
    filter.addWords('eek')

    const creteData = {
      book_id: req.body.book_id,
      user_id: req.body.user_id,
      review: filter.clean(req.body.review),
      rating: req.body.rating
    }
    const createReview = reviewModel.createReview(creteData)

    createReview.then(_ => {
      res.status(201).send(response(
        true, 'Create review success', creteData
      ))
    }).catch(_ => {
      res.status(400).send(response(
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
        res.status(200).send(response(
          true, 'Update review success', data
        ))
      }).catch(_ => {
        res.status(400).send(response(
          false, 'Update review failed'
        ))
      })
    } else {
      res.status(400).send(response(
        false, 'Review not found'
      ))
    }
  },
  deleteReview: (req, res) => {
    const { id } = req.params
    const deleteReview = reviewModel.deleteReview({ id: id })

    deleteReview.then(_ => {
      res.status(200).send(response(
        true, 'Delete review success', { idReview: id }
      ))
    }).catch(_ => {
      res.status(400).send(response(
        false, 'Delete review success'
      ))
    })
  }
}
