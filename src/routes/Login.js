import React from 'react'
import { useState } from 'react';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const SignOnForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  return (
    <>


      <style jsx>{`
      .wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .signInPage {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .error {
        color: red;
      }
      .signInForm {
        text-align: center;
        min-width: 23em;
        padding: 2em;
        justify-content: space-between;
      }
      .buttons {
        text-align: right;
        margin-top: 8vh;
      }

      img {
        max-width: 60%;
        max-height: 60%;
      }
    `}</style>

      <div className="wrapper">
        <div className="signInPage">
          <Paper elevation={3}>
            <div className="signInForm">
              <div>
                <h3>Sign In</h3>
                <p>Use your provided credentials</p>
              </div>

              <br />
              <div>
                <TextField
                  fullWidth
                  error={error !== ""}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError("");
                  }}
                  type="email"
                  name="email"
                  label="Username"
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
                <p className="error">{error}</p>
              </div>

              <div className="buttons">
                {" "}
                <Button
                  onClick={() => {
                  }}
                  variant="contained"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
}

export default SignOnForm;