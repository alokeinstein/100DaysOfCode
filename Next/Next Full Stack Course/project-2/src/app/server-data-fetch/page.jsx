//fetch
//Nextjs will cache this data untill unless there is a change in the data
//First time data will be fetched from the server
//Second time data will be fetched from the cache

import Link from "next/link";
async function fetchListOfUsers() {
  try {
    //force-cache is the default setting for data caching we can omit this via this syntax {cache: 'no-store'}
    // const apiResponse = await fetch('https://dummyjson.com/users', {cache: 'no-store'})
    const apiResponse = await fetch("https://dummyjson.com/users"); //{cache: 'force-cache'} default
    const result = await apiResponse.json();
    return result.users;
  } catch (error) {
    throw new Error(error);
  }
}
const ServerSideDataFetching = async () => {
  const listofUsers = await fetchListOfUsers();
  console.log(listofUsers);
  return (
    <div>
      server side data fetching
      <ul>
        {listofUsers && listofUsers.length > 0 ? (
          listofUsers.map((user) => {
            return (
              <li key={user.id}>
                {/* <Link href={`/server-data-fetch/${user.id}`}> */}
                  {user.firstName}
                {/* </Link> */}
              </li>
            );
          })
        ) : (
          <li>No user found</li>
        )}
      </ul>
    </div>
  );
};

export default ServerSideDataFetching;
