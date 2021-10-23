import React from 'react'
import {Link} from 'react-router-dom'
import TopicData from '../Categories.json'
import { Card,CardGroup,Button,Row, Col } from 'react-bootstrap'
import './sub_categories.css'
export const Sub_categories = ({match}) => {

    const sValue = TopicData.Categories.find((data)=> data.categories_name===match.params.name)
    console.log("value is:",sValue)
    return (
        <div className="d"> 
         <CardGroup> 
           <Row>
         {
         sValue.sub_categories.map((category)=>(
           <Col lg={3} md={3} sm={4} className="com">
           <Card className="card">
            
           <Card.Img variant="top" src={category.s_image1} className="img"/>
           <Card.Body>
             <Card.Title>{category.s_name}</Card.Title> 
             <Card.Title>{category.s_price}/-</Card.Title>
             <Card.Title>{category.s_description}</Card.Title>
             <Button variant="blue" className="var">
               <Link to={`/details/${match.params.name}/${category.s_id}`} className="butn"> Details </Link>
               </Button>{' '}
             
         </Card.Body>
         
       </Card> 
       </Col>
             )
             )
}
</Row>
       </CardGroup> 
        </div>
    )
}
