import React from 'react';
import { connect } from 'react-redux'

class SidebarContainer extends React.Component {

    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
            
                <ul className="nav nav-sidebar">
                    <li className="active">
                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Mis Favoritos
                        <span className="sr-only">(current)</span></li>
                </ul>
                {/* RESTO DEL CODIGO  */}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
       
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
    )(SidebarContainer)