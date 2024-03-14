import React from "react";

const clickMe = () => alert("I was clicked!");
const handleKeyPress = (e)=> {
    if (e.key != "Enter") return;
    const message = "The Enter key was pressed, your input is:" + e.target.value;
    alert(message);
}

export class Events extends React.Component{
    toggleButton = ()=>{this.setState ({isToggledOn: !this.state.isToggledOn})};
    constructor(props){
        super(props);
        this.state = {isToggledOn: true}
    }
    render(){
        // const buttonMessage = ;
        return(<>
            <p>Hello from Event components!</p>
            <button onClick={clickMe}>DO YOU WANT TO PUSH ME?!</button>
            <input type="text" onKeyDown={handleKeyPress}/>
            <button onClick={this.toggleButton}>{this.state.isToggledOn ? "ON" : "OFF"}</button>
        </>);
    }
}