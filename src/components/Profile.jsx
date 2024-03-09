import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProfileItem = styled(ListItem)(() => ({
  padding: 0,
}));

export default function Profile() {
  const user = {
    username: "admin",
    name: "Kelly",
    department: "Asset Management",
    location: "Kansas City",
    bio: "I love movies and dogs",
  };

  return (
    <Container component='main' maxWidth='xs' sx={{ p: 2 }}>
      <h2 className='pageTitle'>Profile</h2>

      <Grid container justifyContent='center' spacing={3} sx={{ mt: 1 }}>
        <Grid item>
          <Paper elevation={6}>
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item>
                <Avatar
                  variant='rounded'
                  alt='Ducky'
                  src='../assets/Ducky.jpeg'
                  sx={{
                    m: 1,
                    width: 125,
                    height: 125,
                    bgcolor: "secondary.main",
                  }}
                />
              </Grid>
              <Grid item>
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <ProfileItem alignItems='flex-start'>
                    <Typography component='h1' variant='h5' fontWeight='bold'>
                      {user.username}
                    </Typography>{" "}
                  </ProfileItem>
                  <ProfileItem alignItems='flex-start'>
                    <ListItemText primary={user.name} />
                  </ProfileItem>
                  <ProfileItem alignItems='flex-start'>
                    <ListItemText primary={user.department} />
                  </ProfileItem>
                  <ProfileItem alignItems='flex-start'>
                    <ListItemText primary={user.location} />
                  </ProfileItem>
                </List>
              </Grid>

              <Grid item sx={{ textAlign: "center", p: 1, m: 1 }}>
                {user.bio}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Stack direction='row' spacing={3} sx={{ mt: 2 }}>
            <Button variant='outlined' size='small' xs={3} flex={1}>
              Edit Profile
            </Button>
            <Button
              variant='outlined'
              size='small'
              color='error'
              xs={3}
              flex={1}
            >
              Delete Account
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
