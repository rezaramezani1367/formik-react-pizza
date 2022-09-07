import React from "react";
import { Card, Button } from "react-bootstrap";

function Summary({formik}) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="image/download.jpg" />
        <Card.Body>
          <Card.Title>JSON</Card.Title>
          <Card.Text>
            <pre className="bg-secondary text-white">
              {JSON.stringify(formik.values,null,2)}
            </pre>
          </Card.Text>
        </Card.Body>
        <div className="text-center my-3">
          <Button variant="danger" type="submit">Place Order</Button>
        </div>
      </Card>
    </div>
  );
}

export default Summary;
