import React from 'react';
import '../../src/css/style.css';
import { Register } from '../actions/fetchRegister';
import { connect } from 'react-redux';
import Topheader from './topheader';

class Registers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      address: '',
      phoneNumber: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
  }

  _onChangeInput(key, value) {
    switch (key) {
      case 'fullName':
        this.setState({ fullName: value });
        break;
      case 'address':
        this.setState({ address: value });
        break;
      case 'phoneNumber':
        this.setState({ phoneNumber: value });
        break;
      case 'email':
        this.setState({ email: value });
        break;
      case 'password':
        this.setState({ password: value });
        break;
      case 'passwordConfirm':
        this.setState({ passwordConfirm: value });
        break;
      default:
        break;
    }
  }
  componentDidUpdate() {

    const data = this.props.data;
    if (data) {
      this.props.history.push('/listuser');
    }
  }
  signIn = () => {
    var user = {
      fullName: this.state.fullName,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    }

    this.props.fetchRegister(user)

  }
  render() {
    return (
      <div className="App">
        <Topheader />
        <div className="container">
          <div className="main-w3layouts-agileinfo">
            {/*form-stars-here*/}
            <div className="wthree-form">
              <h2>Đăng ký thành viên</h2>
              <form action="#" method="post">
                <div className="form-sub-w3">
                  <input type="text" id="text" onChange={(event) => this._onChangeInput('fullName', event.target.value)} className="form-control" placeholder="Họ và tên" required />
                </div>
                <div className="form-sub-w3">
                  <input type="text" id="text" onChange={(event) => this._onChangeInput('address', event.target.value)} className="form-control" placeholder=" địa chỉ" required />
                </div>
                <div className="form-sub-w3">
                  <input type="text" id="number" onChange={(event) => this._onChangeInput('phoneNumber', event.target.value)} className="form-control" placeholder="Số điện thoại" required />
                </div>
                <div className="form-sub-w3">
                  <input type="text" onChange={(event) => this._onChangeInput('email', event.target.value)} id="inputEmail" className="form-control" placeholder="email" required />
                </div>
                <div className="form-sub-w3">
                  <input type="password" onChange={(event) => this._onChangeInput('password', event.target.value)} id="inputPassword" className="form-control" placeholder="mật khẩu" required />
                </div>
                <div className="form-sub-w3">
                  <input type="password" onChange={(event) => this._onChangeInput('passwordConfirm', event.target.value)} id="passwordConfirm" className="form-control" placeholder="xác nhận mật khẩu" required />
                </div>

                <div className="clear" />
                <div className="submit-agileits">
                  <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">đăng ký</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapState = state => (
  {
    data: state.registerReducers.user,

  })
const mapDispatch = dispatch => ({
  fetchRegister: user => dispatch(Register(user))
});

export default connect(mapState, mapDispatch)(Registers);

