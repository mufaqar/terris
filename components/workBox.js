import Image from 'next/image';
import Link from 'next/link';

export default function WorkBox(props) {
  return (
    <div className="pb-10 pt-5">
      <Link href="/works/single-project">
        <a>
          <figure className="relative work">
            <Image
              src={props.icon}
              layout="fill"
              alt=""
              className="image"
            ></Image>
          </figure>
          <div className="md:text-[1.375rem] text-[0.813rem] mt-4">
            <h3 className="font-AtlasGroteskMeduim">{props.title}</h3>
            <p className="font-AtlasGroteskRegular">{props.detail}</p>
            <p className="font-AtlasGroteskRegular">{props.info}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
