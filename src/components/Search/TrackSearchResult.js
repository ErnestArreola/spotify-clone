import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//style 
import "./TrackSearchResults.css"

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <>
    <div className = "results__card__div">
    <Card className = "results__card">
      <CardActionArea>
        {handlePlay}
        <div style = {{padding: 15, backgroundColor: "#181818"}}>
        <CardMedia
          
          component = "img"
          height = "192"
          image = {track.albumUrl}
          alt = "car"
          />
        </div>
      
          <CardContent className = "results__card__content">
            <Typography gutterBottom variant = "h6" componenet = "div" style = {{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", width: "90%"}}>
              {track.title}
            </Typography>
            <Typography variant ="body2" color = "white">
              {track.artist}
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
    </div>

    {/* <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div> */}

</>  
)
}