import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function NewPost() {
  return (
    <Stack sx={{ p: 2 }}>
      <h2 className='pageTitle'>Edit Profile</h2>
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { width: 1 },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          fullWidth
          label='Name'
          margin='normal'
          variant='filled'
        ></TextField>
        <TextField
          variant='filled'
          fullWidth
          label='Department'
          margin='normal'
        ></TextField>
        <TextField
          variant='filled'
          fullWidth
          label='Location'
          margin='normal'
        ></TextField>
        <TextField
          variant='filled'
          fullWidth
          label='Bio'
          multiline
          rows={4}
          margin='normal'
        ></TextField>
        <Stack>
          <Button variant='contained' color='primary' sx={{ my: 2 }}>
            Submit
          </Button>
          <Button variant='contained' color='error' sx={{ my: 2 }}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
