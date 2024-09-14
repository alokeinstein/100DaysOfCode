import './ProductPage.css';
import { useContext } from 'react';
import { counterContext } from '../../Context/constants';

const ProductPage = () => {
  const { selectedProduct } = useContext(counterContext); // Access selected product
  console.log(selectedProduct)

  return (
    <div className='main'>
      {selectedProduct ? (
        <div>
          <h1>{selectedProduct.title}</h1>
          <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
          <p>{selectedProduct.description}</p>
        </div>
      ) : (
        <p>No product selected.</p>
      )}
    </div>
  );
}

export default ProductPage;
