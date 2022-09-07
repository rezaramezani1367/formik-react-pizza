import { ErrorMessage } from "formik";
import React from "react";
import {
  Button,
  Nav,
  Card,
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Alert,
} from "react-bootstrap";

function Order({ formik }) {
  const size = [
    {
      label: "Small",
      description: "10''",
      value: "small",
    },
    {
      label: "Medium",
      description: "12''",
      value: "medium",
    },
    {
      label: "Large",
      description: "14''",
      value: "large",
    },
    {
      label: "X-Large",
      description: "16''",
      value: "xlarge",
    },
  ];

  const crust = [
    {
      label: "BROOKLYN STYLE",
      description: "Hand stretched to be big, thin and perfectly foldable.",
      value: "brooklynstyle",
    },
    {
      label: "HAND TOSSED",
      description: "Garlic-seasoned crust with a rich, buttery taste.",
      value: "handtossed",
    },
    {
      label: "CRUNCHY THIN CRUST",
      description:
        "Thin enough for the optimum crispy to crunchy ratio and square cut to be perfectly sharable.",
      value: "crunchythincrust",
    },
  ];
  const meat = [
    {
      label: "Beef",
      value: "beef",
    },
    {
      label: "Salami",
      value: "salami",
    },
    {
      label: "Pepperoni",
      value: "pepperoni",
    },
    {
      label: "Italian Sausage",
      value: "Italiansausage",
    },
    {
      label: "Premium Chicken",
      value: "Premiumchicken",
    },
  ];
  const nonmeat = [
    {
      label: "Hot Buffalo Sauce",
      value: "hotbuffalosauce",
    },
    {
      label: "Jalapeno Peppers",
      value: "jalapenopeppers",
    },
    {
      label: "Onions",
      value: "onions",
    },
    {
      label: "Banana Peppers",
      value: "bananapeppers",
    },
    {
      label: "Diced Tomatoes",
      value: "dicedtomatoes",
    },
  ];
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Size & Crust </Card.Title>
          <Card.Text>
            <Form.Group className="my-3">
              <Row className="gy-3">
                {/* size */}

                {size.map((item, index) => (
                  <Col md={3} key={item.label + index}>
                    <Form.Check
                      type="radio"
                      label={item.label}
                      value={item.value}
                      id={item.label}
                      name="size"
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.size && formik.touched.size}
                    />
                  </Col>
                ))}
                {formik.errors.size && formik.touched.size && (
                  <Alert variant="danger"> {formik.errors.size}</Alert>
                )}
              </Row>
              <hr />
              <Row className="gy-3">
                {crust.map((item, index) => (
                  <Col md={4} key={item.label + index}>
                    <Form.Check
                      type="radio"
                      label={item.label}
                      value={item.value}
                      id={item.label}
                      name="crust"
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.crust && formik.touched.crust}
                    />
                  </Col>
                ))}
                {formik.errors.crust && formik.touched.crust && (
                  <Alert variant="danger"> {formik.errors.crust}</Alert>
                )}
              </Row>
            </Form.Group>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      {/* cheese && sauce */}
      <Card className="my-3">
        <Card.Body>
          <Row>
            <Col md={6}>
              <Card.Title className="d-flex">
                cheese
                <Form.Check
                  type="checkbox"
                  id={`cheese`}
                  name="cheese.includes"
                  onChange={formik.handleChange}
                  className="ms-2"
                />
              </Card.Title>
              {formik.values.cheese.includes ? (
                <Form.Select
                  aria-label="Default select example"
                  name="cheese.values"
                  onChange={formik.handleChange}
                >
                  <option value="Normal">Normal</option>
                  <option value="Light">Light</option>
                  <option value="Extra">Extra</option>
                </Form.Select>
              ) : (
                ""
              )}
            </Col>
            <Col md={6}>
              <Card.Title className="d-flex">
                sauce
                <Form.Check
                  type="checkbox"
                  name="sauce.includes"
                  onChange={formik.handleChange}
                  className="ms-2"
                />{" "}
              </Card.Title>
              {formik.values.sauce.includes ? (
                <Form.Select
                  aria-label="Default select example"
                  name="sauce.values"
                  onChange={formik.handleChange}
                >
                  <option value="tomato">tomato sauce</option>
                  <option value="france">france sauce</option>
                </Form.Select>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* Topping */}
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Topping - Meat</Card.Title>
          <Row className="gy-2 mt-3">
            {meat.map((item, index) => (
              <Col>
                <Form.Check
                  type="checkbox"
                  id={item.label}
                  label={item.label}
                  name="toppingMeat"
                  value={item.value}
                  onChange={formik.handleChange}
                ></Form.Check>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      {/* Non Topping */}
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Non Topping - Meat</Card.Title>
          <Row className="gy-2 mt-3">
            {nonmeat.map((item, index) => (
              <Col>
                <Form.Check
                  type="checkbox"
                  id={item.label}
                  label={item.label}
                  name="toppingNonMeat"
                  value={item.value}
                  onChange={formik.handleChange}
                ></Form.Check>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      {/* special instrution */}
      <Card className="my-3">
        <Card.Body>
          <Card.Title className="mb-3">Special Instruction </Card.Title>
          <Form.Control
            as="textarea"
            name="specialInstruction"
            value={formik.values.specialInstruction}
            onChange={formik.handleChange}
            style={{ height: "100px" }}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default Order;
