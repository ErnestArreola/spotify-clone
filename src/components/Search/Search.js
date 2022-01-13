import React, {useState, useEffect} from 'react';
import {FormControl} from '@material-ui/core';
import {useStateValue} from "../../StateProvider";
import TrackSearchResult from "./TrackSearchResult";
import {Container, Form} from "react-bootstrap";
import SpotifyWebApi from 'spotify-web-api-js';

import { Avatar } from "@material-ui/core";


//style
import "./TrackSearchResults.css";

//components 
import AudioPlayer from "../AudioPlayer/AudioPlayer"; 

const spotifyApi = new SpotifyWebApi ({
    clientId: "31c278ca8b4a4702a3eb8ae13de84eee",
})


export default function Search() {
    const [{token, spotify, user}, dispatch] = useStateValue();
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [playingTrack, setPlayingTrack] = useState()


    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch("")
      }

        useEffect(() => {

            console.log(token);
        }, [search])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!token) return

        let cancel = false
        spotify.searchTracks(search).then(res => {
            console.log("If you're gonna let me down gently")
          if (cancel) return
          setSearchResults(
            res.tracks.items.map(track => {
              const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                  if (image.height < smallest.height) return image
                  return smallest
                },
                track.album.images[0]
              )
    
              return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestAlbumImage.url,
              }
            })
          )
        })
    
        return () => (cancel = true)
      }, [search])


    return (
      <>    
      <div className="header">
      <div className="header__left">
        <input 
          placeholder = "Search for Artists, Songs, or Podcasts"
          type  = "text"
          value = {search}
          onChange = {e => setSearch(e.target.value)}
          />
      {/* <Form.Control
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
      /> */}
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} >  </Avatar>   
        <h4>{user?.display_name}</h4>
      </div>
    </div>
      <div>

      </div>
      <div >
        <Container className = "results__container">
        <ul className = "search__results">
          {
            searchResults.map((track) => (
              <TrackSearchResult
                track = {track}
                key = {track.uri}
                chooseTrack = {chooseTrack}/>
            ))
          }
        </ul>
        </Container>
      </div>
        {/* <div>
            <Container style = {{height: "100vh"}}>  */}
            {/* <input
                placeholder="Search for Artists, Songs, or Podcasts "
                type="search"
                value = {search}
                onChange = {e => setSearch(e.target.value)}
             /> */}
           {/* <Form.Control
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
      /> */}
            {/* <div className = "flex-grow-1 my-2" style = {{overflowY: "auto"}}>
                {searchResults.map(track => (
                    <TrackSearchResult
                        track = {track}
                        key = {track.uri}
                        chooseTrack = {chooseTrack}/>
                ))}
            </div>
            <div>
                <AudioPlayer trackUri = {playingTrack?.uri} />
            </div>
            </Container> */}
        {/* </div> */}
        </>
    )
}
