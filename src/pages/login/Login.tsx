import React, { FC, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { AxiosInstance } from "../../common/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../../common/Alert";

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  function login() {
    if (name.trim().length <= 0 || password.trim().length <= 0) {
      alert("Please enter required informations!");
    } else {
      AxiosInstance.post("/auth/login", {
        password: password,
        name: name,
      })
        .then((response) => {
          if (!response.data.error) {
            showSuccess("Success");
            // setIsLoading(false);
            // sessionStorage.setItem("my_token", response.data.access_token);
            // sessionStorage.setItem("token", response.data.access_token);
            navigate("/");
          }
        })
        .catch((err) => {
          showError(err.toString());
          //   setIsLoading(false);
        });
    }
  }

  return (
    <div>
      <Box
        sx={{
          background: "gray",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2}>
          <TextField
            sx={{ width: 500 }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button sx={{ height: 45 }} variant="contained" onClick={login}>
            Login
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
