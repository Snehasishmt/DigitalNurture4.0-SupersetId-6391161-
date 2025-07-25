import React, { Component } from 'react';
import Post from './Post'; 

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

 
  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
       
        const postObjects = data.map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts: postObjects });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        <h1>All Blog Posts</h1>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
