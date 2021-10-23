import React from 'react'
import Data from '../Data.json'

import { Link } from 'react-router-dom'
import { Card ,Carousel,Button,Row,Col,CardGroup} from 'react-bootstrap'
import './home.css'
import { Footer } from '../../Footer/footer'
export const Home = () => { 
    return (
        <div>
            <section>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h"
      src="image/sofa.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <Button><Link to={'/shope'}> read more </Link>
        </Button>
      </Carousel.Caption>
       </Carousel.Item>
      <Carousel.Item>
    <img
      className="d-block w-100 h"
      src="image/oppo.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button><Link to={'/shope'}>read more</Link></Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h"
      src="image/girls.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <Button><Link to={'/shope'}> read more </Link></Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</section>
<section>
  <h3 className="w">Top fashion collection</h3>
  </section>
  <section>
     <CardGroup> 
           <Row>
            {
           Data.Categories.map((post)=>(
            <Col lg={3} md={3} sm={6} className="com">
          <Card className="card">  
           <Card.Img variant="top" src={post.categories_image} className="img"/>
           <Card.Body>
             <Card.Title>{post.name}</Card.Title>  
             <Button variant="dark" className="var">  
             <Link to={'/shope'}> read more</Link>
               </Button>{' '}
            </Card.Body> 
             </Card> 
             </Col>

             )
             )
}
</Row>
</CardGroup>
</section>

<Footer></Footer>

        </div>
    )
}
