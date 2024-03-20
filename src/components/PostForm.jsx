import React from "react";

const PostForm = ({post}) => {
    const [post, setPost] = useState({title: '', body: ''})
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