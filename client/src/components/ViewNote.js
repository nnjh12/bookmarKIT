import React, { Component } from "react";
import Button from "./Button"

class ViewNote extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         note: []
    //     };
    // }
    componentDidMount() {
        this.print()
    }

    print =() => {
        console.log("note print component ")
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.allNote !== prevProps.allNote) {
          console.log("update")
        }
      }

    render() {
        return (
            <>

                {/* <div className="mb-4">
                    <h3>{this.props.note}</h3>
                    <p>{this.props.date}</p>

                    {this.props.tag.map((tagEle, index) => (
                        <Button key={index}>#{tagEle}</Button>
                    ))}

                </div> */}


                {this.props.allNote.map((ele, index) => (
                    <div className="mb-4" key={ele._id}>
                        <h3>{ele.note}</h3>
                        <p>{ele.date}</p>

                        {ele.tag.map((tagEle, index) => (
                            <Button key={ele._id + "-" + index}>#{tagEle}</Button>
                        ))}

                    </div>
                ))}

            </>


        );
    }
}

export default ViewNote;
