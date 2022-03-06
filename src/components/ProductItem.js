import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'


const ProductItem = ({product,onAddToCartClicked})=>(
  <div className="clearfix p-1 rounded mx-auto" style={{ marginBottom: 5, width: '30em', border:'5px solid #eee'}} >
  <Product
    title={product.title}
    price={product.price}
    quantity={product.inventory} />
  <hr />
  <button className="btn btn-warning float-right"
  onClick={onAddToCartClicked}
    disabled={product.inventory > 0 ? '' : 'disabled'}>
    {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
  </button>
</div>   
)


ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked:PropTypes.func.isRequired
}

export default ProductItem