import styles from './LandingPage.module.scss'
import applePodcast from '@/assets/images/desktop/apple-podcast.svg'
import googlePodcasts from '@/assets/images/desktop/google-podcasts.svg'
import pocketCasts from '@/assets/images/desktop/pocket-casts.svg'
import spotify from '@/assets/images/desktop/spotify.svg'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import { useState } from 'react'
import LandingPageHeading from '@/components/LandingPage/LandingPageHeading'
import LandingPageAbout from '@/components/LandingPage/LandingPageAbout'
import LandingPageProviders from '@/components/LandingPage/LandingPageProviders'

export default function LandingPage () {
  const [email, setEmail] = useState<string>()
  const onSubmit = () => {
    if (email) {
      console.log(`Submitted ${email}`)
    } else {
      console.error(`Please set an email address!`)
    }
  }

  return (
    <div className={styles.landingPage}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>

      <LandingPageHeading>Publish your podcasts <em>everywhere.</em></LandingPageHeading>
      <LandingPageAbout>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify,
        Apple Podcasts,
        Google Podcasts, Pocket Casts and more!</LandingPageAbout>
      <LandingPageProviders />
      <form
        className={styles.requestAccessForm}
        onSubmit={onSubmit}
      >
        <Input
          type="email"
          placeholder="Email address"
        />
        <Button type="submit">Request Access</Button>
      </form>
    </div>
  )
}
