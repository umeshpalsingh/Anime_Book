import React from "react";
import { Button, CardActionArea, CardContent, CardActions, CardMedia, Typography } from "@mui/material";
import styled from "@emotion/styled";

function NewCard(props) {

  const Title = styled(Typography)({
    textTransform: "uppercase",
    fontSize: ".9rem",
    color: "#fff"
  });

  const SmallTitle = styled(Typography)({
    textAlign: "left",
    fontSize: ".8rem",
    color: "#bff"
  });

  const Description = styled(Typography)({
    fontSize: ".62rem",
    color: "#cff",
  });

  const ShortDetail = styled(Typography)({
    color: "#dfd",
    fontSize: ".7rem"
  });

  const ReadButton = styled(Button)({
    paddingLeft: "2px",
    color: "#E0ECE4"
  });

  return (
    <div className="card">
      <CardActionArea className="card__side card__side--front">
        <CardMedia sx={{ borderRadius: "3px" }}
          component="img"
          height="400"
          image={props.img}
          alt={props.name}
        />
      </CardActionArea>
      <div className="card__side card__side--back">
        <CardMedia
          component="img"
          height="120"
          image={props.movie_banner}
          alt={props.name}
        />
        <CardContent sx={{ p: "10px" }}>
          <Title align='left' gutterBottom variant="h6">
            {props.name}
          </Title>
          <SmallTitle gutterBottom variant="body1">
            {props.original_title}
          </SmallTitle>
          <ShortDetail>
            Director - {props.director}
          </ShortDetail>
          <ShortDetail gutterBottom>
            Producer - {props.producer}
          </ShortDetail>
          <Description align="justify">
            {props.description?.substring(0, 350)}
          </Description>
        </CardContent>
        <CardActions>
          <ReadButton
            href={"https://ghibliapi.herokuapp.com/films/" + props.ID}
            size="small">
            Read More
          </ReadButton>
        </CardActions>
      </div>
    </div>
  );
}

export default NewCard;