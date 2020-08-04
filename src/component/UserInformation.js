import React from 'react';
import { connect }  from 'react-redux';
import '../css/UserInformation.css'

const UserInformation = (props) => {
  const { user, error, loading, valueTest } = props;

  
  return (
    <div>
      {loading && (<h3 className="loading">Searching... </h3>)}
      {error && (<h3 className="error">{error.message}</h3>)}
      {user && (
        <div className="main">
          <img className="mainimg" src={user.imageAvatarOfUser} alt="avatar" />
          <DataField
            label="Github ID"
            value={user.id}
          />
          <DataField
            label="Github name"
            value={user.fullName}
          />
          <DataField
            label="Github name"
            value={user.phoneNumber}
          />
          <DataField
            label="Github name"
            value={user.address}
          />
          <DataField
            label="Github URL"
            value={user.email}
            isURL
          />
           <DataField
            label="Github URL"
            value={valueTest}
          />
        </div>
      )}
    </div>
  )
}

const DataField = ({
  label,
  value,
  isURL
}) => {
  return (
    <div className="data">
      <label>{label}: </label>
      {isURL ? (<a href={value}>{value}</a>) : (<span>{value || "No name"}</span>)}
    </div>
  )
}

function mapStateToProps(state) {
  return { 
    user: state.userReducer.user,
    error: state.error,
    loading: state.loading
   }
}


export default connect(mapStateToProps, null)(UserInformation);