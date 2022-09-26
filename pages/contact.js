import Link from 'next/link'
import React from 'react'

export default function Contact() {
    return (
        <>
            <section>
                <div className='container md:w-7/12 w-full mx-auto md:pt-10 md:pb-5 py-8 px-2 h-[80vh] flex flex-col justify-between'>
                    <div className='grid gap-7'>
                        <ul className=''>
                            <li className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular'>Terris & Company General Contractors</li>
                            <li className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular'>facilitating design intent™</li>
                        </ul>

                        <ul className=''>
                            <li className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular'>853 Union Street</li>
                            <li className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular'>Vancouver, BC</li>
                            <li className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular'>Canada V6A 2C5</li>
                        </ul>

                        <ul className=''>
                            <li className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular'>
                                <Link href='#'><a>+1 604 535 5323</a></Link>
                            </li>
                            <li className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular'>
                                <Link href='#'><a>project@terrisco.com</a></Link>
                            </li>
                        </ul>

                        <ul className=''>
                            <li className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular'>Instagram</li>
                        </ul>
                    </div>
                    <p className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular'>A nice one by Maker Brothers Worldwide®</p>
                </div>
            </section>
        </>
    )
}
