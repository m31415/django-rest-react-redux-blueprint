import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { login } = this.props;
    login(username, password);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="col-md-offset-5 col-md-3">
          <h4>Blueprint Login</h4>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control input-sm chat-input"
              placeholder="username"
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              type="password"
              className="form-control input-sm chat-input"
              placeholder="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-md">
            Login
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      return dispatch(login(username, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
