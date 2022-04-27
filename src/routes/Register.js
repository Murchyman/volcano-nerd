import React from "react";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const GetData = () => {
        setIsLoading(true);
        fetch(`http://sefdb02.qut.edu.au:3001/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: Email,
                password: password,
            }),
        }).then((response) => {
            console.log(response);
            if (response.ok) {
                //we sign in the user if the response is ok post registration
                //this is not very dry as it is a copy paste from the login page

                fetch(`http://sefdb02.qut.edu.au:3001/user/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: Email,
                        password: password
                    })
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                        setIsLoading(false);
                        setError("Something went wrong");
                        throw new Error('Something went wrong');
                    })
                    .then((json) => {
                        sessionStorage.setItem("jwt", json?.token);
                    })

                    .then(() => {
                        setIsLoading(false);
                    })
                    .then(() => {
                        window.location.href = "/";
                    })


                return response.json();
            }
            setIsLoading(false);
            setError("Something went wrong");
            throw new Error("Something went wrong");
        });
    };

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
                                        GetData();
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
