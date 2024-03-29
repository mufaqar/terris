import Head from 'next/head';
import Link from 'next/link';

function NavLink({ to, children }) {
  return (
    <a href={to} className={``}>
      {children}
    </a>
  );
}

export default function Header() {
  return (
    <>
      <Head>
        <title>Terris & Company</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Terris & Company is a fully accredited general contracting firm engaging in custom residential projects, including new construction, renovations, additions and restorations"
        />
      </Head>

      <nav className="mb-[84px] md:mb-[168px]">
        <div className="teris_screen w-full mx-auto teris_font_menu  font-AtlasGroteskRegular font-normal mt-[9px] md:mt-[21px] px-2 flex md:flex-col justify-between">
          <Link href="/about">
            <a className="md:order-last"> About</a>
          </Link>
          <Link href="/">
            <a className="md:order-first"> Terris & Company </a>
          </Link>
          <Link href="/contact">
            <a className="md:order-last"> Contact</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
