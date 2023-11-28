import * as React from 'react';
import { AuthContext } from './context';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm() {
  const { logData } = React.useContext(AuthContext);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="doorno"
            label="Door / Flat no"
            type="text"
            id="doorno"
            autoComplete="doorno"
            defaultValue={logData.doorno}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="street"
            label="Street Name"
            type="text"
            id="street"
            autoComplete="street"
            defaultValue={logData.street}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="city"
            label="City / Village Name"
            type="text"
            id="city"
            autoComplete="city"
            defaultValue={logData.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="landmark"
            label="Land Mark (optional)"
            type="text"
            id="landmark"
            autoComplete="landmark"
            defaultValue={logData.landmark}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            fullWidth
            name="address1"
            label="Address Line 1"
            type="text"
            id="address1"
            autoComplete="address1"
            defaultValue={logData.address1}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            name="address2"
            label="Address Line 2"
            type="text"
            id="address2"
            autoComplete="address2"
            defaultValue={logData.address2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="mobilenumber"
            label="Mobile Number"
            type="tel"
            id="mobilenumber"
            autoComplete="mobilenumber"
            defaultValue={logData.mobilenumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="pincode"
            label="Pincode"
            type="tel"
            id="pincode"
            autoComplete="pincode"
            defaultValue={logData.pincode}
          />
        </Grid>
      </Grid>
      
    </React.Fragment>
  )
}