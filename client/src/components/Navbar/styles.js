import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    display: 'flex',
    flexDirection: 'column',
  },
  dashboard: {
      position: 'relative',
      left: '800px',
      padding: '10px',
      '&:hover': {
      },
  },
  link: {
    paddingLeft: '20px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  title: {
    marginLeft: '15px',
  }
}));
