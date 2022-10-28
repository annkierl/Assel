import '../App.css'

import { EditRows } from './EditRows'
export const FiltratedTable=({searchedPosts,users,setSearchedPosts, setEdited, edited, posts, setPosts, setEditedData, userId, username})=>{
///Sorted Data
  const handleSortingChangeAZ = ()=>{
    const connectingData=posts.map((element)=>{
       return element={...element, username: users.filter((user=>(user.id===element.userId)))[0].username }
    })
      const sortedPosts = [...connectingData.sort((a,b)=>{ if(a.username < b.username) { return -1; }
        if(a.username > b.username) { return 1; }
        return 0;})]
        setSearchedPosts(sortedPosts)
    }
    const handleSortingChangeZA = ()=>{
        const connectingData=posts.map((element)=>{
           return element={...element, username: users.filter((user=>(user.id===element.userId)))[0].username }
        })
          const sortedPosts = [...connectingData.sort((a,b)=>{ if(b.username < a.username) { return -1; }
            if(b.username > a.username) { return 1; }
            return 0;})]
            setSearchedPosts(sortedPosts)
        }
//Sordted Data END// Delete Data 
    const onClickDelete=(e)=>{
        const idToDelete = Number(e.target.parentElement.parentElement.parentElement.id);
        fetch(`https://jsonplaceholder.typicode.com/posts/${idToDelete}}`, {
          method: 'DELETE',
        })
        .then((response) => response.json())
        .then(()=>{
          let copyPosts=[...posts]
        const filtred= copyPosts.filter((element)=>{if(element.id!==idToDelete){return true}else{false}})
        setPosts(filtred)
        setEdited(filtred)
        const filtredLocally=searchedPosts.filter((element)=>{if(element.id!==idToDelete){return true}else{false}})
        setSearchedPosts(filtredLocally)
        });}
        
        const onClickEdit=(e)=>{
          setEdited(e.target.parentElement.parentElement.parentElement.id)
        }
    return ( <>{(users && searchedPosts && posts) ? (<table>
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
            {searchedPosts.map((element, index)=>(
        <tr className='table-row-phone' key={index} id={element.id} data-id={index}>
          {edited==element.id ? (<><EditRows element={element} users={users} setEdited={setEdited} userId={userId} username={username} posts={posts} setEditedData={setEditedData} elementId={index} setSearchedPosts={setSearchedPosts}/></>) : (<> 
              <td>
                <div className="action-buttons">
                  <button onClick={onClickDelete}>x</button> 
                  <button onClick={onClickEdit}>Edit</button>
                </div>
              </td>
              <td>{users.filter((user=>(user.id==element.userId)))[0].username}</td>
              <td> {element.title}</td>
              <td> {element.body}</td></>)}
          </tr>
        ))}</table>) : (<>Loading</>)} </>)
}