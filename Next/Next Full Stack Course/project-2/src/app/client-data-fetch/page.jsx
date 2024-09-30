'use client'
import { useState, useEffect } from 'react'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function ClientSideDataFetching() {
    // const [loading, setLoading] = useState(false)
    // const [users, setUsers] = useState([])

    /* const fetchListOfUsers = async () => {
        try {
            setLoading(true)
            const apiResponse = await fetch('https://dummyjson.com/users')
            const result = await apiResponse.json()

            if(result?.users){
                setUsers(result.users)
                setLoading(false)
            }
            console.log(users)

        } catch (error) {
            throw new Error(error)
            setUsers([])
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchListOfUsers()
        }, []) 

        if(loading) return <h1 className="text-5xl font-bold">Loading Users Please Wait</h1>
        */


    //Fetching data using SWR package make the code clean and easy
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>


    
    return (
        <div>
            <h1>Client Side Data Fetching</h1>
            <div>
              {/* {users.map(user => <p key={user.id}>{user.firstName}</p>)} */}
              {data.users.map(user => <p key={user.id}>{user.firstName}</p>)}
            </div>
        </div>
    )
}