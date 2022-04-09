import React from 'react';
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import styled from "@emotion/styled";

function AnimeCard(props) {

  const Title = styled(Typography)({
    textTransform: "uppercase",
    fontSize: ".9rem",
    color: "#eee"
  });

  const Description = styled(Typography)({
    fontSize: ".8rem",
    color: "#ddd",
  });

  const AnimeCard = styled(Card)({
    backgroundColor: "#0A1929",
    border: "1px solid #0d47a1"
  });

  // const [details, setDetails] = useState();

  // const URL = "https://ghibliapi.herokuapp.com/films/" + `${props.ID}`

  // const fetchdata = async () => {
  //   const {data} = await Axios.get(URL);
  //   setDetails(data);
  // }

  return (
    <AnimeCard variant='outlined' sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.img}
          alt={props.name}
        />
        <CardContent>
          <Title align='left' gutterBottom variant="h6" >
            {props.name}
          </Title>
          <Description align='left' variant='body1'>
            {props.description?.substring(0, 80)}...
          </Description>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={"https://ghibliapi.herokuapp.com/films/" + props.ID} sx={{ ml: "2px" }} size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </AnimeCard>
  );
}

export default AnimeCard;

{
  /*  */
}