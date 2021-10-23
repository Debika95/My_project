import React from 'react'
import TopicData from '../Categories.json'
import {Card} from 'react-bootstrap'
import './details.css' 
export const Details = ({match})=> {
  const categoryName = TopicData.Categories.find((data)=> data.categories_name===match.params.name)
  console.log("category name:",categoryName)
  const ctgDetails = categoryName.sub_categories.find((data)=> data.s_id===match.params.id)
  console.log("topic details",ctgDetails)
    return (
        <div className="c">
            <Card style={{ width: '18rem' }} className="c">
             <Card.Img variant="top" src={ctgDetails.s_image1}  />
             <Card.Body>
             <Card.Title>{ctgDetails.s_name}</Card.Title>
             <Card.Title>{ctgDetails.s_price}/-</Card.Title>
              <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </Card.Text>
             </Card.Body>
             </Card>
        </div>
    )
}
