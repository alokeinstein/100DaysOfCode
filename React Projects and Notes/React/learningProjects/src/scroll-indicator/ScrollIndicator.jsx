import { useEffect, useState } from "react";
import "./styles.css";

const ScrollIndicator = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(0);
  const [, setScrollHeight] = useState(0);

  const url = `https://dummyjson.com/products?sortBy=title&order=asc&limit=200`;

  const dataFetch = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      // product is the array and brand is the property
      setData(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetch(); 
  }, []);

  useEffect(() => {
    const updateScrollPercentage = () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setScrollHeight(scrollTop); //setting the state
      let scrollHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;
      setWidth(scrollPercentage);
      console.log(scrollPercentage)
    };

    // Update scroll height after the component has rendered
    updateScrollPercentage();

    // Call the function on scroll(window ek object hai jisme hamne scroll event pe ye function call kiya hai)
    window.addEventListener("scroll", updateScrollPercentage);

    return () => window.removeEventListener('resize', updateScrollPercentage);
  }, [data]);

  //SCROLL TO THE BOTTOM
  const scrollToBottom =() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,//this means whatever the height of the document in pixels , lets go down that many pixels
      behaviour: 'smooth',
    })
  }
  
 //SCROLL TO THE TOP
 const scrollToTop =() => {
  window.scrollTo({
    top: 0,//do down zero pixels from the top , if i say 'top:500' it means go down 500 pixels from the top
    behaviour: 'smooth',//for smooth ui experience
  })
}

  return (
    <div className="main">
      <div className="progress-bar" style={{ width: `${width}%` }}></div>
    <button className="down"  onClick={()=>scrollToBottom()}>Down</button>
      <div className="scroll-percentage">
      {Math.round(width)}% scrolled
    </div>
      {loading ? (
        <p>Data is loading...</p>
      ) : (
        data.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.brand}</p>
            </div>
          );
        })
      )}
      <button className="top" onClick={()=>scrollToTop()}>Top</button>
    </div>
  );
};

export default ScrollIndicator;
