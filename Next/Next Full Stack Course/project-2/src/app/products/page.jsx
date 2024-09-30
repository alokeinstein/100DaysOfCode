import React from 'react'

const Product = ({searchParams}) => {
  console.log(searchParams)
  console.log(searchParams.search)
  return (
    <div>
      <h1>this is the product page</h1>
    </div>
  )
}
export default Product
