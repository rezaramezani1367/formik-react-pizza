import React from "react";
import { Card, Button } from "react-bootstrap";

function Summary({formik}) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="image/download.jpg" />
        <Card.Body>
          <Card.Title>JSON</Card.Title>
          <>
            <pre className="bg-secondary text-white">
              {JSON.stringify(formik.values,null,2)}
            </pre>
          </>
        </Card.Body>
        <div className="text-center my-3">
          <Button variant="dark" className="me-2" type="reset"  text="clear all" onClick={() => formik.resetForm()}>Reset</Button>
          <Button variant="danger" type="submit">Place Order</Button>
        </div>
      </Card>
    </div>
  );
}

export default Summary;
