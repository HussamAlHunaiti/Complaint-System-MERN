import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import moment from 'moment';

const PostDetails = () => {
    const posts = useSelector((state) => state.posts);
    const { id } = useParams();
    const post = posts.find((post) => post._id === id);
    console.log(`Here is the post`);
    console.log(post);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid item lg={12} sm={7}>
                <Typography variant="h3">{post.title}</Typography>
                <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                <div> { post.content } </div>
            </Grid>
        ));
}

export default PostDetails;