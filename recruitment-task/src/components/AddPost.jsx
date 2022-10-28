export const AddPost =({setNewPost,setPosts, userId,username, addNewPost, posts})=>{
    const onChange=(e)=>{
      const { name, value } = e.target;
      setNewPost({
        ...addNewPost,
        [name]: value,
      });
    }
    const addNewRecord=()=>{
        const endPointToPost= posts.length + 1;
        fetch(`https://jsonplaceholder.typicode.com/posts/${endPointToPost}`, {
            method: 'POST',
            body: JSON.stringify({
              id:endPointToPost ,
              title: addNewPost.title,
              body: addNewPost.body,
              userId: userId,
              username:username
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then(()=>{
              let postsToUpdate = [...posts]
              postsToUpdate.push({
              id:endPointToPost ,
              title: addNewPost.title,
              body: addNewPost.body,
              userId: userId,
              username:username
              })
              setPosts(postsToUpdate)
             
            });
          
            setNewPost({title:'',body:''})
          }
return (
  <> { posts ? 
    (<div className="add-posts">
       <label htmlFor="title">Enter Title</label>
       <input className="input-add-title"
            type="text"
            id="title"
            value={addNewPost.title}
            name="title"
            onChange={onChange}/>
    <label htmlFor="title">Enter Post</label>
    <textarea className="textarea-add-post"
            type="text"
            id="body"
            value={addNewPost.body}
            name="body"
            onChange={onChange}/>

    <button onClick={addNewRecord}>Add new record</button>
    </div>) : <>Loading Data</>} </>
)}