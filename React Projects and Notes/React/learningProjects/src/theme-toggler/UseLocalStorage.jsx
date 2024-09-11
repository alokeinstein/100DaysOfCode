import {useState,useEffect} from 'react'

const useLocalStorage = (key,defaultValue) => {
  const [value, setValue] = useState(()=>{
    let storedValue
    try {
      //when i am storing the value from local storage i am stringify the data but to able to see the data in teh readable format i havae to parse it 
      storedValue = JSON.parse(localStorage.getItem(key) || defaultValue)
    } catch (error) {
      console.error(error)
      storedValue = defaultValue
    }
    return storedValue
  })

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
  },[key, value])

  return [value,setValue]
}

export default useLocalStorage
