import React, { Component } from 'react';
import Button from './Button';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            item: '',
        };
        this.state = this.initialState;


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        });
    }

    handleClick = () => {
        if (this.state.item) {
            this.props.handelSubmit(this.state.item);
            this.setState(this.initialState);
        }
    }


    render() {
        const { item } = this.state;
        return (
            <div className="ui left aligned container">
                <div
                    class="ui labeled input"
                >
                    <div
                        class="ui label label">
                        Add Item
                        </div>
                    <input
                        className="ui focus input"
                        type="text"
                        placeholder='Add todo Item'
                        value={item}
                        onChange={this.handleChange}
                        onKeyPress= {event => {
                            if (event.key === "Enter") {
                                this.handleClick();
                            }
                          }}
                    >
                    </input>
                </div>
                <Button 
                    className="ui primary button"
                    onClick={this.handleClick}
                    text="Add"
                >
                </Button>
                
            </div>
        );
    }
}
