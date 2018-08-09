import React from 'react';

class SessionModal extends React.Component {

  render() {
    if (this.props.status === 'closed') return <div/>;

    return (
      <div>
        Modal bro!
        <p>{this.props.status}</p>
        <button onClick={this.props.close}>close</button>
      </div>
    );
  }
}

export default SessionModal;
