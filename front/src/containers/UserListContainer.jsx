import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllUsers } from '../action-creators/getUsers'
import UserList from '../components/UserList'


class UserListContainer extends React.Component {
    componentDidMount() {
        this.props.fetchAllUsers()
    }

    render() {
        return (
            <div>

                <UserList
                    list={this.props.listaUsuarios}
                />
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listaUsuarios: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: (us) => dispatch(fetchAllUsers(us))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListContainer)