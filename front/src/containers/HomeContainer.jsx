import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                    <Home />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect()(HomeContainer)