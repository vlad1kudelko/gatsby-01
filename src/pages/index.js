import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import 'normalize.css'
import '../styles/styles.scss'

const IndexPage = () => {
  return (
    <div className='max-w-screen-lg mx-auto'>
        <header>
            <div className='headBanner relative overflow-hidden'>
                <div className='absolute pr-2 top-0 right-0 left-0 bottom-0 flex items-center justify-center'>
                    <StaticImage
                        alt=''
                        placeholder='blurred'
                        src='../images/man.png'
                        className='hidden md:block self-end'
                    />
                    <div className='text-5xl text-center' style={{fontFamily: 'Ubuntu, sans-serif'}}>
                        Smart 📈 manage <br/> time with AI
                    </div>
                </div>
                <div className='absolute top-0 right-0 left-0 text-lg md:flex md:justify-between md:py-5 md:px-8'>
                    <div className='py-5 px-8 md:p-0'>
                        <a className='hover:text-gray-600' href='#Logo'>Logo</a>
                    </div>
                    <div className='py-5 px-8 md:p-0 text-center'>
                        <a className='p-5 hover:text-gray-600' href='#Blog'>Blog</a>
                        <a className='p-5 hover:text-gray-600' href='#Contact'>Contact</a>
                        <a className='p-5 hover:text-gray-600' href='#About'>About</a>
                    </div>
                    <div></div>
                </div>
                <div className='upButton absolute bg-black top-0 right-0 text-lg uppercase font-bold py-5 px-8'>
                    <a className='text-yellow-300' href='#Download'>Download</a>
                    <div className='round1 absolute'>
                        <div className='absolute top-0 right-0 left-0 bottom-0'/>
                    </div>
                    <div className='round2 absolute'>
                        <div className='absolute top-0 right-0 left-0 bottom-0'/>
                    </div>
                </div>
            </div>
            <div className='subBanners grid grid-cols-2 md:grid-cols-3'>
                <div className='box1 text-white'>
                    <div className='gridBox grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-0'>
                        <div className='text-xs uppercase'> [rating] </div>
                        <div className='text-3xl md:text-6xl text-center'>
                            <span className='relative'>
                                4.9
                                <span className='absolute text-xl'>⭐</span>
                            </span>
                        </div>
                    </div>
                    <div className='avaList flex'>
                        <StaticImage 
                            alt=''
                            placeholder='blurred'
                            src='../images/thispersondoesnotexist.jpg'
                            className='avatar h-12 w-12 rounded-full'/>
                        <div className='avatar h-12 w-12 rounded-full bg-yellow-300'></div>
                    </div>
                </div>
                <div className='box2 hidden md:block text-lg font-bold'>
                    <div>Use the time to your own advantage every day</div>
                </div>
                <div className='box3 relative'>
                    <div className='border1'>
                        <div className='absolute'></div>
                        <div className='absolute'></div>
                    </div>
                    <div className='round1 absolute'>
                        <div className='absolute top-0 right-0 left-0 bottom-0'/>
                    </div>
                    <div className='round2 absolute'>
                        <div className='absolute top-0 right-0 left-0 bottom-0'/>
                    </div>
                    <div className='contentBox absolute'>
                        <div className='text-xs uppercase'> [tasks done] </div>
                        <br/>
                        <div className='text-3xl md:text-6xl text-center'>+22%</div>
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
