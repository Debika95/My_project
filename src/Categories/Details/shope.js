import React from 'react'
import topData from '../Categories.json'
import {Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const Shope = () => {
    return (
        <>
            <div>
            <Row>
         
      {
          topData.Categories.map((value)=>(
            <Col lg={6} md={6} sm={12} className="clm">
            
              <Link to={`/subcat/${value.categories_name}`}> <img src={value.categories_image} className="i"/>

   <h>{value.categories_name} </h>             
    </Link>
      
              
          
          
       </Col>
             
    ))
      }
      </Row>
      </div>
        </>
    )
}
