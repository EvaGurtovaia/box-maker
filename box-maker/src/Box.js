import React, { Component } from "react";

class Box extends Component {
    render() {
        return (
            <div>
                <div
                    className="Box"
                    style={{
                        height: `${this.props.height}em`,
                        width: `${this.props.width}em`,
                        backgroundColor: this.props.color,
                    }}
                ></div>
                <button>Create</button>
            </div>
        );
    }
}
export default Box;
