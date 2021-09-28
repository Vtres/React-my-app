import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { MdMenu } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import './../assets/css/libraryCard.css';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '200px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div className="row pb-3 justify-content-center box-library">
      <div className="m-2 p-0 col-12 col-md-4 col-sm-6 borda">
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <BiDotsVerticalRounded />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          component='img'
          image={`${process.env.PUBLIC_URL}/image/capa.jpg`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Descricao do card bem aleatorio pra ver como fica se ficar mt grande, espero q nao quebre o layout, pf GOD
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <MdMenu />
          </IconButton>
          <IconButton aria-label="share">
            <MdMenu />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      {/* 2 */}
      <div className="m-2 p-0 col-12 col-md-4 col-sm-6 borda">
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <BiDotsVerticalRounded />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          component='img'
          image={`${process.env.PUBLIC_URL}/image/capa.jpg`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
      
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <MdMenu />
          </IconButton>
          <IconButton aria-label="share">
            <MdMenu />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      {/* 3 */}
      <div className="m-2 p-0 col-12 col-md-4 col-sm-6 borda">
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <BiDotsVerticalRounded />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          component='img'
          image={`${process.env.PUBLIC_URL}/image/capa.jpg`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Descricao
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <MdMenu />
          </IconButton>
          <IconButton aria-label="share">
            <MdMenu />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      {/* 4 */}
      <div className="m-2 col-12 col-md-4 col-sm-6 borda">
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <BiDotsVerticalRounded />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          component='img'
          image={`${process.env.PUBLIC_URL}/image/capa.jpg`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Descricao
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <MdMenu />
          </IconButton>
          <IconButton aria-label="share">
            <MdMenu />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      {/* 5 +  */}
      <div className="m-2 p-0 col-12 col-md-4 col-sm-6 borda">
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <BiDotsVerticalRounded />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          component='img'
          image={`${process.env.PUBLIC_URL}/image/capa.jpg`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Descricao
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <MdMenu />
          </IconButton>
          <IconButton aria-label="share">
            <MdMenu />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      {/* 2 */}
      <div className="m-2 p-0 col-12 col-md-4 col-sm-6 borda">
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <BiDotsVerticalRounded />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          component='img'
          image={`${process.env.PUBLIC_URL}/image/capa.jpg`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Descricao
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <MdMenu />
          </IconButton>
          <IconButton aria-label="share">
            <MdMenu />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      {/* 3 */}
      <div className="m-2 p-0 col-12 col-md-4 col-sm-6 borda">
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <BiDotsVerticalRounded />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          component='img'
          image={`${process.env.PUBLIC_URL}/image/capa.jpg`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Descricao
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <MdMenu />
          </IconButton>
          <IconButton aria-label="share">
            <MdMenu />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      {/* 4 */}
      <div className="m-2 col-12 col-md-4 col-sm-6 borda">
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <BiDotsVerticalRounded />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          component='img'
          image={`${process.env.PUBLIC_URL}/image/capa.jpg`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Descricao
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <MdMenu />
          </IconButton>
          <IconButton aria-label="share">
            <MdMenu />
          </IconButton>
        </CardActions>
      </Card>
      </div>
    </div>
  );
}
