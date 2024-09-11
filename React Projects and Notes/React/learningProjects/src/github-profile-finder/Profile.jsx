import {useState,useEffect} from 'react'
import './styles.css'

const Profile = () => {
    const [userName, setUserName] = useState('alokeinstein')
    const [submitUserName, setSubmitUserName] = useState('')
    const [data, setData] = useState([])

    const handleChange =(e) => {
      let name = e.target.value
      setUserName(name)
    }

    const handleClick =() => {
      setSubmitUserName(userName)
      setUserName('')
    }
    

    const fetchData =  async () =>{
        try {
        const fetchedData =  await fetch(`https://api.github.com/users/${submitUserName}`)
        const jsonData = await fetchedData.json()
        setData(jsonData)
        console.log(jsonData)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(()=>{
        fetchData()
    },[submitUserName])
    
    
  return (
    <div className='main'>
      <div>
        <input type="text" value={userName} name={userName} placeholder='Enter the user id..' onChange={(e)=>handleChange(e)} />
        <button onClick={()=>handleClick()}>Submit</button>
        <img src={data.avatar_url}/>
        <h1>{data.login}</h1>
       <p>Github URL:<a href={data.html_url}>{data.html_url}</a></p> 
      </div>
    </div>
  )
}

export default Profile
