import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Menu } from 'semantic-ui-react';

import { selectStep } from '../../actions/steps-menu';

const styles = {
    default: {
        position: 'absolute',
        top: '25%',
        left: 0,
        borderRadius: '0 5px 5px 0',
        boxShadow: '0px 0px 5px 0px rgba(175, 175, 175, 0.004)'
    }
};

export class StepMenuPopup extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            open: true
        }        

        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.setState({
            open: this.props.stepsMenuOpened
        });
    }

    handleSelect(id){
        const { selectStep, activeStep } = this.props;
        if(activeStep === id) return;
        selectStep(id);
    }

    render(){

        const { stepsMenuOpened, steps, activeStep } = this.props;

        const stepList = steps.map(({ id, name }) => (
            <Menu.Item key={id} active={id === activeStep} name={name} onClick={e => this.handleSelect(id)}/>
        ));

        return (
             <Menu pointing vertical 
                style={styles.default}
                className={`animated ${stepsMenuOpened ? 'slideInLeft' : 'slideOutLeft'}`}
                size='mini'>

                { stepList }
                
            </Menu>
        );
    }
}

const mapStateToProps = ({ stepsMenuOpened, steps, activeStep }) => ({
    stepsMenuOpened,
    steps,
    activeStep
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        selectStep
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(StepMenuPopup));