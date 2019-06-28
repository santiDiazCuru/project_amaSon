import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllUsers, deleteUser, changeAdminStatus } from '../action-creators/getUsers'
import UserList from '../components/UserList'
import Axios from 'axios'


class UserListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickedUser: ''
        }
        this.handleAdmin = this.handleAdmin.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("CONSOLELOG", prevProps)
        console.log("prevstate", prevState)
        if (this.props.listaUsuarios.length !== prevProps.listaUsuarios.length) {
            this.props.fetchAllUsers()
        }
    }

    componentDidMount() {
        this.props.fetchAllUsers()
    }

    handleAdmin(e) {
        e.preventDefault(e)
        console.log("ESTO ES E L SSSSSSS", e.target.checked, e.target.id)
        this.props.changeAdminStatus(e.target.id, e.target.checked)
            .then(() => {
                this.props.fetchAllUsers()
            })
            .then(data => { console.log("SOY LA DATA", data) })
    }

    handleDelete(e) {
        e.preventDefault(e);
        this.props.deleteUser(e.target.id)
        // Axios.get(`/api/users/delete/${e.target.id}`)
        // .then(console.log("BORRADO"))
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <br /><br />
                        <div className="col-sm-2 col-md-2 sidebar" style={({ zIndex: 8 })}>
                            {/* RENDERIZA COMPONENTE DE FILTRO */}
                            <br /><img width="100%" src="https://secure.webtoolhub.com/static/resources/icons/set108/26ce8716.png" alt="" />
                            <br /><hr />
                            <img width="100%" src="http://www.freelogovectors.net/wp-content/uploads/2013/02/administrator_woman2.png" alt="" />
                        </div>
                        <div className="col-sm-10 col-sm-offset-10 col-md-10 col-md-offset-2 main">
                            <UserList
                                list={this.props.listaUsuarios}
                                handleAdmin={this.handleAdmin}
                                handleDelete={this.handleDelete}
                                idActive = {this.props.idActive}
                                status = {this.props.status}
                            />
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listaUsuarios: state.users.users,
        userBorrado: state.user,
        idActive:state.user.currentUser.id,
        isLogin:state.user.isLoggedIn,
        status: state.user.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: (us) => dispatch(fetchAllUsers(us)),
        deleteUser: (del) => dispatch(deleteUser(del)),
        changeAdminStatus: (id, value) => dispatch(changeAdminStatus(id, value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListContainer)