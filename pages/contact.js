import React from 'react';

export default function Contact() {
  return (
    <section>
      <div className="teris_screen w-full mx-auto  md:pb-5  px-2 h-[80vh] flex flex-col justify-between">
        <div className="grid gap-[42px]">
          <ul>
            <li className="teris_font font-AtlasGroteskRegular">
              Terris & Company General Contractors Ltd.
            </li>
            <li className="teris_font font-AtlasGroteskRegular">
              facilitating design intent™
            </li>
          </ul>
          <ul>
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
          <ul>
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

          <ul>
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

          <ul>
            <li className="teris_font font-AtlasGroteskRegular underline">
              <a href="https://www.google.com" target="_blank" rel="noreferrer">
                Client Portal
              </a>
            </li>
          </ul>
          <ul>
            <li className="teris_font font-AtlasGroteskRegular underline">
              <a href="/keynote.pdf" target="_blank" rel="noreferrer">
                Onboarding Keynote
              </a>
            </li>
          </ul>

          <ul>
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
  );
}
