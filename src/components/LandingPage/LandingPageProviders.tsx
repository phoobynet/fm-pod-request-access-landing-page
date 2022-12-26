import styles from './LandingPageProviders.module.scss'
import applePodcast from '@/assets/images/desktop/apple-podcast.svg'
import googlePodcasts from '@/assets/images/desktop/google-podcasts.svg'
import pocketCasts from '@/assets/images/desktop/pocket-casts.svg'
import spotify from '@/assets/images/desktop/spotify.svg'

const logos = [spotify, applePodcast, googlePodcasts, pocketCasts]

export default function LandingPageProviders () {
  return (
    <div className={styles.landingPageProviders}>
      {logos.map((src, i) => <img
        src={src}
        alt=""
        key={i}
      />)}
    </div>
  )
}
