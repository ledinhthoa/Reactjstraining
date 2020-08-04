import React, { Component } from 'react';
import '../../src/css/style.css';
import Logout from './logout';
import { connect } from 'react-redux';
import axios from 'axios';
class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      address: '',
      phoneNumber: '',
      email: '',
      userdata: ''
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

      default:
        break;
    }
  }
  getiduser = () => {
    const id = this.props.match.params.id;
    console.log(id)
    axios.get(`http://127.0.0.1:8000/api/getUserById/${id}`)
      .then(res => {
        const userdata = res.data;

        this.setState({
          userdata,
        })
      })
  }

  componentDidMount() {
    this.getiduser();
    
  }
  signIn = () => {
    const id = this.props.match.params.id;
    var user = {
      fullName: this.state.fullName || this.state.userdata.fullName,
      address: this.state.address || this.state.userdata.address,
      phoneNumber: this.state.phoneNumber || this.state.userdata.phoneNumber,
      email: this.state.email || this.state.userdata.email,

    }
    this.setState({ user })

    axios.put(`http://127.0.0.1:8000/api/editUsers/${id}`, user)
      .then((res) => {
        console.log(res.data)
        if (res.data) {
         return this.props.history.push('/listuser');
        }
       })

  }
  render() {
    return (
      <div className="App">
        <Logout />
        <div className="container">
          <div className="main-w3layouts-agileinfo">
            {/*form-stars-here*/}
            <div className="wthree-form">
              <h2>chỉnh sửa thành viên</h2>
              <form action="#" method="post">
                <div className="form-sub-w3">
                  <input type="text" id="text" defaultValue={this.state.userdata.fullName} onChange={(event) => this._onChangeInput('fullName', event.target.value)} className="form-control" placeholder="Họ và tên" required />
                </div>
                <div className="form-sub-w3">
                  <input type="text" id="text" defaultValue={this.state.userdata.address} onChange={(event) => this._onChangeInput('address', event.target.value)} className="form-control" placeholder=" địa chỉ" required />
                </div>
                <div className="form-sub-w3">
                  <input type="text" id="number" defaultValue={this.state.userdata.phoneNumber} onChange={(event) => this._onChangeInput('phoneNumber', event.target.value)} className="form-control" placeholder="Số điện thoại" required />
                </div>
                <div className="form-sub-w3">
                  <input type="text" defaultValue={this.state.userdata.email} onChange={(event) => this._onChangeInput('email', event.target.value)} id="inputEmail" className="form-control" placeholder="email" required />
                </div>
                <div className="clear" />
                <div className="submit-agileits">
                  <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">EditUser</button>
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
    data: state.ListuserReducers.user,
  })
export default connect(mapState, null)(EditUser);

