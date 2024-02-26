import { useEffect, useState } from "react";

import { IconButton,TextField, InputAdornment} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import useValide from "../Hooks/useValide";

export default function PasswordTextField({ formToCheck, isConfirm = false, initialValue }) {

  const [passValue, passError, passText, setPass] = useValide('password');

  const [confirm, setConfirm] = useState(true);

  // insert password of last user who checked remember
  useEffect(() => {
    if (initialValue!==undefined) {
      setPass(initialValue);
    }
  }, [initialValue])

  // handle the match of password and confirm password
  const handleConfirm = (e) => {
    setPass(e.target.value);

    if (isConfirm) {
      let password = new FormData(formToCheck.current).get('password');
      setConfirm(e.target.value === password);
    }
  }

  // visability of password
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
