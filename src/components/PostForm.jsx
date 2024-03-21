import React, {useState} from "react";
import InputCreate from "./UI/input/InputCreate";
import MainButton from "./UI/button/MainButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
    
      e.preventDefault()
      const newPost = {
        ...post, id: Date.now()
      } 
      create(newPost)  
      
      setPost({title: '', body: ''})
  
      
  
    };
    return(
        <form>
        <InputCreate 
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type='text' placeholder='post name'/>

        <InputCreate 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type='text'placeholder='post body'/>
        <MainButton onClick={addNewPost}>create</MainButton>
      </form>
    );

};

export default PostForm;