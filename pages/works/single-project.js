import Image from 'next/image';
import Gallery1 from '../../public/images/gallery1.png';
import Gallery2 from '../../public/images/gallery2.png';
import Gallery3 from '../../public/images/gallery3.png';
import Gallery4 from '../../public/images/gallery4.png';
import Gallery5 from '../../public/images/gallery5.png';
import WorkBox from '../../components/workBox'

export default function SingleProject() {
    return (
        <>
            <section>
                <div className='container md:w-7/12 w-full mx-auto md:pt-10 md:pb-5 py-8 px-2'>
                    <div className='md:text-[1.375rem] text-[0.813rem]'>
                        <h3 className='font-medium'>Union Street</h3>
                        <p className='font-normal'>MA+HG</p>
                        <p className='font-normal'>Restoration + In-fill Building</p>
                    </div>
                </div>

                <div className='gallery container md:w-7/12 w-full mx-auto px-2'>
                    <div className='grid gap-3'>
                        <Image src={Gallery1}></Image>
                        <Image src={Gallery2}></Image>
                        <Image src={Gallery3}></Image>
                        <Image src={Gallery4}></Image>
                        <Image src={Gallery5}></Image>
                    </div>
                </div>

                <div className='container md:w-7/12 w-full mx-auto py-5 px-2 grid gap-7'>
                    <ul className='md:text-xl text-[0.813rem]'>
                        <li className='font-normal'>Vancouver, BC</li>
                        <li className='font-normal'>2020</li>
                        <li className='font-normal'>5800 sqft</li>
                    </ul>

                    <ul className='md:text-xl text-[0.813rem]'>
                        <li className='font-medium'>Project highlights</li>
                        <li className='font-normal'>Five-unit stratified infill building</li>
                        <li className='font-normal'>Original house lifted and restored</li>
                        <li className='font-normal'>Custom, full metal stairs welded on-site</li>
                        <li className='font-normal'>Steel deck canopy</li>
                        <li className='font-normal'>Triangle roof framing in the attic</li>
                    </ul>

                    <ul className='md:text-xl text-[0.813rem]'>
                        <li className='font-medium'>Featured In</li>
                        <li className='font-normal'>Canadian Architect</li>
                        <li className='font-normal'>Western Living Magazine</li>
                    </ul>

                    <ul className='md:text-xl text-[0.813rem]'>
                        <li className='font-medium'>Collaborators</li>
                        <li className='font-normal'>General Contracting: Reece Terris, Dino Fulyan</li>
                        <li className='font-normal'>Architect: MA+HG</li>
                        <li className='font-normal'>Landscape Architecture: Thales Muniz, Young Woo, Duncan Brazzil</li>
                        <li className='font-normal'>Geotechnical Engineer: Giordano Caldas</li>
                        <li className='font-normal'>Structural Engineer: Nicholas Schröder, Elisa</li>
                        <li className='font-normal'>Bortolini</li>
                    </ul>
                </div>
            </section>
            <section>
                <div className='conteiner md:w-7/12 w-full mx-auto px-2 border-t-2 border-[#F5F5F5]'>
                    <WorkBox title="Union Street" detail="MA+HG" info="Restoration + In-fill Building"/>
                    <WorkBox title="Union Street" detail="MA+HG" info="Restoration + In-fill Building"/>
                    <WorkBox title="Union Street" detail="MA+HG" info="Restoration + In-fill Building"/>
                    <WorkBox title="Union Street" detail="MA+HG" info="Restoration + In-fill Building"/>
                    <WorkBox title="Union Street" detail="MA+HG" info="Restoration + In-fill Building"/>
                </div>
            </section>
        </>
    )
}
