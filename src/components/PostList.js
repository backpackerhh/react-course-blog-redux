import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = props => {
  useEffect(() => {
    props.fetchPostsAndUsers();
  }, []);

  const renderList = () => {
    return props.posts.map(post => {
      return (
        <div key={post.id} className="item">
          <i className="large middle aligned icon user"></i>

          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>

            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  return <div className="ui relaxed divided list">{renderList()}</div>;
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
