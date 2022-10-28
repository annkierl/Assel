import { useState } from "react"

export const EditRows=({element, users, setEdited, userId, username, posts, setEditedData, setSearchedPosts})=>{
    const [editPosts, setEditPost]=useState(
        {title:'',
        body:'',
        userId: userId,
        username:username
        })
        const onChange=(e)=>{
            const { name, value } = e.target;
            setEditPost({
                ...editPosts,
                [name]:value
            })
        }
const onClickCalncelEdit=()=>{
setEdited(null)
}
const onClickSubmit=(e)=>{
    e.preventDefault()
    const idToEdit = Number(e.target.parentElement.parentElement.parentElement.id);
    const idToEditLocally = Number(e.target.parentElement.parentElement.dataset.id)
    fetch(`https://jsonplaceholder.typicode.com/posts/${idToEdit}`, {
    method: 'PUT',
    body: JSON.stringify({...editPosts,
    id: idToEdit,
    }),
    headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
    .then((response) => response.json())
    .then((json) => { 
        
        const copyOfPosts=[...posts]
        const indexForUpdate= copyOfPosts.findIndex(object=>{return object.id==idToEdit})

    setEditedData([...posts, posts[indexForUpdate]={ ...editPosts,
        id: idToEdit,
    }])
    setSearchedPosts([...posts, posts[indexForUpdate]={ ...editPosts,
        id: idToEdit,
    }])

    
});
    setEdited(null)

}
    return (<>
    {posts ?  (<>
        <td> 
            <div className="action-buttons">
                <button onClick={onClickCalncelEdit}>Cancel Edit</button>
                <button onClick={onClickSubmit}>Sumbit</button>
            </div>
        </td>
        <td>{users.filter((user=>(user.id==element.userId)))[0].username}</td>
        <td>
            <input 
            type="text" 
            id='title' 
            name='title' 
            onChange={onChange} 
            placeholder='edit title...'
            />
        </td>
        <td>
            <input
            type="text"
            id="body"
            value={editPosts.body}
            name="body"
            onChange={onChange}
            placeholder='edit post...'
            />
        </td> 
        </>) : (<>Lodaing Data</>)}
        </>)
}