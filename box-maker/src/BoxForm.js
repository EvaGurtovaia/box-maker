import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "",
            height: "",
            color: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = { ...this.state, id: uuidv4() };
        console.log(newBox);
        this.props.addBox(newBox)
        this.setState({ width: "", height: "", color: "" });
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="width">Width: </label>
                    <input
                        id="width"
                        name="width"
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="height">Height: </label>
                    <input
                        id="height"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="color">Color: </label>
                    <input
                        id="color"
                        name="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                    <button>Create a box !</button>
                </form>
            </div>
        );
    }
}
export default BoxForm;
