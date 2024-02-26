
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UsersContext } from './UsersContextProvider';

import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ClearIcon from '@mui/icons-material/Clear';




export default function SystemAdmin() {

    //get data from context
    const { usersList, deleteUser, logOutUser } = useContext(UsersContext);

    const navigate = useNavigate();

    const logOut = () => {
        logOutUser();
        navigate('/');
    }

    return (<>
        <TableContainer component={Paper} elevation={6} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ '& *': { fontSize: '1.1rem', fontWeight: 'bold' } }} >
                        <TableCell></TableCell>
                        <TableCell >User Name</TableCell>
                        <TableCell >Full Name</TableCell>
                        <TableCell >Date Of Birth</TableCell>
                        <TableCell >Addresss</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell ></TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {usersList.map((row) => (
                        <TableRow
                            key={row.userName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell scope="row"><Avatar alt={row.userName} src={row.image} /></TableCell>
                            <TableCell scope="row"> {row.userName}</TableCell>
                            <TableCell >{row.firstName + " " + row.lastName}</TableCell>
                            <TableCell >{row.dateOB}</TableCell>
                            <TableCell >{row.city + " " + row.street + " " + row.houseNumber}</TableCell>
                            <TableCell >{row.email}</TableCell>
                            <TableCell ><Link to={"/update/" + row.email} ><ModeEditIcon color='secondary'></ModeEditIcon></Link></TableCell>
                            <TableCell onClick={() => deleteUser(row.email)}><ClearIcon color='error'></ClearIcon></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Button sx={{ my: 2 }} variant='contained' color='error' onClick={logOut}>Log-out</Button>

    </>
    );
}

