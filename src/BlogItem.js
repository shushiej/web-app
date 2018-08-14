import React from 'react';
import * as Markdown from 'react-markdown'

const BlogItem = ({title, path, content}) => (
  <div className="box content">
    <h3>{title}</h3>
    <Markdown source = {content} />
  </div>
)
export default BlogItem