import Image from 'next/image';
import Team1 from '../public/images/team1.webp';

export default function TeamBox() {
  return (
    <>
      <div className="relative group">
        <Image src={Team1} alt=""></Image>
        <div className="absolute top-0 bottom-0 grid justify-between bg-white opacity-0 group-hover:opacity-100 p-1">
          <h3 className="font-medium md:text-xl text-[0.813rem]">
            Dino Spazdiuk
          </h3>
          <p className="font-normal md:text-xl text-[0.813rem]">
            Dino Spadziuk has been with Terris & Co. since its inception and has
            been in his current role as a Senior Site Manager since 2020. He’s
            been building alongside Reece Terris since 2007.
          </p>
          <p className="font-normal md:text-xl text-[0.813rem]">
            Dino is best known for his intuitive methods of getting
          </p>
        </div>
      </div>
    </>
  );
}
