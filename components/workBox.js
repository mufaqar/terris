import Image from 'next/image'
import Link from 'next/link';
import Project1 from '../public/images/project1.png';

export default function WorkBox(props) {
    return (
        <div className='pb-10 pt-5'>
            <Link href='/works/single-project'><a>
                <figure>
                    <Image src={Project1} alt=''></Image>
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
