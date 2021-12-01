import React, { Component } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
        };
        this.addBox = this.addBox.bind(this);
        this.remove = this.remove.bind(this);
    }

    addBox(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox],
        });
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter((box) => box.id !== id),
        });
    }

    render() {
        let boxes = this.state.boxes.map((box) => (
            <Box
                key={box.id}
                id={box.id}
                width={box.width}
                height={box.height}
                color={box.color}
                removeBox={this.remove}
            />
        ));
        return (
            <div>
                <BoxForm addBox={this.addBox} />
                <div className="BoxList">{boxes}</div>
            </div>
        );
    }
}
export default BoxList;
