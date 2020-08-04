import React, { Component } from 'react';
import '../../src/css/one-page-wonder.css';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import Topheader from './topheader';
import Modalcontent from './modalcontent';
import ReactPaginate from 'react-paginate';


class conten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      persons: [],
      offset: 0,
      perPage: 8,
      currentPage: 0,
      userdata: []
    };
  }
  receivedData(id) {
    axios.get(`http://127.0.0.1:8000/api/posts`, id)
      .then(res => {
        const persons = res.data;
        this.setState({
          persons,
          pageCount: Math.ceil(persons.length / this.state.perPage),
        })
      })
  }
  componentDidMount() {
    this.receivedData();
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
      currentPage: selectedPage,
      offset: offset,
      
    }, () => {
      this.receivedData()
    });
    console.log(this.state.pageCount)
  };
  close = () => {
    this.setState({ showModal: false });
  }
  open = (id) => {
    this.setState({ showModal: true });
    axios.get(`http://127.0.0.1:8000/api/posts/${id}`)
      .then(res => {
        const userdata = res.data;
        console.log(userdata)
        this.setState({
          userdata,
        })
      })

  }

  handleLoadData = () => {
    const slice = this.state.persons.slice(this.state.offset, this.state.offset + this.state.perPage)
    return slice.map((pd, index) =>
      <Card style={{ width: '17rem', marginLeft: '2px', marginRight: '5px', marginBottom: '5px' }} key={index}>
        <Card.Img variant="top" src={pd.imageFolderName} style={{ width: '17rem', height: '13rem' }} />
        <Card.Body>
          <Card.Title>{pd.title}</Card.Title>
          <Card.Text>
            {pd.contentPost}
          </Card.Text>
          <Button variant="primary" onClick={() => this.open(pd.id)}>Go somewhere</Button>
        </Card.Body>
      </Card>)
  }
  render() {
    return (
      <div className="App">
        <Topheader />
        <Header />
        <div className="container">
          <div className="row mt-5">
            {this.handleLoadData()}
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
            </ul>
          </nav>
        </div>
        <Footer />

        <Modalcontent showModal={this.state.showModal} close={this.close} userdata={this.state.userdata} />

      </div>
    );
  }
}

export default conten;