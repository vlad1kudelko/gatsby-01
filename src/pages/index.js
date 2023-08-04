import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import 'normalize.css'
import '../styles/styles.scss'

// padding: "\<p-\d\|\<p.-\d\|\<m-\d\|\<m.-\d"

const IndexPage = () => {
    const over = 100;
    const padding = 10;  // = p-2.5 (20 = p-5, 40 = p-10)
    const radius = 30;
    return (
        <div className='max-w-screen-lg mx-auto'>
            <header>
                {/* main header */}
                <div className='bg-blue-200 m-5 mb-2.5 relative overflow-hidden' style={{borderRadius: radius + 'px', height: '500px'}}>
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
                    <div className='absolute bg-black top-0 right-0 text-lg uppercase font-bold py-5 px-8' style={{borderBottomLeftRadius: radius + 'px'}}>
                        <a className='text-yellow-300' href='#Download'>Download</a>
                        <div className='absolute bg-black top-0' style={{height: radius + 'px', width: radius + 'px', left: -radius + 'px'}}>
                            <div className='bg-blue-200 absolute top-0 right-0 left-0 bottom-0' style={{borderTopRightRadius: radius + 'px'}}/>
                        </div>
                        <div className='absolute bg-black right-0' style={{height: radius + 'px', width: radius + 'px', bottom: -radius + 'px'}}>
                            <div className='bg-blue-200 absolute top-0 right-0 left-0 bottom-0' style={{borderTopRightRadius: radius + 'px'}}/>
                        </div>
                    </div>
                </div>
                {/* sub header */}
                <div className='m-5 mt-2.5 grid grid-cols-2 md:grid-cols-3 gap-2.5'>
                    {/* box1 */}
                    <div className='text-white bg-blue-700' style={{borderRadius: radius + 'px', height: '250px'}}>
                        <div className='gridBox p-10 grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-0'>
                            <div className='text-xs uppercase'> [rating] </div>
                            <div className='text-3xl md:text-6xl text-center'>
                                <span className='relative'>
                                    4.9
                                    <span className='absolute text-xl'>⭐</span>
                                </span>
                            </div>
                        </div>
                        <div className='py-0 px-10 flex'>
                            <StaticImage 
                                alt=''
                                placeholder='blurred'
                                src='../images/thispersondoesnotexist.jpg'
                                className='h-12 w-12 rounded-full'/>
                            <div className='h-12 w-12 rounded-full bg-yellow-300 border-4 border-blue-700 z-10' style={{marginLeft: '-15px'}}></div>
                        </div>
                    </div>
                    {/* box2 */}
                    <div className='bg-gray-300 p-10 hidden md:block text-lg font-bold' style={{borderRadius: radius + 'px'}}>
                        <div>Use the time to your own advantage every day</div>
                    </div>
                    {/* box3 */}
                    <div className='relative text-white'>
                        {/* black background */}
                        <div className='absolute right-0 bottom-0 bg-black' style={{top: (- over - padding) + 'px', left: (- padding) + 'px', borderRadius: radius + 'px', borderTopRightRadius: '0px'}}></div>
                        {/* color background */}
                        <div className='absolute right-0 bottom-0 left-0 bg-gray-700' style={{top: (- over) + 'px', borderRadius: radius + 'px'}}></div>
                        {/* left */}
                        <div className='absolute bg-black' style={{height: radius + 'px', width: radius + 'px', top: (- padding - radius) + 'px', left: (- padding - radius) + 'px'}}>
                            <div className='bg-blue-200 absolute top-0 right-0 left-0 bottom-0' style={{borderBottomRightRadius: radius + 'px'}}/>
                        </div>
                        {/* right */}
                        <div className='absolute bg-black right-0' style={{height: radius + 'px', width: radius + 'px', top: (- over - padding - radius) + 'px'}}>
                            <div className='bg-blue-200 absolute top-0 right-0 left-0 bottom-0' style={{borderBottomRightRadius: radius + 'px'}}/>
                        </div>
                        {/* body, CALC - padding */}
                        <div className='p-10 absolute left-0 right-0 bottom-0' style={{top: (- over) + 'px'}}>
                            <div className='text-xs uppercase'> [tasks done] </div>
                            <br/>
                            <div className='text-3xl md:text-6xl text-center'>+22%</div>
                        </div>
                    </div>
                    {/* end boxs */}
                </div>
                {/* end headers */}
            </header>

            <main>
                <br/> <br/> <br/> <br/>
                <br/> <br/> <br/> <br/>
            </main>

            <footer>
                <div className='m-5 mb-0 bg-gray-700' style={{height: '200px', borderTopLeftRadius: radius + 'px', borderTopRightRadius: radius + 'px'}}>
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
