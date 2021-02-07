/**
 * All interfaces are defined here
 */


export type Dispatch = React.Dispatch<ActionInterface>

export interface ContextInterface {
    episodes: Array<EpisodeInterface>;
    favourites: Array<EpisodeInterface>
}

export interface ActionInterface {
    type: string,
    payload: Array<EpisodeInterface> | any
}

export interface EpisodeInterface {
    airdate: string
    airstamp: string
    airtime: string
    id: number
    image: { medium: string, original: string }
    name: string
    number: number
    runtime: number
    season: number
    summary: string
    type: string
    url: string
}

export interface PropsInterface {
    episodes: Array<EpisodeInterface>,
    store: { state: ContextInterface, dispatch: Dispatch }
    handleClickFav: (state: ContextInterface, dispatch: Dispatch, episode: EpisodeInterface) => ActionInterface,
    favourites: Array<EpisodeInterface>

}