import { Formik } from 'formik';

// M-UI imports
import { TextField } from '@material-ui/core';

// Define prop types
type Props = {
  submitHandler: Function;
};

const Altair4X = (props: Props) => {
  const { submitHandler } = props;

  return (
    <Formik
      initialValues={{
        serialNumber: '',
        maintenanceDate: '',
      }}
      onSubmit={(formData) => {
        submitHandler(formData);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            id="serialNumber"
            label="Serial Number"
            size="small"
            value={formik.values.serialNumber}
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            id="maintenanceDate"
            label="Maintenance Date"
            type="date"
            size="small"
            value={formik.values.maintenanceDate}
            onChange={formik.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      )}
    </Formik>
  );
};

export default Altair4X;
