import { lazy, Suspense, useContext } from 'react'
import { Store } from '../../store/Store';
import { handleClickFav } from "../../Adapters/services"
import { PropsInterface } from '../../interfaces/interfaces';

const EpisodesList = lazy<any>(() => import('../EpisodesList/EpisodesList'))

function Favourites() {
    const { state, dispatch } = useContext(Store);

    const props: PropsInterface = {
        episodes: state.favourites,
        store: { state, dispatch },
        handleClickFav,
        favourites: state.favourites
    }

    return (
        <div>
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <section className="episode-layout">
                        <EpisodesList {...props} />
                    </section>
                </Suspense>
            </>
        </div>
    )
}

export default Favourites
