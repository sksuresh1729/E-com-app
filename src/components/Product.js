import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title }) => (
  <div className="clearfix mb-1">
      <span className="p-1  bg-success text-white rounded m1 float-left">{title}</span>
      <span className="w-50 float-right">
      <span className="float-right w-25 mr-3">{` - $${price}`}</span>
      <span className="float-right w-25 text-right">{quantity ? ` x ${quantity}` : ''}</span>
      </span>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
// - &#36;{price}