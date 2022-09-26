import Image from 'next/image';
import Link from 'next/link';

export default function WorkBox(props) {
  return (
    <div className="pb-10">
      <Link href="/works/single-project">
        <a>
          <figure className="relative work">
            <Image
              src={props.icon}
              layout="fill"
              alt=""
              className="work-featured"
            ></Image>
          </figure>
          <div className="mt-4">
            <h3 className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim">{props.title}</h3>
            <p className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">{props.detail}</p>
            <p className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">{props.info}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
