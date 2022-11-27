import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CatagorySingle = ({ catagory }) => {
  const navigate = useNavigate();
  const { id, name } = catagory;
  return (
    <div className="col ">
      <Card className="bg-dark text-white d-flex text-center">
        <Card.Img
          src="https://img.freepik.com/free-photo/books-assortment-with-dark-background_23-2148898297.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title className="fs-3 mt-4 text-uppercase">{name}</Card.Title>
          <Button
            variant="light"
            className="mt-3"
            onClick={() => navigate(`/catagories/${id}`)}
          >
            Explore This Catagory
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default CatagorySingle;
