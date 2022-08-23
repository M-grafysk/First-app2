import { createContext, useState } from "react";

export const MusicContext = createContext();

export const MusicProvider = props => {

    const [musicList, setMusicList] = useState([]);
    const [loading, setLoading] = useState(true);

    return <MusicContext.Provider value = {
            [musicList, setMusicList, loading, setLoading] } > { props.children } </MusicContext.Provider>

}