import Image from 'next/image';
import Team1 from '../public/images/team1.webp';

export default function TeamBox() {
  return (
    <>
      <div className="relative group ">
        <Image src={Team1} alt=""></Image>
        <div className="team-overlay absolute inset-0 overflow-auto grid justify-between bg-white opacity-0 group-hover:opacity-100 p-1">
          <h3 className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim mb-2">
            Dino Spazdiuk
          </h3>
          <p className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular mb-2">
            Dino Spadziuk has been with Terris & Co. since its inception and has
            been in his current role as a Senior Site Manager since 2020. He’s
            been building alongside Reece Terris since 2007.
          </p>
          <p className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular mb-2">
            Dino is best known for his intuitive methods of getting
          </p>
        </div>
      </div>
    </>
  );
}
