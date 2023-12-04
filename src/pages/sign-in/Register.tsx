import { FC, useState } from "react";
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
import { showError, showSuccess } from "../../common/Alert";

const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState("");
  const [roleId, setRoleId] = useState<number>();
  const [password, setPassword] = useState("");

  function register() {
    AxiosInstance.post("/auth/permissions", {
      name: name,
      username: username,
      email: email,
      age: age,
      gender: gender,
      roleId: roleId,
      password: password,
    })
      .then((response) => {
        if (!response.data.error) {
          showSuccess("Successfully registered");
        }
      })
      .catch((err) => {
        showError(err + "something went wrong");
      });
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
          <TextField
            sx={{ width: 500 }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            sx={{ width: 500 }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ width: 500 }}
            id="outlined-basic"
            label="Age"
            variant="outlined"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <TextField
            sx={{ width: 500 }}
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <TextField
            sx={{ width: 500 }}
            id="outlined-basic"
            label="Role Id"
            variant="outlined"
            value={roleId}
            onChange={(e) => setRoleId(Number(e.target.value))}
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
          <Button sx={{ height: 45 }} variant="contained" onClick={register}>
            Register
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Register;
