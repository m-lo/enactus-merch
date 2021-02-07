import Logo from './Logo.png'
import { useEffect, useState } from 'react'

const Button = ({ label, link }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      style={{
        textAlign: 'center',
        padding: 20,
        margin: 8,
        borderRadius: 80,
        background: 'black',
        color: '#FFC222',
        fontFamily: 'Montserrat',
        textDecoration: 'none',
        textTransform: 'uppercase',
      }}
      href={link}
    >
      {label}
    </a>
  )
}

function App() {
  const [prize, setPrize] = useState()
  useEffect(() => {
    const merch = ['Pens', 'Hand San', 'Sticky Notes']
    let looper = setInterval(
      () => setPrize(merch[Math.floor(Math.random() * merch.length)]),
      30
    )
    setTimeout(function () {
      clearInterval(looper)
    }, 3000)
  }, [])
  return (
    <div
      style={{
        background: '#FFC222',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: ' center',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ alignSelf: 'center' }}>
        <img
          src={Logo}
          alt="Enactus UNSW"
          style={{ width: 240, paddingBottom: 40, paddingTop: 40 }}
        />
      </div>
      <div style={{ fontFamily: 'Montserrat' }}>YOU HAVE WON</div>
      <div
        style={{ alignSelf: 'center', fontFamily: 'Montserrat', fontSize: 64 }}
      >
        {prize}
      </div>
      <div
        style={{
          marginTop: 40,
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: 40,
        }}
      >
        <Button label="Facebook" link="https://www.facebook.com/enactusunsw/" />
        <Button label="Instagram" link="https://instagram.com/enactus.unsw/" />
        <Button
          label="LinkedIn"
          link="https://au.linkedin.com/school/enactus-unsw/"
        />
        <Button label="Newsletter" link="http://eepurl.com/gi4Ud9" />
        <Button label="Website" link="https://enactusunsw.org/" />
      </div>
    </div>
  )
}

export default App
