import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

const PostList = props => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  return <div>PostList</div>;
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { fetchPosts })(PostList);
