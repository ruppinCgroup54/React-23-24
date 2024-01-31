import { Component } from "react";
import "../CSSComp/CCTable.css"  

export default class CCTable extends Component{
  

    constructor(props){
        super(props);
        this.state={wid : "100%"};
    }
  

    chnWid01=()=>{
       
        this.setState({wid : "50%"});
  
    }
    chnWid02=()=>{
        this.setState({wid : "100%"})
    }
    render(){
        return(
<div>
    <table style={{borderCollapse: "collapse" , border: "2px solid black", width: this.state.wid}} onClick={this.chnWid01} onDoubleClick={this.chnWid02}>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</div>

        );
    }
}