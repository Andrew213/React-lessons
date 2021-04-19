import React, { useState } from 'react';
import Comments from '../components/Comments.jsx';
import Form from '../components/Form.jsx';

const App = (props) => {
  // const [comments, setComments] = useState(localStorage.getItem('commentsBase') ? JSON.parse(localStorage.getItem('commentsBase')) : []);

  // localStorage.setItem('commentsBase', JSON.stringify(comments))

  // const addComment = comment => {
  //   if (/^\s*$/.test(comment.text) || /^\s*$/.test(comment.name)) {
  //     return
  //   }

  //   localStorage.setItem('commentsBase', JSON.stringify(comments))

  //   const newTodos = [comment, ...comments];

  //   setComments(newTodos)
  //   console.log(comment)
  // };

  // const removeComment = id => {
  //   const removeArr = [...comments].filter(comment => comment.id !== id)

  //   setComments(removeArr)
  // }

  return (
    <div className='app'>
      <Form />
      <Comments
      // comments={comments}
      // removeComment={removeComment}
      />
    </div>
  );
}

export default App