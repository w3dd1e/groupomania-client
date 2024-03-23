import * as React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  CardHeader,
} from "@mui/material";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function PostCard(props) {
  return (
    <>
      <ListItem
        key={props.post_id}
        alignItems='flex-start'
        sx={{ pl: 0, width: "100%" }}
      >
        <Card dense sx={{ width: "100%", p: 1 }}>
          <CardHeader
            title={
              <Link className='titleLink' to={`/post/${props.post_id}`}>
                {props.headline}
              </Link>
            }
            subheader={props.createdAt.split("T")[0]}
            subheaderTypographyProps={{ fontSize: 11 }}
            titleTypographyProps={{
              fontSize: 18,
              width: 1,
            }}
            sx={{ p: 1, width: 1, wordWrap: "anywhere" }}
            wrap
          ></CardHeader>
          <CardContent sx={{ p: 1 }}>
            <Typography noWrap variant='body2' color='text.secondary'>
              {props.content}
            </Typography>
          </CardContent>
          <CardActions sx={{ p: 0 }}>
            <Button
              component={Link}
              to={`/profile/${props.user_id}`}
              size='small'
              sx={{ display: "flex", alignItems: "center", fontSize: 11 }}
            >
              <ListItemAvatar sx={{ my: 0, mr: 1, minWidth: "fit-content" }}>
                <Avatar
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 24,
                    height: 24,
                  }}
                  lt={props.username}
                  src={props.profileImage}
                />
              </ListItemAvatar>
              {props.username}
            </Button>
          </CardActions>
        </Card>
      </ListItem>
    </>
  );
}

export default PostCard;
