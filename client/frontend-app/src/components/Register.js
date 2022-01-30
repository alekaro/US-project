import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState("");

  const createUser = useCallback(
    async event => {
      await axios.post("/api/user/add", {
        value
      })
    }
  )

  useEffect(() => {
    getAllNumbers();
  }, []);

  return (
    <div>
      <button onClick={getAllNumbers}>Get all numbers</button>
      <br />
      <span className="title">Values</span>
      <div className="values">
        {values.map(value => (
          <div className="value">{value}</div>
        ))}
      </div>
      <form className="form" onSubmit={saveNumber}>
        <label>Enter your value: </label>
        <input
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
