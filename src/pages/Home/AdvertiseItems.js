import React from "react";
import { Button, Card } from "react-bootstrap";
import Title from "../shared/Title";

const AdvertiseItems = () => {
  return (
    <section className="py-5">
      <Title>Products from Our Seller</Title>
      <div className="item-container container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div className="col">
            <Card>
              <Card.Img
                variant="top"
                src="https://media.gq.com/photos/5ad64204c8be07604e8b5f2f/3:2/w_1998,h_1332,c_limit/21-books-GQ-April-2018-041718-3x2.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Img
                variant="top"
                src="https://media.gq.com/photos/5ad64204c8be07604e8b5f2f/3:2/w_1998,h_1332,c_limit/21-books-GQ-April-2018-041718-3x2.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Img
                variant="top"
                src="https://media.gq.com/photos/5ad64204c8be07604e8b5f2f/3:2/w_1998,h_1332,c_limit/21-books-GQ-April-2018-041718-3x2.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseItems;
