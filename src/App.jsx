// React
import { useState } from "react";

// CSS
import "./App.css";

// Components
import { Post } from "./components/Post";
import { AddPostForm } from "./components/AddPostForm";

// ---------- App -----------------------------------

function App() {
  
  const [timeline, setTimeline] = useState([
    { id: Math.random().toString(16).slice(2), 
      username: "username", 
      text:  "Hi!" },
    { id: Math.random().toString(16).slice(2), 
      username: "username", 
      text:  "Hi!" },
    
  ]);

  // Temp State
  const [newPost, setNewPost] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Handle new post
  const handleNewPost = (e) => {
    setNewPost(e.target.value);
  };

  // Handle update
  const handleUpdatePost = (id) => {
    const post = timeline.filter((post) => post.id == id);
    setUpdateData({
      id: post.id,
      username: post.usernamename,
      text: post.text,
    });
  };

  // Add
  const addPost = () => {
    if (newPost) {
      const post = {
        id: Math.random().toString(16).slice(2),
        username: 'user test',
        text: newPost,
      };
      setTimeline([...timeline, post]);
      setNewPost("");
    }
  };


  // App Return
  return (
    <div>
      <div className="container App p-0 mt-3">
        <div className="card border-secondary bg-dark text-light col-lg-4 col-8 mx-auto">
          <div className="card-header border-secondary p-3 d-flex justify-content-between align-middle">
            <h5 className="card-title">
               To-do List
            </h5>
            <button
              className="btn btn-primary fw-semibold text-light btn-sm px-4 ms-3"
              type="button"
            >
              Adicionar
            </button>
          </div>
          <div className="card-body">
            <div className="">
              {
                <AddPostForm
                  newPost={newPost}
                  handleNewPost={handleNewPost}
                  addPost={addPost}
                />
              }
            </div>

            <ul className="list-group mt-3">
              {timeline && timeline.length ? "" : "No tasks..."}

              {timeline

                // Display tasks
                .map((post) => {
                  return (
                    <Task
                      id={post.id}
                      name={post.username}
                      status={post.text}
                      key={post.id}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;