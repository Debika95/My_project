import React from 'react'
import catData from '../Categories.json'
import { Link } from 'react-router-dom'
import './diff.css'
import { Card,Button, Row ,Col} from 'react-bootstrap'
  export const Different_categories = () => {
    return (
        <div>
          <div>
            <Row>
         
      {
          catData.Categories.map((catValue)=>(
            <Col lg={6} md={6} sm={12} className="clm">
            
              <Link to={`/subcat/${catValue.categories_name}`}> <img src={catValue.categories_image} className="i"/>

               <h6>{catValue.categories_name} </h6>             
                 </Link>
           
       </Col>
             
    ))
      }
      </Row>
      </div>
        </div>
    )
}
