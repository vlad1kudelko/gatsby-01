import * as React from 'react'
import 'normalize.css'
import '../styles/styles.scss'

const IndexPage = () => {
  return (
    <main>
        <div className='headBanner'>
            <div className='upButton'>
                <span>Download</span>
                <div className='round1'><div/></div>
                <div className='round2'><div/></div>
            </div>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
