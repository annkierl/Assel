export const EditedData=( {posts, users, setPosts,setEdited, element})=>{
    const onClickDelete=(e)=>{
        const idToDelete = Number(e.target.parentElement.parentElement.id);
        fetch(`https://jsonplaceholder.typicode.com/posts/${idToDelete}}`, {
          method: 'DELETE',
        })
        .then((response) => response.json())
        .then(()=>{
          let postsToUpdate = [...posts]
          postsToUpdate.splice(e.target.parentElement.parentElement.parentElement.dataset.id,1)
          setPosts(postsToUpdate)
        });
        }
        const onClickEdit=(e)=>{
          setEdited(e.target.parentElement.parentElement.parentElement.id)          
          }

return (<>  
    <td> 
    <div className="action-buttons">
        <button onClick={onClickDelete}>x</button> 
        <button onClick={onClickEdit}>Edit</button>
    </div>
    </td>
    <td>{users.filter((user=>(user.id==element.userId)))[0].username}</td>
    <td> {element.title}</td>
    <td> {element.body}</td>
</>)   
}