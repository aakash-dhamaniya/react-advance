import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Home.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="albumText">
          {" "}
          <h3>Get our Latest Album</h3>
        </div>
        <div className="playIcon">
          <AiOutlinePlayCircle fontSize={"80px"}></AiOutlinePlayCircle>
        </div>
        <div className="Tours">Tours</div>
        <div className="list">
          <ListGroup className="listGroup">
            <ListGroup.Item className="listGroupItem">
              <span className="date">JUL16</span>
              <span className="name">DETROIT, MI</span>
              <span className="discription">DTE ENERGY MUSIC THEATRE</span>
              <span>
                <Button>BUT TICKETS</Button>
              </span>
            </ListGroup.Item>

            <ListGroup.Item className="listGroupItem">
              <span className="date">JUL90</span>
              <span className="name">TORONTO,ON</span>
              <span className="discription">BUDWEISER STAGE</span>
              <span>
                <Button>BUT TICKETS</Button>
              </span>
            </ListGroup.Item>

            <ListGroup.Item className="listGroupItem">
              <span className="date">JUL22</span>
              <span className="name">BRISTOW, VA</span>
              <span className="discription">JIGGY LUBE LIVE</span>
              <span>
                <Button>BUT TICKETS</Button>
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem">
              <span className="date"> JUL29</span>
              <span className="name">PHOENIX, AZ</span>
              <span className="discription">AK-CHIN PAVILION</span>
              <span>
                <Button>BUT TICKETS</Button>
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem">
              <span className="date">AUG 2</span>
              <span className="name">LAS VEGAS, NV</span>
              <span className="discription">T-MOBILE ARENA</span>
              <span>
                <Button>BUT TICKETS</Button>
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem">
              <span className="date">AUG 7</span>
              <span className="name">CONCORD, CA</span>
              <span className="discription">CONCORD PAVILION</span>
              <span>
                <Button>BUT TICKETS</Button>
              </span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default Home;
