import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import 'normalize.css'
import '../styles/styles.scss'

const IndexPage = () => {
  return (
    <main>
        <div className='headBanner'>
            <div className='banner'>
                <StaticImage src='../images/undraw_learning_sketching_nd4f.svg' style={{ width: '300px' }} />
                <div>Smart manage <br/> time with AI</div>
            </div>
            <div className='navBar'>
                <div>
                    <a href='#'>Logo</a>
                </div>
                <div className='btns'>
                    <a href='#'>Blog</a>
                    <a href='#'>Contact</a>
                    <a href='#'>About</a>
                </div>
                <div></div>
            </div>
            <div className='upButton'>
                <a href='#'>Download</a>
                <div className='round1'><div/></div>
                <div className='round2'><div/></div>
            </div>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
