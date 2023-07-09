import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { url } from "../utils/backurl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ name: "", password: "" });
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${url}/users/login`, form);
      /* const res = await axios.post(`${url}/users/login`, form); */
      console.log(res);
      const loged = await getLoggedIn();
      console.log(loged ? "true" : "false");

      navigate("/");
    } catch (err) {
      alert("Login error");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center cover">
      <div className="row container ">
        <div className="col-12 col-md-6 offset-md-3 form-box p-3 ">
          <div className="mb-3 d-flex justify-content-between">
            <h2>Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <input
              className="form-control mb-3"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />

            <div className="d-flex justify-content-end">
              <Button className="btn btn-primary mb-1" type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
