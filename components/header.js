import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

function NavLink({ to, children }) {
    return <a href={to} className={``}>
        {children}
    </a>
}

export default function Header() {

    return (
        <>
            <Head>
                <title>Terris & Company</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <nav className="">
                <div className="container md:w-7/12 w-full mx-auto md:text-[1.375rem] text-[0.813rem] font-normal md:py-8 py-4 px-2 flex justify-between">
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/">
                        Terris & Company
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </div>
            </nav>

        </>
    )
}
