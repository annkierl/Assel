import { useState } from 'react'
import './App.css'
import {AddPost} from './components/AddPost'
import {SearchBar} from './components/SearchBar' 
import {FiltratedTable} from './components/FiltratedTable'
import {Rows} from './components/Rows'
import {EditRows} from './components/EditRows'
import {EditedData} from './components/EditedData'
export const Table=({posts, setPosts, users})=>{
//UserData
const userId= 13;
const username= 'ASSEL';

  const [isFiltrated,setIsFiltrated]=useState(false)
  const [edited,setEdited]=useState(null)
  const [editetData, setEditedData]= useState(null)
  const [searchedPosts, setSearchedPosts]= useState(null)
  const [addNewPost, setNewPost] = useState({
    id:'',
    title: '',
    body:'',
    userId: userId,
    username: username
  }) 
//Sort Data Start
const handleSortingChangeAZ = ()=>{
const connectingData=posts.map((element)=>{
   return element={...element, username: users.filter((user=>(user.id===element.userId)))[0].username }
})
  const sortedPosts = [...connectingData.sort((a,b)=>{ if(a.username < b.username) { return -1; }
    if(a.username > b.username) { return 1; }
    return 0;})]
  setPosts(sortedPosts)
}
const handleSortingChangeZA = ()=>{
    const connectingData=posts.map((element)=>{
       return element={...element, username: users.filter((user=>(user.id===element.userId)))[0].username }
    })
      const sortedPosts = [...connectingData.sort((a,b)=>{ if(b.username < a.username) { return -1; }
        if(b.username > a.username) { return 1; }
        return 0;})]
      setPosts(sortedPosts)
    }
//Sort Data Endt
  return (
    <div className="App">
     {(posts && users) ? (<>
     <SearchBar posts={posts} setEditedData = {setEditedData}setPosts={setPosts} setIsFiltrated={setIsFiltrated} setSearchedPosts={setSearchedPosts}/>
     {!isFiltrated ? (
     <table>
     <tbody>
      <tr className='table-row'>
        <th>Actions</th>
        <th>
            <div className='sort-button-container'>
            <button className='sort-button' onClick={handleSortingChangeAZ}>a-z</button>
            <h2>Users</h2>
            <button className='sort-button' onClick={handleSortingChangeZA}>z-a</button>
            </div> 
        </th>
        <th><h2>Title</h2></th>
        <th><h2>Posts</h2></th>
    </tr>
        {posts.map((element, index)=>(
    <tr className='table-row-phone' key={index} id={element.id} data-id={index}>
      { edited==element.id ? 
      (<>
      <EditRows element={element} users={users} setEdited={setEdited} userId={userId} username={username} posts={posts} setEditedData={setEditedData} elementId={index} setSearchedPosts={setSearchedPosts}/>
      </>): 
      (<> {EditedData ? (<><EditedData element={element} users={users} posts={posts} setPosts={setPosts} setEdited={setEdited}/></>): (<><Rows posts={posts} users={users} setPosts={setPosts} setEdited={setEdited} element={element} username={username}/></>)}
      </>)}
    </tr>
      ))}
      </tbody></table>) :
      (<FiltratedTable posts = {posts} setPosts={setPosts} searchedPosts={searchedPosts} users={users} setSearchedPosts={setSearchedPosts} setEditedData={setEditedData} setEdited={setEdited} edited={edited} userId={userId}/>)}</>) : (<>Loading data</>)}

    <AddPost setNewPost={setNewPost} setPosts={setPosts}  userId={userId} username={username} addNewPost={addNewPost} posts={posts}/>
    </div>
  )

}