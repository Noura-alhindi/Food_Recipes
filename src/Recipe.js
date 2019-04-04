import React, { Component } from 'react'
import './Nav.css'
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Col} from 'react-bootstrap'


export class Recipe extends Component {
    render() {
        return (
        <div className='container'>
            <Container>
            <Row>
            <Col xs={6} md={4}>
            <div className="card">
            <img alt='' className="Pic" src={this.props.recipes.image_url}  width='300px' height='300px' />
                <div className="detail">
                <p>{this.props.recipes.title.length <20 ? `${this.props.recipes.title}`: `${this.props.recipes.title.substring(0,25)}...`}</p>
                <h6>Publisher:  <h7>{this.props.recipes.publisher}</h7></h6>
                <a href={this.props.recipes.source_url}>View Recipe</a> 
            
            </div>
            </div>
            </Col>
            
        </Row>
        </Container>
        </div>
        )
    }
    }

export default Recipe
