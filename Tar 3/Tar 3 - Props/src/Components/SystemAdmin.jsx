import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// function createData(name, calories, fat, carbs,protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function SystemAdmin() {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('users') !== null) {
            setRows(JSON.parse(localStorage.getItem('users')));
        }

        //   return () => {
        //     second
        //   }
    }, []);


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell align="right">Full Name</TableCell>
                        <TableCell align="right">Date Of Birth</TableCell>
                        <TableCell align="right">Addresss</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.userName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row"> {row.userName}</TableCell>
                            <TableCell align="right">{row.firstName + " " + row.lastName}</TableCell>
                            <TableCell align="right">{row.dateOB}</TableCell>
                            <TableCell align="right">{row.city + " " + row.street + " " + row.houseNumber}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right"><Link to={"/update/" + row.email} ><ModeEditIcon></ModeEditIcon></Link></TableCell>
                            <TableCell align="right"><ClearIcon></ClearIcon></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
