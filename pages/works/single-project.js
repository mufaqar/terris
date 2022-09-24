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

export default function SingleProject() {
  return (
    <>
      <section>
        <div className="container md:w-7/12 w-full mx-auto md:pt-10 md:pb-5 py-8 px-2">
          <div className="md:text-[1.375rem] text-[0.813rem]">
            <h3 className="font-AtlasGroteskMeduim">Union Street</h3>
            <p className="font-AtlasGroteskRegular">MA+HG</p>
            <p className="font-AtlasGroteskRegular">
              Restoration + In-fill Building
            </p>
          </div>
        </div>

        <div className="gallery container md:w-7/12 w-full mx-auto px-2">
          <div className="grid gap-3">
            <Image src={Gallery1} alt=""></Image>
            <Image src={Gallery2} alt=""></Image>
            <Image src={Gallery3} alt=""></Image>
            <Image src={Gallery4} alt=""></Image>
            <Image src={Gallery5} alt=""></Image>
            <Image src={Gallery6} alt=""></Image>
            <Image src={Gallery7} alt=""></Image>
            <Image src={Gallery8} alt=""></Image>
            <Image src={Gallery9} alt=""></Image>
            <Image src={Gallery10} alt=""></Image>
            <Image src={Gallery11} alt=""></Image>
          </div>
        </div>

        <div className="container md:w-7/12 w-full mx-auto py-5 px-2 grid gap-7">
          <ul className="md:text-xl text-[0.813rem]">
            <li className="font-AtlasGroteskRegular">Vancouver, BC</li>
            <li className="font-AtlasGroteskRegular">2020</li>
            <li className="font-AtlasGroteskRegular">5800 sqft</li>
          </ul>

          <ul className="md:text-xl text-[0.813rem]">
            <li className="font-AtlasGroteskMeduim">Project highlights</li>
            <li className="font-AtlasGroteskRegular">
              Five-unit stratified infill building
            </li>
            <li className="font-AtlasGroteskRegular">
              Original house lifted and restored
            </li>
            <li className="font-AtlasGroteskRegular">
              Custom, full metal stairs welded on-site
            </li>
            <li className="font-AtlasGroteskRegular">Steel deck canopy</li>
            <li className="font-AtlasGroteskRegular">
              Triangle roof framing in the attic
            </li>
          </ul>

          <ul className="md:text-xl text-[0.813rem]">
            <li className="font-AtlasGroteskMeduim">Featured In</li>
            <li className="font-AtlasGroteskRegular">
              <a
                href="https://www.canadianarchitect.com/united-front-union-vancouver-british-columbia"
                target="_blank"
                rel="noreferrer"
              >
                Canadian Architect
              </a>
            </li>
            <li className="font-AtlasGroteskRegular">
              <a
                href="https://www.westernliving.ca/homes-and-design/homes/inside-a-beautiful-vancouver-renovation-that-plays-with-shape-and-colour"
                target="_blank"
                rel="noreferrer"
              >
                Western Living Magazine
              </a>
            </li>
          </ul>

          <ul className="md:text-xl text-[0.813rem]">
            <li className="font-AtlasGroteskMeduim">Collaborators</li>
            <li className="font-AtlasGroteskRegular">
              General Contracting: Reece Terris, Dino Fulyan
            </li>
            <li className="font-AtlasGroteskRegular">Architect: MA+HG</li>
            <li className="font-AtlasGroteskRegular">
              Landscape Architecture: Thales Muniz, Young Woo, Duncan Brazzil
            </li>
            <li className="font-AtlasGroteskRegular">
              Geotechnical Engineer: Giordano Caldas
            </li>
            <li className="font-AtlasGroteskRegular">
              Structural Engineer: Nicholas Schröder, Elisa
            </li>
            <li className="font-AtlasGroteskRegular">Bortolini</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="conteiner md:w-7/12 w-full mx-auto px-2 border-t-2 border-[#F5F5F5]">
          <WorkBox
            title="Union Street"
            detail="MA+HG"
            info="Restoration + In-fill Building"
          />
          <WorkBox
            title="Union Street"
            detail="MA+HG"
            info="Restoration + In-fill Building"
          />
          <WorkBox
            title="Union Street"
            detail="MA+HG"
            info="Restoration + In-fill Building"
          />
          <WorkBox
            title="Union Street"
            detail="MA+HG"
            info="Restoration + In-fill Building"
          />
          <WorkBox
            title="Union Street"
            detail="MA+HG"
            info="Restoration + In-fill Building"
          />
        </div>
      </section>
    </>
  );
}
