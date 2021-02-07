/**
 * All interfaces are defined here
 */

export interface ContextInterface {
    episodes: Array<any>;
    favourites: Array<any>
}

export interface ActionInterface {
    type: string,
    payload: any
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
    handleClickFav: (episode: EpisodeInterface) => ActionInterface,
    favourites: Array<EpisodeInterface>

}