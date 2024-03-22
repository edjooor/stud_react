import React, { useMemo, useRef, useState } from 'react';

import './styles/App.css'

import PostList from './components/PostList';

import PostForm from './components/PostForm';
import SelectSort from './components/UI/select/SelectSort';
import InputCreate from './components/UI/input/InputCreate';
import PostFilter from './components/PostFilter';
import ModalWindow from './components/UI/ModalWindow/ModalWindow';
import MainButton from './components/UI/button/MainButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Js', body: 'i' },
    { id: 5, title: 'Jsf', body: 'dont' },
    { id: 2, title: 'ssf', body: 'knooooooow' }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)



  const sortedPosts = useMemo(() => {
    console.log('hueten2 ')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;

  }, [filter.sort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }






  return (
    <div className="App">
      <MainButton onClick={() => setModal(true)}>create post</MainButton>

      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalWindow>


      <PostFilter
        filter={filter}
        setFilter={setFilter} />
      <PostList deletePost={deletePost} posts={sortedAndSearchPosts} title={'list of posts1'} />



    </div>
  );
}

export default App;
