import { TextField } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from "react";
import useValide from "../Hooks/useValide";

export default function PasswordTextField({ formToCheck, isConfirm =false }) {

  const [passValue, passError, passText, setPass] = useValide('password');

  const [confirm, setConfirm] = useState(true);


  useEffect(() => {
    let lastUser = JSON.parse(localStorage.getItem('last user'));
    let rememberUser = lastUser == null ? { userName: "", password: "" } : lastUser;
    setPass(rememberUser['password']);
  }, [])

  const handleConfirm = (e) => {

    setPass(e.target.value);


    if (isConfirm) {
    let password = new FormData(formToCheck.current).get('password');

      setConfirm(e.target.value === password);

    }
  }

  const [eye, setEye] = useState(true);

  const chgEye = () => {
    setEye(!eye);
  }

  return (
    <TextField
      required
      fullWidth
      name={isConfirm ? 'password confirm' : "password"}
      label={isConfirm ? 'Password confirm' : "Password"}
      type={eye ? "password" : "text"}
      autoComplete="current-password"
      value={passValue}
      onChange={handleConfirm}
      error={passError || !confirm}
      helperText={isConfirm && !confirm ? `Password dosn't match` : passText}
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
