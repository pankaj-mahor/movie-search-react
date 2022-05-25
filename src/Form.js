import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  //   const arr = useState(4);

  console.log(setComment);
  const handleUserName = (e) => {
    setUsername(e.target.value);
  };
  const handleComments = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Form Here</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" onChange={handleUserName} />
        </div>
        <div>
          <label htmlFor="textarea">textarea</label>
          <textarea
            type="text"
            value={comment}
            onChange={handleComments}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>

      {username?.length ? (
        <p>
          vallue : {username?.length < 6 ? "Try more then 6" : "Strong One"}
        </p>
      ) : null}
      {/* <p>vallue : {username?.length < 6 ? "Try more then 6" : "Strong One"}</p> */}
    </div>
  );
}

export default Form;
