import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Logout from './logout';
import SearchBar from './SearchBar';
import UserInformation from './UserInformation';
import { connect } from 'react-redux';
import { Listuser } from '../actions/fetchlistuser';
import { Link } from 'react-router-dom';

class listuser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            userdata: "",
        }
    }
    receivedData() {
        const url = 'http://127.0.0.1:8000/api/getAllUsers'
        const token = localStorage.getItem('token')
        axios.get(url, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(res => {
                const persons = res.data.data;
                this.setState({ persons });
            })
    }
    componentDidMount() {
        this.receivedData();
    }
    editclick = (id) => {
        
        this.props.fetchlistuser(id);
    
    }
    getiduser = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/deleteEmployee/${id}`)
            .then(res => {
                const userdata = res.data;
                console.log(userdata)
                this.setState({
                    userdata,
                })
                if (userdata) {
                    this.receivedData();
                    return alert("da xoa thanh cong");
                }
            })
    }
    

    render() {
        return (
            <div className="App">
                <Logout Userdata={this.persons} />
                <div className="container">
                    <SearchBar />
                    <UserInformation />
                    <div className="row mb-4" style={{ marginLeft: '2px', marginRight: '5px', marginBottom: '5px', marginTop: '10px' }}>
                        <div className="col-sm-12 grid-margin">
                            <div className="card h-100">
                                <h4 className="card-header">Table</h4>
                                <div className="card-body">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>Full Name</th>
                                                <th>email</th>
                                                <th>phonenumber</th>
                                                <th>address</th>
                                                <th>sendofdate</th>
                                                <th>action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.persons.map((person, index) => <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{person.fullName}</td>
                                                <td>{person.email}</td>
                                                <td>{person.phoneNumber}</td>
                                                <td>{person.address}</td>
                                                <td>{person.reasonLocked}</td>
                                                <div className="btn-group">
                                                    <div className="btn btn-warning">
                                                         <Link className="fa fa-edit"to={`/EditUser/${person.id}`}>Edit</Link>
                                                    </div>
                                                    <div className="btn btn-danger"><i className="fa fa-delete" onClick={(id) => this.getiduser(person.id)}>Delete</i></div>
                                                </div>
                                            </tr>)
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
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
    const mapDispatch = dispatch => ({
        fetchlistuser: user => dispatch( Listuser(user))
      });
export default connect(mapState, mapDispatch)(listuser);
