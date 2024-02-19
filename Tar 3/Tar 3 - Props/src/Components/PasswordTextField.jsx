import { TextField } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from "react";
import useValide from "../Hooks/useValide";

export default function PasswordTextField({ sendPass, isConfirm }) {

  const [passValue, passError, passText, setPass] = useValide('password');


  useEffect(() => {
    let lastUser = JSON.parse(localStorage.getItem('last user'));
    let rememberUser = lastUser == null ? { userName: "", password: "" } : lastUser;
    setPass(rememberUser['password']);
  }, [])

  const [eye, setEye] = useState(true);

  const chgEye = () => {
    setEye(!eye);
  }

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type={eye ? "password" : "text"}
      autoComplete="current-password"
      value={passValue}
      onChange={(e) => { setPass(e.target.value); sendPass(e.target.value) }}
      error={passError}
      helperText={ passText}
      InputProps={{
        endAdornment: (<InputAdornment position="end">
          <IconButton onClick={chgEye}>
            {!eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </InputAdornment>)
      }}
    />
  )
}
