import * as React from "react";
import List from "@mui/material/List";
import InfiniteScroll from "react-infinite-scroll-component";
import { Stack } from "@mui/material";
import { getUserData } from "../helpers/helpers";
import PostCard from "./PostCard";

export default function Feed() {
  const [items, setItems] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [index, setIndex] = React.useState(12);
  const token = getUserData("token");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts?offset=0", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        const data = await response.json();
        await setItems(data);

        return data;
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [token]);

  const fetchMoreData = async () => {
    try {
      let response = await fetch(
        `http://localhost:3000/posts?offset=${index}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      const data = await response.json();
      await setItems((prevItems) => [...prevItems, ...data]);

      data.length > 0 ? setHasMore(true) : setHasMore(false);

      setIndex((prevIndex) => prevIndex + 12);
    } catch (err) {
      console.log(err);
    }
  };

  const listPosts = items.map((post) => (
    <PostCard
      key={post.post_id}
      user_id={post.user_id}
      post_id={post.post_id}
      headline={post.headline}
      content={post.content}
      username={post.user.username}
      profileImage={post.user.profileImage}
      createdAt={post.createdAt}
      read={`read` + post.read_status}
    />
  ));

  return (
    <>
      <h2 className='pageTitle'>Feed</h2>
      <Stack sx={{ p: 2, pt: 0 }}>
        <div>
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<p>Loading...</p>}
            endMessage={<p>You&apos;ve seen all the posts!</p>}
            refreshFunction={() => this.fetchData()}
            pullDownToRefresh
            pullDownToRefreshThreshold={75}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8595; Pull down to refresh
              </h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8593; Release to refresh
              </h3>
            }
          >
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              {listPosts}
            </List>
          </InfiniteScroll>
        </div>
      </Stack>
    </>
  );
}
