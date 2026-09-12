import BannerImg from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex items-center justify- container mx-auto mt-20 gap-10'>
            <div className='flex flex-col justify-center gap-8'>
                <h1 className='font-extrabold text-7xl'>Build Your Ideal <br /> <span className="bg-gradient-to-r from-[#fe5525] to-purple-600 bg-clip-text text-transparent">Development Stack</span></h1>
                <h4 className='text-3xl'>Explore frontend, backend, database, and tooling options, <br />compare them side by side, and put together the stack that fits your <br />next project.</h4>
                <div className='gap-7'>
                    <button className="btn btn-active btn-secondary bg-gradient-to-r from-[#fe5525] to-purple-600 ">Explore Technologies</button>
                    <button className="btn btn-wide ml-4">Learn More</button>
                </div>
            </div>
            <div className='justify-center align-center'>
                <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;