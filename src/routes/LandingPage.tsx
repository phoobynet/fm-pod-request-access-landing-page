import styles from './LandingPage.module.scss'
import logo from '@/assets/images/desktop/logo.svg'
import applePodcast from '@/assets/images/desktop/apple-podcast.svg'
import googlePodcasts from '@/assets/images/desktop/google-podcasts.svg'
import pocketCasts from '@/assets/images/desktop/pocket-casts.svg'
import spotify from '@/assets/images/desktop/spotify.svg'

export default function LandingPage () {
  return (
    <div className={styles.landingPage}>
      <img
        src={logo}
        alt=""
        className={styles.logo}
      />

      <h1>Publish your podcasts <em>everywhere.</em></h1>
      <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts,
        Google Podcasts, Pocket Casts and more!</p>
      <div className={styles.providers}>
        <img
          src={spotify}
          alt=""
        />
        <img
          src={applePodcast}
          alt=""
        />
        <img
          src={googlePodcasts}
          alt=""
        />
        <img
          src={pocketCasts}
          alt=""
        />
      </div>
      <form
        onSubmit={() => console.log('No submit handler')}
        style={{ zIndex: 2 }}
      >
        <input
          type="email"
          placeholder="Email address"
        />
        <button type="submit">Request Access</button>
      </form>
    </div>
  )
}
