import Head from 'next/head';

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

      <nav className="mb-[82px]">
        <div className="xl:w-[70%] w-full mx-auto lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular font-normal pt-[21px] px-2 flex justify-between">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Terris & Company</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </>
  );
}
