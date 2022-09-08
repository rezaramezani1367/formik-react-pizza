import "./App.css";
import { Button, Nav, Card, Container, Form, Row, Col } from "react-bootstrap";
import Order from "./components/Order";
import Summary from "./components/Summary";
import { useFormik } from "formik";

function App() {
  const validate = (values) => {
    let errors={};
    if(!values.size){
      errors.size="Required Size";
    }
    if(!values.crust){
      errors.crust="Required crust";
    }
    if(!values.cheese.values && values.cheese.includes){
      errors.cheese="Required cheese";
    }
    if(!values.sauce.values && values.sauce.includes){
      errors.sauce="Required sauce";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      size: "",
      crust: "",
      cheese: {
        includes: false,
        values: "",
      },
      sauce: {
        includes: false,
        values: "",
      },
      toppingMeat: [],
      toppingNonMeat: [],
      specialInstruction: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values,null,2))
    },
    validate,
  });

  return (
    <div>
      <Nav activeKey="/home" className="bg-dark ">
        <Nav.Item>
          <Nav.Link href="/home" className="text-white">
            <h4>Pizza Builder Form</h4>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Container className="my-4">
        <Card className="shadow-lg p-4">
          <Form onSubmit={formik.handleSubmit} onreset={formik.handleReset}>
            <Row>
              <Col md={8}>
                <Order formik={formik} />
              </Col>
              <Col md={4}>
                <Summary formik={formik}/>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default App;
