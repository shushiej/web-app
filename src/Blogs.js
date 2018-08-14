import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './BlogItem';
import * as config from './config/index.json';

class Blogs extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: config.space,
    accessToken: config.accessToken
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    return (
      <div>
        <p>This is the Blog Page</p>
        <br/>
        { this.state.posts.map(({fields}, i) =>
          <BlogItem key={i} title = {fields.blogTitle} path = {fields.path} content = {fields.content}/>
        )}
    </div>
    )
  }
}
export default Blogs
