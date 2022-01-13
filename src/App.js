import React, {useEffect} from "react";
import SpotifyWebApi from "spotify-web-api-js"
import {useStateValue} from "./StateProvider";
import {getTokenFromResponse} from "./util/spotify"
import "./App.css";
import Login from "./views/Login/Login";
import './App.css';
import Player from "./views/Player/Player";


const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("06dKMaNKHIkQYSmYD4ystV").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      s.getFeaturedPlaylists({limit : 3, offset: 1, country: 'US' })
      .then(function(data) {
        console.log(data);
        console.log("Above")
      }, function(err) {
        console.log("Something went wrong!", err);
      });

      s.getMyCurrentPlayingTrack().then((data) => {
        console.log(data);
        console.log("Above data");
      })

      s.getMyCurrentPlayingTrack().then(function(data) {
        if(data && data.is_playing) {
          console.log("Something is playing")
        } else {
          console.log("User is not playing anything, or doing so in private.");
          console.log(data);
        }
        }, function(err) {
          console.log('Something went wrong!', err);
      });

    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;
