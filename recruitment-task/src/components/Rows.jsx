export const Rows=({ posts, users, setPosts,setEdited, element})=>{

    const onClickDelete=(e)=>{
        const idToDelete = e.target.parentElement.parentElement.id;
        fetch(`https://jsonplaceholder.typicode.com/posts/${idToDelete}}`, {
          method: 'DELETE',
        })
        .then((response) => response.json())
        .then(()=>{
          let postsToUpdate = [...posts]
          postsToUpdate.splice(e.target.parentElement.parentElement.id,1)
          setPosts(postsToUpdate)
        
        });
        }
        const onClickEdit=(e)=>{
            setEdited(e.target.parentElement.parentElement.id)
           
          }
        
    return  (<>  
          <td> <button onClick={onClickDelete}>x</button> <button onClick={onClickEdit}>Edit</button></td>
          
          <td>{users.filter((user=>(user.id==element.userId)))[0].username}</td>
        <td> {element.title}</td>
        <td> {element.body}</td>
      
        </>)
}