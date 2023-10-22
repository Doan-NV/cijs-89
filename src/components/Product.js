import React from 'react'

const Product = (prop) => {
  const {product} = prop;
  // console.log('🚀 ~ file: Product.js:5 ~ product:', product);
  // const name = product.name;
  // const description = product.description;

  const {name, description} = product;
  return (
    <div>
      <h1>product name: {name}</h1>
      <p>description: {description}</p>
      <br></br>
    </div>
  )
}

export default Product