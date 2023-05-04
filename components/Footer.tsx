import * as React from 'react'

import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2023. {config.author}. Website by the Workweek.</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.facebook && (
          <a
            className={styles.facebook}
            href={`https://facebook.com/${config.facebook}`}
            title={`Facebook @${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>
        )}

        {config.instagram && (
          <a
            className={styles.instagram}
            href={`https://www.instagram.com/in/${config.instagram}`}
            title={`Instagram ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelopeOpenText />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
