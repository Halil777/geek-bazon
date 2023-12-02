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

const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          />
          <TextField
            sx={{ width: 500 }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
            sx={{ width: 500 }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            sx={{ width: 500 }}
            id="outlined-basic"
            label="Age"
            variant="outlined"
          />
          <TextField
            sx={{ width: 500 }}
            id="outlined-basic"
            label="Gender"
            variant="outlined"
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
            />
          </FormControl>
          <Button sx={{ height: 45 }} variant="contained">
            Login
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Register;
