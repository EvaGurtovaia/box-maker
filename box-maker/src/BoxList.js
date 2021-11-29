import React, { Component } from "react";
import Box from "./Box";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { width: 10, height: 10, color: "lightblue" },
                { width: 20, height: 10, color: "pink" },
            ],
        };
    }

    render() {
        let boxes = this.state.boxes.map((box) => (
            <Box width={box.width} height={box.height} color={box.color} />
        ));
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
                    <button>Create a box !</button>
                </form>
                <div className="BoxList">{boxes}</div>
            </div>
        );
    }
}
export default BoxList;
