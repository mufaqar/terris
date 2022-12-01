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
            <h3 className="teris_font font-AtlasGroteskMeduim">{title}</h3>
            <p className="teris_font font-AtlasGroteskRegular">{tag}</p>
            <p className="teris_font font-AtlasGroteskRegular">{type}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
