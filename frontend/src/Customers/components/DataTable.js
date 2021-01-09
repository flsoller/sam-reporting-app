import React from 'react';

// M-UI imports
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

// Table cell with customer properties
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#d9e3fa',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// Table row with customer properties
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#eff3fc',
    },
  },
}))(TableRow);

// Dummy data creator
function createData(customerName, city, street, country) {
  return { customerName, city, street, country };
}

// Dummy data
const rows = [
  createData('Customer One', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Two', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Three', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Four', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Five', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer One', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Two', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Three', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Four', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Five', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer One', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Two', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Three', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Four', 'Berlin', 'Awesome Street 5', 'Germany'),
  createData('Customer Five', 'Berlin', 'Awesome Street 5', 'Germany'),
];

// Style definitions for M-UI
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    maxHeight: 375,
  },
});

// Component
const CustomizedTables = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table
        className={classes.table}
        stickyHeader
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer</StyledTableCell>
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell>Street</StyledTableCell>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.customerName}>
              <StyledTableCell component="th" scope="row">
                {row.customerName}
              </StyledTableCell>
              <StyledTableCell>{row.city}</StyledTableCell>
              <StyledTableCell>{row.street}</StyledTableCell>
              <StyledTableCell>{row.country}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" color="primary">
                  Details
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
