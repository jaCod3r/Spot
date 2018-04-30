import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
// import Header from './header';
class Vade extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Card>
          <CardImg src="http://www.misucell.com/data/out/6/IMG_117203.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>User Name</CardTitle>
            <CardText />
            Type: Sedan
            <CardText />Color: Dark Blue
            <CardText />
            Brand: Honda
          </CardBody>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card>
      </div>
    );
  }
}

export default Vade;
