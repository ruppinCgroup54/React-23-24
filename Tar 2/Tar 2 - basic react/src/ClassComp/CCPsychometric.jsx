import { Component } from "react";
import { render } from "react-dom";

export default class CCPsychometric extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible1: "none",
            visible2: "none",
            visible3: "none",
            accepted: "", 
            color: ""
        }
    }

    redPshow = (e) => {
        switch (e.target.id) {
            case "pn":
                this.setState({ visible1: "block" });
                break;
            case "ln":
                this.setState({ visible2: "block" });
                break;
            case "pg":
                this.setState({ visible3: "block" });
                break;
        }
    }

    redPhide = (e) => {
        switch (e.target.id) {
            case "pn":
                this.setState({ visible1: "none" });
                break;
            case "ln":
                this.setState({ visible2: "none" });
                break;
            case "pg":
                this.setState({ visible3: "none" });
                if (e.target.value>555) {
                    this.setState({ accepted: "You can be accepted for studies." });
                    this.setState({color: "green"});
                }
                else{
                    if (e.target.value!= "") {
                        this.setState({ accepted: "You should try next year." });
                        this.setState({color: "red"});
                    }
                }
                break;
        }
    }

    render() {
        return (
            <form style={{border: '3px solid black', padding: '5px', borderRadius: '10px', backgroundColor: '#E6E6FA'}}>
                <h4 style={{fontSize: '25px', margin: '0'}}>Psychometric Form</h4>
                <p style={{ color: 'red', display: this.state.visible1 }} >Please set your Private name</p>
                Private name: <input type="text" id="pn" onFocus={this.redPshow} onBlur={this.redPhide} /><br />
                <p style={{ color: 'red', display: this.state.visible2 }} id="p">Please set your last name</p>
                Last name: <input type="text" id="ln" onFocus={this.redPshow} onBlur={this.redPhide} /><br />
                <p style={{ color: 'red', display: this.state.visible3 }} id="p">Please set your Psychometric grade</p>
                Psychometric grade: <input type="text" id="pg" onFocus={this.redPshow} onBlur={this.redPhide} /><br />
                <b style={{color: this.state.color}}>{this.state.accepted}</b>
            </form>
        );
    }
}