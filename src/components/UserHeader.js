import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

const UserHeader = props => {
  useEffect(() => {
    props.fetchUser(props.userId);
  }, []);

  if (!props.user) {
    return null;
  }

  return <div className="header">{props.user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId);

  return { user };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
