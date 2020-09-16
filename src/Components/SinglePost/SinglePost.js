import React from 'react';
import './singlePost.css'
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const SinglePost = (props) => {
    const { id, title, userId } = props.post;
    return (
        <div className="singlePost">
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Id No : {id}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Post Title : {title}
                    </Typography>
                    <Typography color="textSecondary">
                        User Id : {userId}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Link to={`/posts/${id}`}>
                    <Button size="small" variant="contained" color="primary">Learn More</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default SinglePost;