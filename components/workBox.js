import Image from 'next/image';
import Link from 'next/link';

export default function WorkBox({ featureImage, title, tag, type, slug }) {
  return (
    <div className="mt-[84px]">
      <Link href={`/works/${slug}`}>
        <a>
          <figure className="relative work">
            <Image
              src={featureImage?.asset.url}
              layout="fill"
              alt={featureImage?.caption}
              className="work-featured"
            ></Image>
          </figure>
          <div className="mt-[3px]">
            <h3 className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim">
              {title}
            </h3>
            <p className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
              {tag}
            </p>
            <p className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
              {type}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
