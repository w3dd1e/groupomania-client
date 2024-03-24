import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Form, redirect } from "react-router-dom";
import { getUserData } from "../helpers/helpers";

export const action = async () => {
  const data = await new FormData(document.querySelector("form"));
  const token = getUserData("token");
  let invalidDiv = document.getElementById("errorDiv");

  //Convert FormData to JSON
  const formDataObj = {};
  data.forEach((value, key) => (formDataObj[key] = value));
  const json = JSON.stringify(formDataObj);
  //Fetch Login

  try {
    const response = await fetch(`http://localhost:3000/posts/`, {
      method: "POST",
      body: json,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      invalidDiv.innerHTML =
        "<p>There was an error.  Your request was not processed.  Please try again later. </p>";
      throw new Error(response.status);
    }
    const responseJson = await response.json();
    const postId = responseJson.postId;
    return redirect(`/post/${postId}`);
  } catch (error) {
    console.log("There was a problem with the fetch operation.", error);
  }
  return null;
};

export default function NewPost() {
  return (
    <Stack sx={{ p: 2 }}>
      <h2 className='pageTitle'>New Post</h2>
      <Box
        component={Form}
        method='post'
        sx={{
          "& .MuiTextField-root": { width: 1 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          required
          fullWidth
          id='title'
          label='Title'
          margin='normal'
          name='headline'
          variant='filled'
        ></TextField>
        <TextField
          variant='filled'
          required
          fullWidth
          id='body'
          label='Body'
          name='content'
          multiline
          rows={4}
          margin='normal'
        ></TextField>
        <Stack direction='column' flex={1} sx={{ width: 0.5, m: 1 }}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ my: 2 }}
            size='small'
          >
            Submit
          </Button>
          <Button
            type='reset'
            size='small'
            variant='contained'
            color='error'
            sx={{ my: 2 }}
          >
            Reset
          </Button>
          <div id='errorDiv'></div>
        </Stack>
      </Box>
    </Stack>
  );
}
