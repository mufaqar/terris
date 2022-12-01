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
      </Head>

      <nav className="mb-[84px] md:mb-[168px]">
        <div className="xl:w-[70%] w-full mx-auto lg:text-[1.063rem]  md:text-[0.938rem] md:leading-[24px] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular font-normal mt-[9px] px-2 flex md:flex-col justify-between">
          <Link href="/about">
            <a className="md:order-last"> About</a>
          </Link>
          <Link href="/">
            <a className="md:order-first"> Terris & Company </a>
          </Link>
          <Link href="/contact">
            <a> Contact</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
