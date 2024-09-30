//on server side pages you will not see the console.log in the browser console but in the terminal of the code editor 
const UsersDetails = async ({params}) => {
  const fetchUserDetails = async (id) => {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/users/${id}`)
      const result = await apiResponse.json()
      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  //The key details corresponds to the name of your dynamic folder [details], and the value '1' is the part of the URL that matches this segment.
  console.log(params)//{ details: '1' }
  const userDetails = await fetchUserDetails(params.details);
  console.log('params.details: ',params.details)//1
  return (
    <div>
      <h1>This is the user detail page</h1>
      {/* it checks if the userDetails is not null before accesing the value */}
      <p><strong>Name:</strong> {userDetails?.firstName} {userDetails?.lastName}</p>
      <p><strong>Email:</strong> {userDetails?.email}</p>
      <p><strong>Phone:</strong> {userDetails?.phone}</p>
      {/* first it checks the userDetails then check the address if it is not null , ? it is optional chaining operator */}
      <p><strong>City:</strong> {userDetails?.address?.city}</p>
      <p><strong>Address:</strong> {userDetails?.address?.address}</p>
      <p><strong>State:</strong> {userDetails?.address?.state}</p>
    </div>
  )
}

export default UsersDetails
