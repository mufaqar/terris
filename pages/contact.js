import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <>
      <section>
        <div className="container xl:w-7/12 w-full mx-auto  md:pb-5  px-2 h-[80vh] flex flex-col justify-between">
          <div className="grid gap-7">
            <ul className="">
              <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
                Terris & Company General Contractors
              </li>
              <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
                facilitating design intent™
              </li>
            </ul>

            <ul className="">
              <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
                853 Union Street
              </li>
              <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
                Vancouver, BC
              </li>
              <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
                Canada V6A 2C5
              </li>
            </ul>

            <ul className="">
              <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
                <a href="tel:+16045355323" rel="noreferrer">
                  +1 604 535 5323
                </a>
              </li>
              <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
                <a href="mailto:rterris@terrisco.com" rel="noreferrer">
                  rterris@terrisco.com
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
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
              <li className="lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular">
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
