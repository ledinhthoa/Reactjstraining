
import React from 'react';
import '../../src/css/style.css';
import '../../src/css/font-awesome.css';
import Topheader from './topheader';
import { Singin } from '../actions/fetchSingin';
import { connect } from 'react-redux';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  _onChangeInput(key, value) {
    switch (key) {
      case 'PASSWORD':
        this.setState({ password: value });
        break;
      case 'EMAIL':
        this.setState({ email: value });
        break;
      default:
        break;
    }
  }

  componentDidUpdate() {
    const token = this.props.token;
    if (token) {
      return this.props.history.push('/listuser');
    }
  }

  signIn = async () => {
    var user = {
      email: this.state.email,
      password: this.state.password
    }
    await this.props.fetchSingin(user)
  }
  render() {
    return (
      <div className="App">
        <Topheader />
        <div className="container">
          <div className="main-w3layouts-agileinfo">
            {/*form-stars-here*/}
            <div className="wthree-form">
              <h2>Fill out the form below to login</h2>
              <form action="#" method="post">
                <div className="form-sub-w3">
                  <input type="text" onChange={(event) => this._onChangeInput('EMAIL', event.target.value)} id="inputEmail" className="form-control" placeholder="Email address" required />
                  <div className="icon-w3">
                    <i className="fa fa-user" aria-hidden="true" />
                  </div>
                </div>
                <div className="form-sub-w3">
                  <input type="password" onChange={(event) => this._onChangeInput('PASSWORD', event.target.value)} id="inputPassword" className="form-control" placeholder="Password" required />
                  <div className="icon-w3">
                    <i className="fa fa-unlock-alt" aria-hidden="true" />
                  </div>
                </div>
                <label className="anim">
                  <input type="checkbox" className="checkbox" />
                  <span>Remember Me</span>
                  <a href="/">Forgot Password</a>
                </label>
                <div className="clear" />
                <div className="submit-agileits">
                  <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapState = state => ({
  token: state.signInReducers.token,
  loading: state.loading
})
const mapDispatch = dispatch => ({
  fetchSingin: user => dispatch(Singin(user))
});

export default connect(mapState, mapDispatch)(Signin);

