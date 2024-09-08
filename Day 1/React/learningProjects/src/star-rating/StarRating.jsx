import { FaStar } from "react-icons/fa";
import { useState } from "react";
import './StarRating.css'

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick =(currentIndex) => {
    setRating(currentIndex)
  }
  const handleMouseEnter =(currentIndex) => {
    setHover(currentIndex)
  }

  const handleMouseLeave=() => {
    setHover(rating)
  }
  
  

  return (
    <div>
      {/* [...Array(5)] : creates an array of 5 element which are undefined. `...` this spread operator fills the 5 empty slots with
          [undefined,undefined,undefined,undefined, undefiined]

          `star` : this parameter represents the current element in each iteration 
          `index` : this parameter represents the current index in each iteration

          each star is acting as button because map function is iterating the FaStar component on each iterations with specific properties
          */}
      {/* {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <FaStar
            key={index}
            size={66}
            color={currentRating <= rating ? "#ffc107" : "#e4e5e9"}
            onClick={() => setRating(currentRating)}
            style={{ cursor: "pointer" }}
          />
        );
      })} */}

      {
        [...Array(5)].map((_,index)=>{
          index += 1
          return (
            <FaStar
            key={index}
            size={50}
            /* color={index <= (rating||hover ) ? "#ffc107" : "#e4e5e9"} */
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={()=>handleClick(index)}
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave = {()=>handleMouseLeave()}
            />
          )
        })
      }
    </div>
  );
};

export default StarRating;
