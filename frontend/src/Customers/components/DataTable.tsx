import { Customer } from '../customer.model';
import { Link as RouterLink } from 'react-router-dom';

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

// Table cell with custom properties
const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#d9e3fa',
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// Table row with custom properties
const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#eff3fc',
    },
  },
}))(TableRow);

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
const CustomizedTables = ({
  customerDataSet,
}: {
  customerDataSet: Customer[];
}) => {
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
          {customerDataSet.map((customer) => (
            <StyledTableRow key={customer._id}>
              <StyledTableCell component="th" scope="row">
                {customer.customerName}
              </StyledTableCell>
              <StyledTableCell>{customer.customerAddress.city}</StyledTableCell>
              <StyledTableCell>
                {customer.customerAddress.streetAddress}
              </StyledTableCell>
              <StyledTableCell>
                {customer.customerAddress.country}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to={`/customers/${customer._id}`}
                >
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
