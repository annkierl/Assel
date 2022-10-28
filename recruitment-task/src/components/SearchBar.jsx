export const SearchBar=({posts,setPosts,setIsFiltrated, setSearchedPosts, setEditedData})=>{
    const onChangeSearchForTitle=(e)=>{
        if (!e.target.value)return (setPosts(posts), setIsFiltrated(false))
        setIsFiltrated(true)
        const filtredData= [...posts.filter((post)=>(post.title.includes(e.target.value)))]
            setSearchedPosts(filtredData)
            setEditedData(filtredData)
    }
    const handleSubmit =(e)=>e.preventDefault();
    return(<> <form className="SearchBar" onSubmit={handleSubmit}>Search for title: <input  className ="search-input" type="text"  id="search" onChange={onChangeSearchForTitle}/></form>
    </>
    )
}