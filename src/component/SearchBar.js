import React from 'react';
import { User } from '../actions/fetchUser';
import { connect } from 'react-redux';
import '../css/SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isInputValid: true,
      errorMessage: ''
    }
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this.handleInputValidation = this.handleInputValidation.bind(this)

  }
  handleInputValidation(event) {

    const { isInputValid, errorMessage } = validateInput(this.state.username);
    this.setState({
      isInputValid: isInputValid,
      errorMessage: errorMessage
    })

  }
  _onChange(event) {
    console.log(event.target.value)
    const value = event.target.value;
    this.setState({
      username: value,
    })
  }

  _onSubmit(event) {
    event.preventDefault();
    this.props.fetchUser(this.state.username)
  }

  render() {
    const { isInputValid } = this.state;
    return (
      <div className="form-wrapper">
        <h1>Enter github username</h1>
        <form onSubmit={isInputValid ? this._onSubmit : undefined}>
          <input className="input" type="text" placeholder="User name" onChange={this._onChange}
            onBlur={this.handleInputValidation}
            required />
          <input className="button" type="submit" value={this.props.loading ? "Searching..." : "Search"} disabled={this.props.loading} />
          <FormError
            isHidden={this.state.isInputValid}
            errorMessage={this.state.errorMessage} />
        </form>
      </div>
    )
  }
}

const validateInput = (checkingText) => {
  const regexp = /[0-9]/;
  if (regexp.exec(checkingText) !== null) {
    return {
      isInputValid: true,
      errorMessage: ''
    };
  } else {
    return {
      isInputValid: false,
      errorMessage: 'nhập vào phải chữ số ..',


    };
  }
}

function FormError(props) {
  if (props.isHidden) { return null; }
  return (
    <div className="form-warning">
      {props.errorMessage}
    </div>
  )
}
const mapState = state => ({
  loading: state.loading
})
const mapDispatch = dispatch => ({
  fetchUser: username => dispatch(User(username))
});

export default connect(mapState, mapDispatch)(SearchBar);