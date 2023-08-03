import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import 'normalize.css'
import '../styles/styles.scss'

const IndexPage = () => {
  return (
    <div className='page'>
        <header>
            <div className='headBanner'>
                <div className='banner'>
                    <StaticImage
                        alt=''
                        placeholder='blurred'
                        src='../images/undraw_learning_sketching_nd4f.svg'
                        className='img'
                    />
                    <div className='title'>Smart 📈 manage <br/> time with AI</div>
                </div>
                <div className='navBar'>
                    <div>
                        <a href='#Logo'>Logo</a>
                    </div>
                    <div className='btns'>
                        <a href='#Blog'>Blog</a>
                        <a href='#Contact'>Contact</a>
                        <a href='#About'>About</a>
                    </div>
                    <div></div>
                </div>
                <div className='upButton'>
                    <a href='#Download'>Download</a>
                    <div className='round1'><div/></div>
                    <div className='round2'><div/></div>
                </div>
                <div className='goButton'>
                    <a href='#Download'>Download</a>
                </div>
            </div>
            <div className='subBanners'>
                <div className='box1'>
                </div>
                <div className='box2'>
                </div>
                <div className='box3'>
                    <div className='border1'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='round1'><div/></div>
                    <div className='round2'><div/></div>
                </div>
            </div>
        </header>

        <main>
            <br/> <br/> <br/> <br/>
            <br/> <br/> <br/> <br/>
        </main>

        <footer>
            <div className='footer'>
            </div>
        </footer>
    </div>
  )
}

export default IndexPage

export const Head = () => {
    return (
        <>
            <title>Home Page</title>
            <meta name='description' content='Description' />
        </>
    )
}
