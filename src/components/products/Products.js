import React from 'react';
import "./products.css"

const Products = (props) => {

    console.log(props.products);

    const trimLength = (string) => {
        return string.substring(0, 60)
    }

  return (
    <div>
        <h1>Products Section</h1>

        <div className='products-list'>

            {
                props.products.map((item, idx) => {
                    return (
                    <div className='product-card' key = {idx}>
                        <img  src = {item.image}/>

                        <div className='text-content'>
                        <h1>{item.title}</h1>
                        <p>{trimLength(item.description)}</p>
                        <h4>Price : {item.price}</h4>
                        <h5>Category : {item.category}</h5>

                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Products