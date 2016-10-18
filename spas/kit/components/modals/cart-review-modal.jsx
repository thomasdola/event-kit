import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Button, Icon, Modal } from 'semantic-ui-react'

class CartReviewModalReact extends Component{
    constructor(props){
        super(props);

        this.state = {
            open: false
        };

        this.close = this.close.bind(this);
    }

    close(){
        this.setState({ open: false })
    }


    render(){
        return (
            <Modal size={'small'} open={this.state.open} onClose={this.onClose} className='Review__Modal'>

                <Modal.Header>
                    <div className="ui segment">
                        <div className="ui grid">
                            <div className="eight wide column">Budget: <span>&#8373; <b>18,000.00</b></span></div>
                            <div className="eight wide column right aligned">Total: <span>&#8373; <b>18,000.00</b></span></div>
                        </div>
                    </div>
                </Modal.Header>

                <Modal.Content>
                    <div className="ui segment">
                        <div className="ui divided list">
                            <div className="item">
                                <div className="ui grid">
                                    <div className="nine wide column">Also quite a lovely city</div>
                                    <div className="two wide column"></div>
                                    <div className="five wide column right aligned"><span>&#8373; <b>18,000.00</b></span></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui grid">
                                    <div className="nine wide column">Also quite a lovely city</div>
                                    <div className="two wide column"></div>
                                    <div className="five wide column right aligned"><span>&#8373; <b>18,000.00</b></span></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui grid">
                                    <div className="nine wide column">Also quite a lovely city</div>
                                    <div className="two wide column"></div>
                                    <div className="five wide column right aligned"><span>&#8373; <b>18,000.00</b></span></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui grid">
                                    <div className="nine wide column">Also quite a lovely city</div>
                                    <div className="two wide column"></div>
                                    <div className="five wide column right aligned"><span>&#8373; <b>18,000.00</b></span></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui grid">
                                    <div className="nine wide column">Also quite a lovely city</div>
                                    <div className="two wide column"></div>
                                    <div className="five wide column right aligned"><span>&#8373; <b>18,000.00</b></span></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui grid">
                                    <div className="nine wide column">Also quite a lovely city</div>
                                    <div className="two wide column"></div>
                                    <div className="five wide column right aligned"><span>&#8373; <b>18,000.00</b></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Content>

                <Modal.Actions>
                    <div className="ui mini button" onClick={this.handleClose}>
                        close
                    </div>
                    <div className="ui mini positive right button" onClick={this.handleSubmit}>
                        submit
                    </div>
                </Modal.Actions>
            </Modal>
        );
    }
}
