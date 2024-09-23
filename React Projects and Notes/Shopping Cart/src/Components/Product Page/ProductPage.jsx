/* import { useContext,useState } from 'react';
import { counterContext } from '../../Context/constants';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './ProductPage.css';


const ProductPage = () => {
  const { selectedProduct } = useContext(counterContext); // Access selected product
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    //agar mai last image pe hu to first pe aa jaunga and agar last pe nahi hu to ek aage badhta jaunga
    setCurrentIndex(currentIndex === selectedProduct.length - 1 ? 0 : currentIndex + 1);
  };
  
  const handlePrev = () => {
    //selectedProduct.length-1 muje last image pe le jayga agar mai first image pe hu
    setCurrentIndex(currentIndex === 0 ? selectedProduct.length - 1 : currentIndex - 1);
  };
  
  const handleIndicator = (index) => {
    console.log("index: "+index);
    console.log("current: "+currentIndex)
  };
  


  return (
    <div className='productPage'>
      {selectedProduct ? (
        <div className="productPage-main">
        {selectedProduct.images.length > 0 && (
          <div className="slider">
            <button className="productPage-btn left" onClick={handlePrev}>
              <FaArrowLeft />
            </button>
            <div className="body">
              <img src={selectedProduct.images[currentIndex]} className="button" />
              <div className="indicator">
                {selectedProduct.images.map((item,index) => {
                  return (
                    <div key={index} onClick={()=>{handleIndicator(index),setCurrentIndex(index)}}  className={index === currentIndex ? "active" : ""}> </div>
                  );
                })}
              </div>
            </div>
            <button className="productPage-btn right" onClick={handleNext}>
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
      ) : (
        <p>No product selected.</p>
      )}
    </div>
  );
}

export default ProductPage;
 */
import { useContext, useState } from 'react';
import { counterContext } from '../../Context/constants';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './ProductPage.css';

const ProductPage = () => {
  const { selectedProduct } = useContext(counterContext); // Access selected product
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
    );
  };

  const handleIndicator = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='productPage'>
      {selectedProduct ? (
        <div className="productPage-main">
          {selectedProduct.images.length > 0 && (
            <div className="slider">
              <button className="productPage-btn left" onClick={handlePrev}>
                <FaArrowLeft />
              </button>
              <div className="body">
                <img src={selectedProduct.images[currentIndex]} className="product-image" alt="Product" />
                <div className="indicator">
                  {selectedProduct.images.map((_, index) => (
                     <div key={index} onClick={() => handleIndicator(index)} className={index === currentIndex ? "active" : ""}></div>
                  ))}
                </div>
              </div>
              <button className="productPage-btn right" onClick={handleNext}>
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>No product selected.</p>
      )}
    </div>
  );
}

export default ProductPage;
