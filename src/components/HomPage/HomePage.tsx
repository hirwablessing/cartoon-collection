import { lazy, Suspense, useContext, useEffect } from 'react';
import { fetchData, handleClickFav } from '../../Adapters/services';
import { PropsInterface } from '../../interfaces/interfaces';
import { Store } from '../../store/Store';


const EpisodesList = lazy<any>(() => import('../EpisodesList/EpisodesList'))

function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {

    state.episodes.length === 0 && fetchData(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.episodes])


  const props: PropsInterface = {
    episodes: state.episodes,
    store: { state, dispatch },
    handleClickFav,
    favourites: state.favourites
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </Suspense>
    </>
  )
}

export default HomePage
