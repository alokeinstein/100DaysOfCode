import {useState, useEffect} from 'react'
import './App.css'

const Card = () => {
  const [data, setData] = useState([]);


  //fetching data from the component when the component renders


  /* PROBLEM i faced: I was calling fetch() directly inside the component, which means it will be executed on every render, causing an infinite loop of re-fetching data.
Solution: Use the useEffect hook to fetch data only when the component is mounted.

NOTE: When I used fetch() in this way, React will repeatedly execute the network request on each render, leading to an infinite loop. This happens because the component renders, calls fetch(), updates the state with the fetched data, and then triggers another render due to the state change. This cycle repeats endlessly.*/
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    //The fetch() promise resolves to a Response object. This block checks if the response is OK (status code 200-299). If not, it throws an error.
    if(!response.ok){
      throw new Error('Network response was not good')
    }
    return response.json()// This method parses the JSON data from the response body and returns another promise.
  })
  .then(datas=>{
    //This block is executed when the response is OK and the JSON data is parsed.
    //This block handles the JSON data returned by response.json(). The data variable contains the parsed JSON.
    setData(datas)//store the data in the state
  })
  .catch(error => {
    console.error('Error Fetching data: ', error)
  })
  })

  return (
    <div className="container">
      {data.map((item)=>{
        return(
       <div className="card" style={{width: "18rem"}} key={item.id}>
        <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" className="card-img-top" />
        <div className="card-body card" >
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text desc">
           {item.body}
          </p>
          <a href="#" className="btn btn-primary link">
            Go somewhere
          </a>
        </div>
      </div>
     
)})}
    </div>
  )
}

export default Card
