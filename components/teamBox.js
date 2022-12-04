import OwnImage from './OwnImage';
import PortableText from 'react-portable-text';

export default function TeamBox({
  name,
  detail,
  imgPath,
  teamState,
  teamOpen,
  id,
}) {
  console.log(detail);
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
          <div className="teris_font font-AtlasGroteskRegular mb-2">
            <PortableText
              // Pass in block content straight from Sanity.io
              content={detail}
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                span: (props) => <p style={{ color: 'red' }} {...props} />,
                li: ({ children }) => (
                  <li className="special-list-item">{children}</li>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
