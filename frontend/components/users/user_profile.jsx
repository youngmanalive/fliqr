import React from 'react';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }


}
