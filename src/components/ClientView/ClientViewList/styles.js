import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 80,
    width:"20%"
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken',
  },
  
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom : "10px",
    boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 0px 0.5px"
  }
});
