const reviewModel = require('../../models/book/reviewModel')
const resData = require('../../helper/response')

module.exports = {
  getReview: (req, res) => {
    const { id } = req.params
    const getReview = reviewModel.getReview({ id: parseInt(id) })

    getReview.then((result) => {
      res.status(200).send(resData(
        true, 'Get review success', result
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Get review failed'
      ))
    })
  },
  createReview: (req, res) => {
    const { bookId, userId, review, rating } = req.body
    const data = {
      book_id: bookId,
      user_id: userId,
      review: review,
      rating: rating
    }
    const createReview = reviewModel.createReview(data)

    createReview.then(_ => {
      res.status(201).send(resData(
        true, 'Create review success', data
      ))
    }).catch(_ => {
      res.status(400).send(resData(
        false, 'Create review failed'
      ))
    })
  },
  updateReview: async (req, res) => {
    const { id } = req.params
    const { bookId, userId, review, rating } = req.body
    const checkReviewId = await reviewModel.findReviewId({ id: parseInt(id) })

    if (checkReviewId) {
      const data = [
        {
          book_id: bookId,
          user_id: userId,
          review: review,
          rating: rating,
          update_at: new Date()
        },
        { id: parseInt(id) }
      ]
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
