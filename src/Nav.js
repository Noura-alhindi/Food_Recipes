import React, { Component } from 'react'
import './Nav.css'
import {Button} from 'react-bootstrap'

export default class Nav extends Component {
state ={}
    handleChange=e=>{
this.setState({value: e.target.value})
    }

    submit=()=>{

        this.props.search(this.state.value)
    }
    render() {
        return (
        <div>
            <nav className="title">
            </nav>
            <div className="searchingBar">
                <input className="searchBox" placeholder="   I Want To Make ..." onChange={this.handleChange}></input>
                <Button onClick={this.submit} className="search newBtn" > Search</Button>
            </div>
        
        </div>
        )
    }
    }
