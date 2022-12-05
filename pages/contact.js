import React from 'react';
import { sanityClient } from '../lib/sanityClient';
// sanity Queries
const contactQuery = `*[_type == "contactus"]{  
  client,
  _id,
  keynote{
    asset->{
      url
    },
  },
}`;

export default function Contact({ contactUs }) {
  const { client, keynote } = contactUs[0];

  return (
    <>
      <section>
        <div className="teris_screen w-full mx-auto  md:pb-5  px-2 h-[80vh] flex flex-col justify-between">
          <div className="grid gap-[42px]">
            <ul className="">
              <li className="teris_font font-AtlasGroteskRegular">
                Terris & Company General Contractors Ltd.
              </li>
              <li className="teris_font font-AtlasGroteskRegular">
                facilitating design intent™
              </li>
            </ul>

            <ul className="">
              <li className="teris_font font-AtlasGroteskRegular">
                853 Union Street
              </li>
              <li className="teris_font font-AtlasGroteskRegular">
                Vancouver, BC
              </li>
              <li className="teris_font font-AtlasGroteskRegular">
                Canada V6A 2C5
              </li>
            </ul>

            <ul className="">
              <li className="teris_font font-AtlasGroteskRegular ">
                <a href="tel:+16045355323" rel="noreferrer">
                  +1 604 535 5323
                </a>
              </li>
              <li className="teris_font font-AtlasGroteskRegular underline">
                <a href="mailto:rterris@terrisco.com" rel="noreferrer">
                  rterris@terrisco.com
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="teris_font font-AtlasGroteskRegular underline">
                <a
                  href="https://www.instagram.com/terris.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="teris_font font-AtlasGroteskRegular underline">
                <a href={client} target="_blank" rel="noreferrer">
                  <span className="mr-[9px]">Client Portal</span>
                </a>
              </li>
            </ul>
            <ul className="">
              <li className="teris_font font-AtlasGroteskRegular underline">
                <a href={keynote.asset.url} target="_blank" rel="noreferrer">
                  <span className="mr-[9px]">Onboarding Keynote</span>
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="teris_font font-AtlasGroteskRegular underline">
                <a
                  href="https://www.makerbros.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  A nice one by Maker Brothers Worldwide®
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const contactUs = await sanityClient.fetch(contactQuery);
  return {
    props: {
      contactUs,
    },
  };
}
