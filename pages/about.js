import { useState } from 'react';
import TeamBox from '../components/teamBox';
import { sanityClient } from '../lib/sanityClient';

// sanity Queries
const teamQuery = `*[_type == "team"]{
    featureimage{
        asset->{
          url
        },
        caption,
    },
    name,
    portableText,
    categories,
    _id
}`;

export default function About({ team }) {
  console.log('🚀 ~ file: about.js:20 ~ About ~ team', team);
  const [teamOpen, setTeamOpen] = useState(null);

  const stateChange = (id) => {
    setTeamOpen(id);
  };
  return (
    <>
      <section className="mb-[84px]">
        <div className=" w-full px-2 mb-[42px] mx-auto teris_screen">
          <div className="teris_screen_bigp w-full ">
            <p className="teris_font_bigp font-AtlasGroteskRegular">
              Terris & Company is a fully accredited general contracting firm
              engaging in custom residential projects, including new
              construction, renovations, additions and restorations.
            </p>
          </div>
        </div>

        <div className=" w-full px-2 mb-[42px] mx-auto teris_screen">
          <h3 className="teris_font font-AtlasGroteskMeduim mb-[9px]">
            Senior Project Management
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-[9px]">
            {team
              .filter((team) => team.categories === 'Senior Project Management')
              .map((senior_team, index) => (
                <TeamBox
                  key={index}
                  name={senior_team.name}
                  content={senior_team.portableText}
                  categorie={senior_team.categories}
                  id={senior_team._id}
                  imgPath={senior_team.featureimage}
                  teamState={stateChange}
                  teamOpen={teamOpen}
                />
              ))}
          </div>
        </div>

        <div className="w-full px-2 mx-auto mb-[42px] teris_screen">
          <h3 className="teris_font font-AtlasGroteskMeduim mb-3">
            Junior Site Management
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-[9px]">
            {team
              .filter((team) => team.categories === 'Junior Site Management')
              .map((junior_team, index) => (
                <TeamBox
                  key={index}
                  name={junior_team.name}
                  content={junior_team.portableText}
                  categorie={junior_team.categories}
                  imgPath={junior_team.featureimage}
                  id={junior_team._id}
                  teamState={stateChange}
                  teamOpen={teamOpen}
                />
              ))}
          </div>
        </div>

        <div className="w-full px-2 mb-[42px] mx-auto teris_screen">
          <h3 className="teris_font font-AtlasGroteskMeduim mb-3">Carpentry</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-[9px]">
            {team
              .filter((team) => team.categories === 'Carpentry')
              .map((carpentry_team, index) => (
                <TeamBox
                  key={index}
                  name={carpentry_team.name}
                  content={carpentry_team.portableText}
                  categorie={carpentry_team.categories}
                  imgPath={carpentry_team.featureimage}
                  id={carpentry_team._id}
                  teamState={stateChange}
                  teamOpen={teamOpen}
                />
              ))}
          </div>
        </div>

        <div className="w-full px-2 mb-[9px] mx-auto teris_screen">
          <h3 className="teris_font font-AtlasGroteskMeduim mb-3">Office</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-[9px]">
            {team
              .filter((team) => team.categories === 'Office')
              .map((office_team, index) => (
                <TeamBox
                  key={index}
                  name={office_team.name}
                  content={office_team.portableText}
                  categorie={office_team.categories}
                  imgPath={office_team.featureimage}
                  id={office_team._id}
                  teamState={stateChange}
                  teamOpen={teamOpen}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const team = await sanityClient.fetch(teamQuery);
  return {
    props: {
      team,
    },
  };
}
