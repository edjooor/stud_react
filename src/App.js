import React, { useRef, useState } from 'react';

import './styles/App.css'

import PostList from './components/PostList';

import PostForm from './components/PostForm';
import SelectSort from './components/UI/select/SelectSort';
import InputCreate from './components/UI/input/InputCreate';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Js', body: 'i'},
    {id: 5, title: 'Jsf', body: 'dont'},
    {id: 2, title: 'ssf', body: 'knooooooow'}
  ])

  const [sort, setSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const postSort = (sort) => {
    setSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  

  

  return (
    <div className="App">
     
        <PostForm create={createPost}/>
        <InputCreate placeholder='search'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        />
        <SelectSort 
        value={sort}
        onChange={postSort}
        options={[
          {value: 'title', name: 'by title'},
          {value: 'body', name: 'by description'}
        ]} 
        defaultOption={'sort by'}/>
       
        {posts.length !==0
        ? 
        <PostList deletePost={deletePost} posts = {posts} title={'list of posts1'}/>
        : 
        <p>posts not found</p>}
     
        
    </div>
  );
}

export default App;
