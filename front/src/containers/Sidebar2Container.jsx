import React from 'react';
import { connect } from 'react-redux';
import Sidebar2Component from '../components/Sidebar2Component';

class SidebarContainer extends React.Component {
    constructor() {
        super();
        // cambiar el estado de price default por la diferencia el precio menor y el mayor
        this.state = {
            priceMin: 0,
            priceMax: 100
        };
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
        this.handleClickMin = this.handleClickMin.bind(this);
        this.handleClickMax = this.handleClickMax.bind(this);
    };


    handleClickMin(e) {
        e.preventDefault();
        // cambiar el estado de price default por la diferencia el precio menor y el mayor
        this.setState({ priceMin: 0 }, () => console.log(this.state.priceMin, 'onClickMin'))
    };

    handleChangeMin(e) {
        e.preventDefault();
        let priceMin = Number(e.target.value)
        this.setState({ priceMin }, () => console.log(this.state.priceMin, 'onChangeMin'))
        if (this.state.priceMin >= this.state.priceMax) {
            let priceMin = this.state.priceMax - 1
            this.setState({ priceMin })
            alert(`Error`)
        }
    };

    handleClickMax(e) {
        e.preventDefault();
        // cambiar el estado de price default por la diferencia el precio menor y el mayor
        this.setState({ priceMax: 100 }, () => console.log(this.state.priceMax, 'onClickMax'))
    };

    handleChangeMax(e) {
        e.preventDefault();
        let priceMax = Number(e.target.value)
        this.setState({ priceMax }, () => console.log(this.state.priceMax, 'onChangeMax'))
        if (this.state.priceMax <= this.state.priceMin) {
            let priceMax = this.state.priceMin + 1
            this.setState({ priceMax })
            alert(`Error`)
        }
    };

    render() {
        return (
            <Sidebar2Component handleChangeMin={this.handleChangeMin} priceMin={this.state.priceMin} handleClickMin={this.handleClickMin} priceMax={this.state.priceMax} handleChangeMax={this.handleChangeMax} handleClickMax={this.handleClickMax} />
        );
    };
};

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
)(SidebarContainer)