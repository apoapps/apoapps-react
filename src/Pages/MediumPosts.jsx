import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function MediumPosts() {

    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@apoapps')
            .then(resp => resp.json())
            .then(data => {
                setBlogs(data.items)
            })
    }, [])


    const classes = useStyles();

    return (
        <div className="container">
            <h1>My articles</h1>
            <div className="row">
                {blogs.map(blog => {
                    return <div className="col-sm-12 col-md-6 ">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <a href={blog.link}>
                                    <CardMedia
                                        className={classes.media}
                                        image={blog.thumbnail}
                                        title={blog.title}

                                    />
                                </a>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {blog.author}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href={blog.link}>
                                    Visitar artículo
                                </Button>

                            </CardActions>
                        </Card>
                    </div>
                })}
            </div >
        </div>
    );
}

export default MediumPosts;
