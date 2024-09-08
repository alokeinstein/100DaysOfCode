import { useEffect, useState } from "react";
import "./Slider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const randomImgApi = "https://picsum.photos/v2/list?page=1&limit=5";

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const fetchedData = await fetch(randomImgApi);
        const jsonData = await fetchedData.json();
        setData(jsonData);
      } catch (error) {
        console.error("Cant fetch the random images: ", error);
      }
    };
    fetchImg();
  }, []); // Don't forget the empty dependency array to avoid infinite loop

  const handleNext = () => {
    //agar mai last image pe hu to first pe aa jaunga and agar last pe nahi hu to ek aage badhta jaunga
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  };
  
  const handlePrev = () => {
    //data.length-1 muje last image pe le jayga agar mai first image pe hu
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };

  const handleIndicator = (index) => {
    console.log(index);
    setCurrentIndex(index);
  };

  return (
    <div className="main">
      {data.length > 0 && (
        <div className="slider">
          <button className="btn left" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <div className="body">
            <img src={data[currentIndex].download_url} className="button" />
            <div className="indicator">
              {data.map((item,index) => {
                return (
                  <div key={item.id} onClick={()=>handleIndicator(index)}  className={index === currentIndex ? "active" : ""}> </div>
                );
              })}
            </div>
          </div>
          <button className="btn right" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;