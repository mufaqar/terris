import TeamBox from "../components/teamBox";


export default function About() {
    return (
        <>
            <section>
                <div className='container md:w-7/12 w-full mx-auto pb-10 px-2'>
                    <div className="md:w-[39.938rem] w-full ">
                        <p className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskRegular'>Facilitating design intent across residential dwelling typologies in British Columbia’s lower mainland.</p>
                    </div>
                </div>

                <div className='container md:w-7/12 w-full mx-auto pb-10 px-2'>
                    <h3 className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim mb-3'>Senior Project Management</h3>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[9px]">
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                    </div>
                </div>

                <div className='container md:w-7/12 w-full mx-auto pb-10 px-2'>
                    <h3 className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim mb-3'>Junior Site Management</h3>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[9px]">
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                        <TeamBox />
                    </div>
                </div>
                
                <div className='container md:w-7/12 w-full mx-auto pb-10 px-2'>
                    <h3 className='lg:text-[1.063rem] lg:leading-[1.375rem] md:text-[0.938rem] md:leading-[1.25rem] text-[0.813rem] leading-[1.125rem] font-AtlasGroteskMeduim mb-3'>Carpentry</h3>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[9px]">
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
