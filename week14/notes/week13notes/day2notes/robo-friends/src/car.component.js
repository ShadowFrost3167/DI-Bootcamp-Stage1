import React from "react";
import { Garage } from "./garage.component";
const carinfo = {name: "Ford", model: "Mustang"};


export class Car extends React.Component {

    constructor(){
       super();
       this.state = {color:"green"}
    }

    render (){
        return <>
        <header>This car is a {carinfo.model}</header>
        <h1>This car is a {this.state.color} 
        {carinfo.model}</h1>;
        <p>Garage Component:</p>
        <Garage size="small"/>
        
        </>
    }

}