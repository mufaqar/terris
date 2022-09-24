import Link from 'next/link'
import React from 'react'

export default function Contact() {
    return (
        <>
            <section>
                <div className='container md:w-7/12 w-full mx-auto md:pt-10 md:pb-5 py-8 px-2 h-[80vh] flex flex-col justify-between'>
                    <div className='grid gap-7'>
                        <ul className='md:text-xl text-[0.813rem]'>
                            <li className='font-AtlasGroteskRegular'>Terris & Company General Contractors</li>
                            <li className='font-AtlasGroteskRegular'>facilitating design intent™</li>
                        </ul>

                        <ul className='md:text-xl text-[0.813rem]'>
                            <li className='font-AtlasGroteskRegular'>853 Union Street</li>
                            <li className='font-AtlasGroteskRegular'>Vancouver, BC</li>
                            <li className='font-AtlasGroteskRegular'>Canada V6A 2C5</li>
                        </ul>

                        <ul className='md:text-xl text-[0.813rem]'>
                            <li className='font-AtlasGroteskRegular'>
                                <Link href='#'><a>+1 604 535 5323</a></Link>
                            </li>
                            <li className='font-AtlasGroteskRegular'>
                                <Link href='#'><a>project@terrisco.com</a></Link>
                            </li>
                        </ul>

                        <ul className='md:text-xl text-[0.813rem]'>
                            <li className='font-AtlasGroteskRegular'>Instagram</li>
                        </ul>
                    </div>
                    <p className='md:text-xl text-[0.813rem] font-AtlasGroteskRegular'>A nice one by Maker Brothers Worldwide®</p>
                </div>
            </section>
        </>
    )
}
