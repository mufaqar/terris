import OwnImage from './OwnImage';

export default function TeamBox({
  name,
  detail,
  imgPath,
  teamState,
  teamOpen,
  id,
}) {
  const handleClick = (id) => {
    if (teamOpen === id) {
      return teamState(null);
    }
    teamState(id);
  };

  return (
    <>
      <div
        className="relative cursor-pointer group"
        onClick={() => handleClick(id)}
      >
        <OwnImage
          path={imgPath?.asset.url}
          alt={imgPath?.asset.caption ? imgPath?.asset.caption : name}
        ></OwnImage>
        <div
          className={`absolute inset-0 grid content-start p-0 overflow-auto bg-white  team-overlay ${
            teamOpen === id ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular mb-2">
            {name}
          </h3>
          <p className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular mb-2">
            {detail}
          </p>
        </div>
      </div>
    </>
  );
}
