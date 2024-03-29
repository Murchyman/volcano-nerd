import React from "react";
import styles from "../styles/Login.module.css";
import { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const SignOnForm = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fetchOptions, setFetchOptions] = useState();
  const [fetchURL, setFetchURL] = useState();
  const { data, loading: isLoading } = useFetch(fetchURL, fetchOptions);

  const setData = () => {
    if (Email === "" && password === "") {
      setError("Please enter your email and password");
      return;
    }
    setFetchURL(`http://sefdb02.qut.edu.au:3001/user/login`);
    setFetchOptions({
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
    if (data?.error) {
      setError(data.message);
      return;
    }
    if (data) {
      sessionStorage.setItem("jwt", data.token);
      window.location.href = "/";
    }
  }, [data]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.signInPage}>
          <Paper elevation={3}>
            <div className={styles.signInForm}>
              <div>
                <h3>Sign In</h3>
                <p>Use the credentials you registered with</p>
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
                  <Link to="/Register">Create Account</Link>
                </Button>{" "}
                <LoadingButton
                  loading={isLoading}
                  onClick={() => {
                    setData();
                  }}
                  variant="contained"
                >
                  Sign In
                </LoadingButton>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default SignOnForm;
