import { Dispatch, SetStateAction } from 'react';

import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

type Props = {
  setProductType: Dispatch<SetStateAction<string>>;
};

const ProductSearchSelect = (props: Props) => {
  const { setProductType } = props;

  const productSelection = [
    { productName: '9010/9020', unitType: 'FGFD' },
    { productName: 'GasGard XL', unitType: 'FGFD' },
    { productName: 'Suprema', unitType: 'FGFD' },
    { productName: 'Altair4X', unitType: 'Portable Instrument' },
  ];

  const returnType = (type: string) => {
    setProductType(type);
  };

  return (
    <>
      <Autocomplete
        id="search-select"
        options={productSelection}
        getOptionLabel={(productSelection) => productSelection.productName}
        getOptionSelected={(option, value) =>
          option.productName === value.productName
        }
        onInputChange={(event, value) => {
          returnType(
            productSelection.find((element) => element.productName === value)
              ?.unitType || ''
          );
        }}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Product" variant="outlined" />
        )}
      />
    </>
  );
};

export default ProductSearchSelect;
