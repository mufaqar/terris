import OwnImage from './OwnImage';
import { PortableText } from '@portabletext/react';

export default function TeamBox({
  name,
  content,
  imgPath,
  teamState,
  teamOpen,
  id,
}) {
  console.log(content);
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
          <h3 className="teris_font font-AtlasGroteskRegular mb-2">{name}</h3>
          <div className="teris_font font-AtlasGroteskRegular mb-2 custom_p">
            <PortableText value={content} />
          </div>
        </div>
      </div>
    </>
  );
}
