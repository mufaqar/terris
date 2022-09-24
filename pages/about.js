import TeamBox from "../components/teamBox";


export default function About() {
    return (
        <>
            <section>
                <div className='container md:w-7/12 w-full mx-auto md:pt-10 md:pb-5 py-8 px-2'>
                    <div className="md:w-[39.938rem] w-full ">
                        <p className='font-normal md:text-[1.375rem] text-[0.813rem]'>Facilitating design intent across residential dwelling typologies in British Columbia’s lower mainland.</p>
                    </div>
                </div>

                <div className='container md:w-7/12 w-full mx-auto md:pt-10 md:pb-5 py-8 px-2'>
                    <h3 className='font-medium md:text-[1.375rem] text-[0.813rem] mb-3'>Senior Project Management</h3>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                    </div>
                </div>

                <div className='container md:w-7/12 w-full mx-auto md:pt-10 md:pb-5 py-8 px-2'>
                    <h3 className='font-medium md:text-[1.375rem] text-[0.813rem] mb-3'>Junior Site Management</h3>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                    </div>
                </div>
                
                <div className='container md:w-7/12 w-full mx-auto md:pt-10 md:pb-5 py-8 px-2'>
                    <h3 className='font-medium md:text-[1.375rem] text-[0.813rem] mb-3'>Carpentry</h3>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                    </div>
                </div>
            </section>
        </>
    )
}
