import React, { useRef } from "react";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreatePostForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div>
      <h1>Connect with Betsy</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={nameRef} placeholder="Name" />
        <textarea className="form-control mb-5" required ref={emailRef} placeholder="Email" />
        <input className="form-control mb-5" ref={messageRef} placeholder="Message for Betsy" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
