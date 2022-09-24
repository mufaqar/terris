import Image from 'next/image'
import Link from 'next/link';
import Work1 from '../public/images/1.png';

export default function WorkBox(props) {
    return (
        <div className='py-10'>
            <Link href='/works/single-project'><a>
                <figure>
                    <Image src={Work1} alt=''></Image>
                </figure>
                <div className='md:text-[1.375rem] text-[0.813rem]'>
                    <h3 className='font-medium'>{props.title}</h3>
                    <p className='font-normal'>{props.detail}</p>
                    <p className='font-normal'>{props.info}</p>
                </div>
                </a></Link>
        </div>
    )
}
