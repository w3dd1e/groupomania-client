import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function NewPost() {
  return (
    <Stack sx={{ p: 2 }}>
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { width: 1 },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField required fullWidth label='Title' margin='normal'></TextField>
        <TextField
          required
          fullWidth
          label='Body'
          multiline
          rows={4}
          margin='normal'
        ></TextField>
        <Button>Submit</Button>
      </Box>
    </Stack>
  );
}
