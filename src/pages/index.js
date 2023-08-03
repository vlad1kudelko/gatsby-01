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
                        src='../images/man.png'
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
            </div>
            <div className='subBanners'>
                <div className='box1'>
                    <div className='gridBox'>
                        <div className='nameBox'> [rating] </div>
                        <div className='ratingNumber'>
                            <span>4.9</span>
                        </div>
                    </div>
                    <div className='avaList'>
                        <StaticImage 
                            alt=''
                            placeholder='blurred'
                            src='../images/thispersondoesnotexist.jpg'
                            className='avatar'/>
                        <div className='avatar'></div>
                    </div>
                </div>
                <div className='box2'>
                    <div>Use the time to your own advantage every day</div>
                </div>
                <div className='box3'>
                    <div className='border1'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='round1'><div/></div>
                    <div className='round2'><div/></div>
                    <div className='contentBox'>
                        <div className='nameBox'> [tasks done] </div>
                        <br/>
                        <div className='ratingNumber'>+22%</div>
                    </div>
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
