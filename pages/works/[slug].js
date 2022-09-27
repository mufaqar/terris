import WorkBox from '../../components/workBox';
import { sanityClient } from '../../lib/sanityClient';
import OwnImage from '../../components/OwnImage';

const projectSlugQuery = `*[_type == "projects" && slug.current == $slug][0]{
  tag,
  title,
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
      <section>
        <div className=" xl:w-[70%] w-full mx-auto pb-[9px] px-2">
          <div className="">
            <h3 className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim">
              {project.title}
            </h3>
            <p className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
              {project?.tag}
            </p>
            <p className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
              {project.type}
            </p>
          </div>
        </div>

        <div className=" w-full px-2 mx-auto gallery xl:w-[70%]">
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
        <div className="relative xl:w-[70%] w-full mx-auto pt-[9px] px-2 gap-7">
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              src="https://player.vimeo.com/video/546682148?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className=" xl:w-[70%] w-full mx-auto pt-[9px] px-2  grid gap-7">
          <ul className="">
            <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
              {project?.location}
            </li>
            <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
              {project?.year}
            </li>
            <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
              {project?.area}
            </li>
          </ul>

          <ul className="">
            <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim">
              Project highlights
            </li>
            {project.project_highlights.map((highlight, index) => (
              <li
                key={index}
                className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <ul className="">
            <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim">
              Featured In
            </li>

            {project.featured_in.map((feturedin, index) => (
              <li
                key={index}
                className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular underline hover:no-underline cursor-auto"
              >
                <a href={feturedin?.link} target="_blank" rel="noreferrer">
                  {feturedin.hading}
                </a>
              </li>
            ))}
          </ul>

          <ul className="border-b border-black mb-10 pb-[9px]">
            <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim">
              Collaborators
            </li>
            {project.Collaborators.map((colb, index) => (
              <li
                key={index}
                className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular"
              >
                {colb}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="w-full px-2 mx-auto conteiner xl:w-[70%] ">
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
