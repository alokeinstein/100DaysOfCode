import React from 'react'

const ProductReview = ({params}) => {
  //params will get the dyanamic value which is coming from the url
  //http://localhost:3000/products/1/2/3/4/5
  console.log(params)//params:1/2/3/4/5
  //Output: { 'product-review': [ '1', '2', '3', '4', '5' ] }
  return (
    <div>
      <h1>this is the product review page and use to catch the multiple params </h1>
    </div>
  )
}

export default ProductReview
