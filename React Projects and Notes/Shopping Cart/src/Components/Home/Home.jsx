import { useEffect, useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import { counterContext } from "../../Context/constants"; // Import the context
import './Home.css'


const Home = () => {
  const { setSelectedProduct } = useContext(counterContext); // Get the function to update selected product

  // State variables
  const [loading, setLoading] = useState(false); // Tracks if data is currently being fetched
  const [product, setProduct] = useState([]); // Stores the fetched products
  const [count, setCount] = useState(0); // Keeps track of the page or batch number for pagination
  const [disableButton, setDisableButton] = useState(false); // Controls the 'Load More' button's disabled state
  const [totalProduct, setTotalProduct] = useState(0); // Stores the total number of products fetched from the API
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current index of loaded products
  
  // useEffect to fetch products whenever 'count' changes (pagination logic)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 

        // Fetch products from API with pagination (skips based on count)
        const fetchedData = await fetch(`https://dummyjson.com/products?sortBy=title&order=asc&limit=20&skip=${count === 0 ? 0 : count * 20}`);
        const jsonData = await fetchedData.json(); 

        // Append the fetched products to the existing list of products
        setProduct((prevProduct) => [...prevProduct, ...jsonData.products]);
        setTotalProduct(jsonData.total); // Store the total number of products fetched from the API
        setLoading(false); 
      } catch (error) {
        console.error(`Error in fetching data: ${error}`); // Handle errors
        setLoading(false); 
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, [count]);

  useEffect(() => {
    setCurrentIndex(product.length); // Set the current index based on the number of products loaded
  }, [product]); //


  useEffect(() => {
    // If the current index is greater than or equal to the total number of products, disable the button
    currentIndex >= totalProduct ? setDisableButton(true) : setDisableButton(false);
  }, [currentIndex, totalProduct]); 


  
  return (
    <div className="home-main">
      <div className="inside-home-main">
        {loading ? (
          <p>Loading data! Please wait.</p>
        ) : (
          product.map((item) => (
            <NavLink to='/productPage' key={item.id} onClick={() => setSelectedProduct(item)}>
            <div className="home-card" >
              <img src={item.thumbnail} alt={item.brand}/>
              <p className="productName">
                {!item.brand ? item.tags[0] : item.brand}
              </p>
            </div>
            </NavLink>
            
          ))
        )}
      </div>

      {/* Load More button section */}
      <div className="home-btn">
        {/* Button to load more products */}
        <button
          className="loadMoreData"
          onClick={() => setCount(count + 1)} // Increase 'count' to load the next batch of products
          disabled={disableButton} // Disable the button if all products are loaded
        >
          Load More Product
        </button>
      </div>
    </div>
  );
}

export default Home;
