import WorkBox from '../../components/workBox';
import { sanityClient } from '../../lib/sanityClient';
import OwnImage from '../../components/OwnImage';

const projectSlugQuery = `*[_type == "projects" && slug.current == $slug][0]{
  tag,
  title,
  video,
  type,
  year,
  location,
  area,
  Collaborators,
  project_highlights,
  featureimage{
    asset->{
      url
    },
    caption,
  },
  gallery{
    images[]{
      asset->{
        url,
      },
      size
    }
  },
  featured_in[]{
    hading,
    link
  },
  slug{
    current
  },
  related_project[]->{
    tag,
    title,
    type,
    featureimage{
      asset->{
        url
      },
      caption,
    },
    slug{
      current
    },
  }

}`;

export default function SlugPage({ project }) {
  return (
    <>
      <section className="">
        <div className="teris_screen w-full mx-auto mb-[21px] px-2 ">
          <div className="">
            <h3 className="teris_font font-AtlasGroteskMeduim">
              {project.title}
            </h3>
            <p className="teris_font font-AtlasGroteskRegular">
              {project?.tag}
            </p>
            <p className="teris_font font-AtlasGroteskRegular">
              {project.type}
            </p>
          </div>
        </div>
        <div className="teris_screen xl:mx-auto  mb-[21px] px-2 ">
          <div className="xl:w-[70%]">
            <p className="teris_font_bigp font-AtlasGroteskRegular">
              A restoration of a hundred-plus year old heritage home and the
              addition of an infill building transformed this site from a single
              family dwelling to a five unit development for the homeowner, her
              aging mother, and her extended family. Work on this.
            </p>
          </div>
        </div>

        <div className=" w-full px-2 mx-auto gallery teris_screen">
          <div className="grid gap-[9px]">
            <OwnImage
              path={project.featureimage.asset.url}
              alt={
                project.featureimage?.caption
                  ? project.featureimage?.caption
                  : project.title
              }
            />
            {project.gallery.images.map((image, index) => (
              <OwnImage
                path={image.asset.url}
                alt={image?.caption ? image?.caption : project.title}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="relative teris_screen w-full mx-auto pt-[9px] px-2 gap-7">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://player.vimeo.com/video/${project.video}?color=ffffff&title=0&byline=0&portrait=0&badge=0`}
              width="640"
              height="360"
              frameBorder="0"
              className="bg-white"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className=" teris_screen w-full mx-auto pt-[9px] px-2  grid gap-7 mt-[42px]">
          <ul className="">
            <li className="teris_font font-AtlasGroteskRegular">
              {project?.location}
            </li>
            <li className="teris_font font-AtlasGroteskRegular">
              {project?.year}
            </li>
            <li className="teris_font font-AtlasGroteskRegular">
              {project?.area}
            </li>
          </ul>

          <ul className="">
            <li className="teris_font font-AtlasGroteskMeduim">
              Project highlights
            </li>
            {project.project_highlights.map((highlight, index) => (
              <li key={index} className="teris_font font-AtlasGroteskRegular">
                {highlight}
              </li>
            ))}
          </ul>

          <ul className="">
            <li className="teris_font font-AtlasGroteskMeduim">Featured In</li>

            {project.featured_in.map((feturedin, index) => (
              <li
                key={index}
                className="teris_font font-AtlasGroteskRegular underline hover:no-underline cursor-auto"
              >
                <a href={feturedin?.link} target="_blank" rel="noreferrer">
                  {feturedin.hading}
                </a>
              </li>
            ))}
          </ul>

          <ul className="border-b border-black pb-[42px]">
            <li className="teris_font font-AtlasGroteskMeduim">
              Collaborators
            </li>
            {project.Collaborators.map((colb, index) => (
              <li key={index} className="teris_font  font-AtlasGroteskRegular">
                {colb}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mb-[84px] ">
        <div className="w-full px-2 mx-auto conteiner teris_screen ">
          {project.related_project.map((related, index) => (
            <WorkBox
              title={related.title}
              tag={related.tag}
              type={related.type}
              featureImage={related.featureimage}
              key={index}
              slug={related.slug.current}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(`
  *[_type == "projects" && defined(slug.current)]{
       "params": {
         "slug" : slug.current
       }
     }
  `);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = await sanityClient.fetch(projectSlugQuery, { slug });
  return {
    props: {
      // data: { project },
      project,
      // preview: true
    },
  };
}
