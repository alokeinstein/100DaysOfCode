import { useEffect, useState } from "react";
import "./myIndex.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [totalProduct, setTotalProduct] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedData = await fetch(`https://dummyjson.com/products?sortBy=title&order=asc&limit=100&skip=${count === 0 ? 0 : count * 20}`);
        const jsonData = await fetchedData.json();
        
        setProduct((prevProduct)=>[...prevProduct,...jsonData.products])
        setTotalProduct(jsonData.total)//fetching the total numbner
        setLoading(false);
      } catch (error) {
        console.error(`Error in fetching data: ${error}`);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [count]);
  
  useEffect(() => {
    setCurrentIndex(product.length)
  }, [product])


useEffect(()=>{
//Disabling the button when the last element is shown    
currentIndex>=totalProduct?setDisableButton(true):setDisableButton(false)
// console.log('current Index: ',currentIndex)
},[currentIndex,totalProduct])


  return (
    <div>
      <div className="main" >
        {loading ? (
          <p>Loading data! Please wait.</p>
        ) : (
          product.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.thumbnail} alt={item.brand}/>
              <p className="productName">
                {!item.brand ? item.tags[0] : item.brand}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="btn">
        <button className="loadMoreData" onClick={() => setCount(count + 1)} disabled={disableButton}>Load More Product</button>
      </div>
    </div>
  );
};

export default LoadMoreData;


//THINGS I LEARNED WHILE MAKING THIS PROJECT
//1. What dependecies to pass in the useEffect 
//2. the state should not be changed while the rendering of jsx element because if we change a function while the component is loading then the page will render again and the state will update again causing to happen infinite loop, instead of updating the state directly we can change the state in a function which is called in the jsx and function will be written in the Javascript area.
//3. The state should be updated in the function which is called in the jsx, not directly

//most important thing i learned to fetch more data on a button click and when the data is fetched completely the button is disabled it is similar to the infinite scroll but not completely alike. 
//I also got struck when elements in the UI was appering twice so i removed the strictmode which made the problem go way 