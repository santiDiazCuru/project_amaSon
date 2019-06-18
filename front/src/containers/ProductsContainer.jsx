import React from 'react'
import { connect } from 'react-redux'

class ProductsContainer extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    {/* SIDEBAR */}

                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        {/* RESTO DEL CODIGO  */}
                    </div>
                </div>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer)