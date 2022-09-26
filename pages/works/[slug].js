import Image from 'next/image';
import Gallery1 from '../../public/images/union/1.webp';
import Gallery2 from '../../public/images/union/2.webp';
import Gallery3 from '../../public/images/union/3.webp';
import Gallery4 from '../../public/images/union/4.webp';
import Gallery5 from '../../public/images/union/5.webp';
import Gallery6 from '../../public/images/union/6.webp';
import Gallery7 from '../../public/images/union/7.webp';
import Gallery8 from '../../public/images/union/8.webp';
import Gallery9 from '../../public/images/union/9.webp';
import Gallery10 from '../../public/images/union/10.webp';
import Gallery11 from '../../public/images/union/11.webp';
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
        <div className="container md:w-7/12 w-full mx-auto pb-[9px] px-2">
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

        <div className="container w-full px-2 mx-auto gallery md:w-7/12">
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

        <div className="container md:w-7/12 w-full mx-auto pt-[9px] px-2  grid gap-7">
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
        <div className="w-full px-2 mx-auto conteiner md:w-7/12 ">
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
