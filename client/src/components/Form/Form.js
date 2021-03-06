import useStyles from './styles';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/post';

const Form = ({ currentId, setCurrentId }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const classes = useStyles();
  const [postData, setPostData] = useState({ creator: user?.result.name, email: user?.result.email, title: '', content: '', tags: '', selectedFile: '', address: ''});
  const post = useSelector((state) => (currentId ? state.posts.find((content) => content._id === currentId) : null));
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    await dispatch(createPost(postData));
    // await (currentId) ? dispatch(createPost(postData)) : dispatch(updatePost(currentId, postData));
    clear();
  }

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', email: '', title: '', content: '', tags: '', selectedFile: '', address: ''});
    setIsPending(false);
  };

    return ( <Paper className={classes.paper}>
        <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6" color="secondary" className={classes.header}> Create a Compliant Report </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                disabled
                fullWidth
                id="firstName"
                label={postData.creator}
                value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                disabled
                fullWidth
                id="email"
                label={postData.email}
                name="email"
                value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })}
                autoComplete="email"
              />
            </Grid>
        <TextField name="title" required variant="outlined" label="Title" fullWidth autoFocus autoComplete="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="address" required variant="outlined" label="Address" fullWidth autoComplete="address" value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value })} />
        <TextField name="message" required variant="outlined" label="Describe problem or reason for Complaint" fullWidth multiline rows={6} value={postData.content} onChange={(e) => setPostData({ ...postData, content: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Labels (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" disabled={isPending} type="submit" fullWidth>{ (isPending) ? 'Submitting..' : 'Submit'}</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </Grid>
        </form>
    </Paper>);
}

export default Form;