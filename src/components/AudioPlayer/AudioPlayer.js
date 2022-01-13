import {useState, useEffect} from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useStateValue } from "../../StateProvider";

export default function AudioPlayer ({trackUri}) {
    const [{ user, token }, dispatch] = useStateValue();
    const [play, setPlay] = useState(false);

    useEffect(() => setPlay(true), [trackUri])

    if(!token) return null
    return (
        <SpotifyPlayer
            token = {token}
            showSaveIcon
            callback={state => {
                if(!state.isPlaying) setPlay(false);
            }}
            play = {play}
            uris = {trackUri ? [trackUri] : []}
            />
    )

}