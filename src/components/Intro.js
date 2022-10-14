import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";

const Intro = () => {
  return (
    <div className="intro">
      <div className="cards">
        <h1 className="join">Join Us</h1>
        <p className="para">
          To begin this journey, tell us what type of account you will be
          opening.
        </p>
        <div className="card1">
          <Link to={"/Page1"}>
            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <PersonIcon />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    Individual
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Personal account to manage all your activities.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
        <div className="card2">
          <Link to={"/Page1"}>
            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <WorkIcon />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    Business
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    Own or belong to a company this for you.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      </div>
      <div className="sideline">Already have a account? Sign in</div>
    </div>
  );
};

export default Intro;
