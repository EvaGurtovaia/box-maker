import React, { Component } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { width: 10, height: 10, color: "lightblue" },
                { width: 20, height: 10, color: "pink" },
            ],
        };
        this.addBox = this.addBox.bind(this);
    }

    addBox(box) {
        this.setState(prvState => ({
          boxes: [...prvState.boxes, box]
        }));
      }

    render() {
        let boxes = this.state.boxes.map((box) => (
            <Box width={box.width} height={box.height} color={box.color} />
        ));
        return (
            <div>
                 <BoxForm />
                <div className="BoxList">{boxes}</div>
            </div>
        );
    }
}
export default BoxList;
