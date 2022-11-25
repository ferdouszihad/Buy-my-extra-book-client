import React from "react";
import { Button, Card } from "react-bootstrap";
import Title from "../shared/Title";

const Catagories = () => {
  return (
    <section className="py-5">
      <Title>Choose Products By Catagory</Title>
      <div className="container catagory-container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
          <div className="col ">
            <Card className="bg-dark text-white">
              <Card.Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bcyYl9dcScru_JnzqLLQqXYK-X-WiKoPAA&usqp=CAU"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Academic Books</Card.Title>
                <Card.Text>
                  University , School,College academic Books and guides
                </Card.Text>
                <Button variant="outline-light">Explore This Catagory</Button>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col ">
            <Card className="bg-dark text-white">
              <Card.Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bcyYl9dcScru_JnzqLLQqXYK-X-WiKoPAA&usqp=CAU"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Academic Books</Card.Title>
                <Card.Text>
                  University , School,College academic Books and guides
                </Card.Text>
                <Button variant="outline-light">Explore This Catagory</Button>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col ">
            <Card className="bg-dark text-white">
              <Card.Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bcyYl9dcScru_JnzqLLQqXYK-X-WiKoPAA&usqp=CAU"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Academic Books</Card.Title>
                <Card.Text>
                  University , School,College academic Books and guides
                </Card.Text>
                <Button variant="outline-light">Explore This Catagory</Button>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col ">
            <Card className="bg-dark text-white">
              <Card.Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bcyYl9dcScru_JnzqLLQqXYK-X-WiKoPAA&usqp=CAU"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Academic Books</Card.Title>
                <Card.Text>
                  University , School,College academic Books and guides
                </Card.Text>
                <Button variant="outline-light">Explore This Catagory</Button>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catagories;
