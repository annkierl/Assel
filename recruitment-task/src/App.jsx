import { useState, useEffect } from 'react'

import {Table} from './MainRender'
function App() {
  const userId= 13;
  const username= 'ASSEL'
  const [posts, setPosts] = useState(null)
  const [users, setUsers] = useState(null)


  useEffect(()=>{
       //Feching posts from API - start data
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUsers([...json,{username:username, id:userId}]))
  
 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      setPosts(json)
    })
  }
  , []) 
  return (
  <>
    <Table posts={posts} setPosts={setPosts} users={users}/>
  </>
  )
}

export default App
