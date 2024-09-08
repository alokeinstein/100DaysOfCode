
import {useState,useEffect} from 'react'
import "./Card.css";
import newsPic  from './news-pic.jpg'

const Card = () => {
  const [data, setData] = useState([]);

  const newsAPI = "b7439e5d313a4cdc846da6372bca2bd4";
  const url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=${newsAPI}`;
  useEffect(() => {
  const  fetchNews = async () => {
        try {
          let fetchedData = await fetch(url);
          let jsonData = await fetchedData.json();
          setData(jsonData.articles);
          console.log(jsonData.totalResults)
        } catch (error) {
          console.error("Some error occured: ", error);
        }
      };
    fetchNews();//it is called inside the useEffect because useEffect runs after the component has been rendered. so if we use the function in the component then the code will throw an error and it will show that the funtion has not been defined because the component runs before the useEffect
  },[url])
  
 
  return (
    <>
    <div className="main">
      {data.map((item,index) => {
        return (
          <div className="card" key={index}>
            <img src={item.urlToImage===null?newsPic:item.urlToImage}/>

            <div className="header">
            <a href={item.url}><h3 className='title'>{item.title}</h3></a>
            </div>
            <div className="body">
             {item.publishedAt}
            </div>
            <div className="footer">
              <h4>{item.source.id}</h4>
            
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Card;
