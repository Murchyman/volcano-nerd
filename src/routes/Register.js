import React from "react";
import styles from "../styles/Login.module.css";
import useFetch from "../Hooks/useFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [RegisterOptions, setRegisterOptions] = useState();
  const [Register, setRegister] = useState();
  const [loginURL, setLoginURL] = useState();
  const [loginOptions, setLoginOptions] = useState();
  const { data: register, loading: isLoading } = useFetch(
    Register,
    RegisterOptions
  );
  const { data: login } = useFetch(loginURL, loginOptions);
  const setData = () => {
    if (Email === "" && password === "") {
      setError("Please enter your email and password");
      return;
    }
    setRegister(`http://sefdb02.qut.edu.au:3001/user/register`);
    setRegisterOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Email,
        password: password,
      }),
    });

    setLoginURL(`http://sefdb02.qut.edu.au:3001/user/login`);
    setLoginOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Email,
        password: password,
      }),
    });
  };

  useEffect(() => {
    if (register?.error) {
      setError(register.message);
      return;
    }
  }, [register]);

  useEffect(() => {
    if (login?.error) {
      setError(login.message);
      return;
    }
    if (login) {
      sessionStorage.setItem("jwt", login.token);
      window.location.href = "/";
    }
  }, [login]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.signInPage}>
          <Paper elevation={3}>
            <div className={styles.signInForm}>
              <div>
                <h3>Create your account</h3>
                <p>Use a unique username and password</p>
              </div>

              <br />
              <div>
                <TextField
                  fullWidth
                  error={error !== ""}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  error={error !== ""}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                />
                <br />
                <p className={styles.error}>{error}</p>
              </div>

              <div className={styles.buttons}>
                <Button>
                  <Link to="/Login">Sign in instead</Link>
                </Button>{" "}
                <LoadingButton
                  loading={isLoading}
                  onClick={() => {
                    setData();
                  }}
                  variant="contained"
                >
                  Register
                </LoadingButton>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default Register;
