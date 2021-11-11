import "./styles.css";
import { Form, FormElement, VRules } from "sard-form";

export default function App() {
  const wrapper = {
    in: "div",
    className: "form-group"
  };
  return (
    <div className="App">
      <img src="./sard-form-logo.png" alt="logo" />
      <h1>v1.1.8</h1>
      <h2>Writing form the declarative way</h2>
      <h2>Examples:</h2>
      <Form>
        <FormElement
          type="text"
          name="firstname"
          id="firstname"
          className="form-control"
          label="First Name"
          wrap={wrapper}
        />
        <FormElement
          type="text"
          name="lastname"
          id="lastname"
          className="form-control"
          label="Last Name"
          wrap={wrapper}
        />
        <FormElement type="submit" value="Submit" className="btn" />
      </Form>
    </div>
  );
}
