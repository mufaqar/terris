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
    detail,
    categories,
    _id
}`;

export default function About({ team }) {
  const [teamOpen, setTeamOpen] = useState(null);

  const stateChange = (id) => {
    setTeamOpen(id);
  };
  return (
    <>
      <section>
        <div className="container w-full px-2 pb-10 mx-auto lg:w-7/12">
          <div className="md:w-[39.938rem] w-full ">
            <p className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
              Facilitating design intent across residential dwelling typologies
              in British Columbia’s lower mainland.
            </p>
          </div>
        </div>

        <div className="container w-full px-2 pb-10 mx-auto lg:w-7/12">
          <h3 className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim mb-3">
            Senior Project Management
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[9px]">
            {team
              .filter((team) => team.categories === 'Senior Project Management')
              .map((senior_team, index) => (
                <TeamBox
                  key={index}
                  name={senior_team.name}
                  detail={senior_team.detail}
                  categorie={senior_team.categories}
                  id={senior_team._id}
                  imgPath={senior_team.featureimage}
                  teamState={stateChange}
                  teamOpen={teamOpen}
                />
              ))}
          </div>
        </div>

        <div className="container w-full px-2 pb-10 mx-auto md:w-7/12">
          <h3 className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim mb-3">
            Junior Site Management
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[9px]">
            {team
              .filter((team) => team.categories === 'Junior Site Management')
              .map((junior_team, index) => (
                <TeamBox
                  key={index}
                  name={junior_team.name}
                  detail={junior_team.detail}
                  categorie={junior_team.categories}
                  imgPath={junior_team.featureimage}
                  id={junior_team._id}
                  teamState={stateChange}
                  teamOpen={teamOpen}
                />
              ))}
          </div>
        </div>

        <div className="container w-full px-2 pb-10 mx-auto md:w-7/12">
          <h3 className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim mb-3">
            Carpentry
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[9px]">
            {team
              .filter((team) => team.categories === 'Carpentry')
              .map((carpentry_team, index) => (
                <TeamBox
                  key={index}
                  name={carpentry_team.name}
                  detail={carpentry_team.detail}
                  categorie={carpentry_team.categories}
                  imgPath={carpentry_team.featureimage}
                  id={carpentry_team._id}
                  teamState={stateChange}
                  teamOpen={teamOpen}
                />
              ))}
          </div>
        </div>

        <div className="container w-full px-2 pb-10 mx-auto md:w-7/12">
          <h3 className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim mb-3">
            Office
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[9px]">
            {team
              .filter((team) => team.categories === 'Office')
              .map((office_team, index) => (
                <TeamBox
                  key={index}
                  name={office_team.name}
                  detail={office_team.detail}
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
