import React, { useRef, useState } from 'react';

import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MainButton from './components/UI/button/MainButton';
import InputCreate from './components/UI/input/InputCreate';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Js', body: ''},
    {id: 5, title: 'Jsf', body: ''},
    {id: 2, title: 'ssf', body: ''}
  ])







  const addNewPost = (e) => {
    
    e.preventDefault()
   
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})

    

  };

  

  return (
    <div className="App">
     
        <PostForm/>
     
        <PostList posts = {posts} title={'list of posts1'}/>
    </div>
  );
}

export default App;
