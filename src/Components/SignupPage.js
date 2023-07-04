import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Base from "../Base/Base"
import { Button, TextField, Typography } from "@mui/material";

const SignupPage = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        const userDetails = {
            username,
            email,
            password
        }

        const response = await fetch(`https://auth-ahqg.vercel.app/users/signup`, {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json()
        if (data.token) {
            setError("")
            localStorage.setItem("token", data.token)
            navigate("/")
        } else {
            setError(data.message)
        }
    }

    return (
        <Base>
            <TextField label="username" variant="outlined" fullWidth sx={{ m: 1 }}
                placeholder="Enter the username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                type="email"
            />
            <TextField label="email" variant="outlined" fullWidth sx={{ m: 1 }}
                placeholder="Enter the email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
            />
            <TextField label="password" variant="outlined" fullWidth sx={{ m: 1 }}
                placeholder="Enter the password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                onClick={handleLogin}
            >Signup</Button>
            {error ?
                <Typography color={"danger"}>
                    {error}
                </Typography> : ""}
        </Base>
    );
}
export default SignupPage