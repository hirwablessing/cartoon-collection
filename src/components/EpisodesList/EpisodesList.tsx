import { EpisodeInterface } from "../../interfaces/interfaces"

function EpisodesList(props: any) {
    const { episodes, favourites, handleClickFav } = props;


    return episodes.map((episode: EpisodeInterface) => {
        return (
            <section className="episode-box" key={episode.id}>
                <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
                <p>{episode.name}</p>
                <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>Season: {episode.season} Numa: {episode.number}</div>
                    <button key={episode.id} type="button" onClick={() => { handleClickFav(episode) }}>
                        {favourites.find((fav: EpisodeInterface) => fav.id === episode.id) ? "Unfav" : "Fav"}
                    </button>
                </section>
            </section>
        )
    })


}

export default EpisodesList
