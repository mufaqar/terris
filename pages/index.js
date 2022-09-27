import { sanityClient } from '../lib/sanityClient';
import WorkBox from '../components/workBox';

// sanity Queries
const projectQuery = `*[_type == "projects"]{
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
}`;

export default function Home({ projects }) {
  return (
    <>
      <section>
        <div className="w-full px-2 mx-auto conteiner xl:w-[70%]">
          {projects.map((project, index) => (
            <WorkBox
              title={project.title}
              tag={project.tag}
              type={project.type}
              featureImage={project.featureimage}
              key={index}
              slug={project.slug.current}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectQuery);
  return {
    props: {
      projects,
    },
  };
}
