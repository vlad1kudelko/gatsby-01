import * as React from 'react'
import 'normalize.css'

const styles = {
    main: {
        fontFamily: 'Roboto, sans-serif, serif',
        padding: '20px',
    },
    headBanner: {
        backgroundColor: '#d1d4ff',
        height: '500px',
        borderRadius: '30px',
        position: 'relative',

        upButton: {
            padding: '20px 30px',
            position: 'absolute',
            top: 0,
            right: 0,
            borderBottomLeftRadius: '30px',
            fontSize: '1.1em',
            textTransform: 'uppercase',
            backgroundColor: 'gray',
            color: 'yellow',

            roundGroup: {
            },
            round1: {
                height: '50px',
                width: '50px',
                backgroundColor: 'green',
                position: 'absolute',
                top: 0,
                left: '-50px',
            },
            round2: {
                height: '50px',
                width: '50px',
                backgroundColor: 'green',
                position: 'absolute',
                bottom: '-50px',
                right: 0,
            },
        },
    },
}

const IndexPage = () => {
  return (
    <main style={styles.main}>
        <div style={styles.headBanner}>
            <div style={styles.headBanner.upButton}>
                <span>Download</span>
                <div style={styles.headBanner.upButton.round1}></div>
                <div style={styles.headBanner.upButton.round2}></div>
            </div>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
