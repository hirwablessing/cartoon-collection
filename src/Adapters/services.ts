import { ActionInterface, ContextInterface, EpisodeInterface } from "../interfaces/interfaces";

export const fetchData = async (dispatch: any) => {
    const URL = "http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    const data = await fetch(URL);
    const dataJSON = await data.json();

    return dispatch({
        type: "FETCH_DATA",
        payload: dataJSON._embedded.episodes
    })
}

export const handleClickFav = (state: ContextInterface, dispatch: any, episode: EpisodeInterface | any): ActionInterface => {
    const episodeInfave = state.favourites.includes(episode);

    let dispatchObject = {
        type: "ADD_FAV",
        payload: episode
    }

    if (episodeInfave) {
        const favouritesWithEpisode = state.favourites.filter((fav: EpisodeInterface) => fav.id !== episode.id)

        dispatchObject = {
            type: "REMOVE_FAV",
            payload: favouritesWithEpisode
        }

    }
    return dispatch(dispatchObject);
}