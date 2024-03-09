import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

export default function Post() {
  const post = {
    headline: "New Post",
    body: "This impressive paella is a perfect party dish and a fun meal to coook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdAt: "September 14, 2016",
    user: "admin",
  };

  return (
    <Container component='main' maxWidth='xs' sx={{ p: 2 }}>
      <h2 className='pageTitle'>Profile</h2>

      <Grid container justifyContent='center' spacing={3} sx={{ mt: 1 }}>
        <Grid>
          <Paper elevation={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.headline}
                subheader={post.createdAt}
              />

              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  {post.user}
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Stack direction='column' flex={1} sx={{ p: 1.5 }}>
          <Button variant='contained' color='primary' sx={{ my: 2 }}>
            Edit Post
          </Button>
          <Button variant='contained' color='error' sx={{ my: 2 }}>
            Delete Post
          </Button>
        </Stack>
      </Grid>
    </Container>
  );
}
