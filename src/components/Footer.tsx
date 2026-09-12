import LogoImg from '../assets/logo-text.png'
const Footer = () => {
    return (
        <footer className='container mx-auto mt-20 mb-10'>
            <div className='flex gap-60 '>
                <div className='flex flex-col gap-4'>
                    <img className= 'w-32 h-12' src={LogoImg} alt="" />
                    <p>Curated tools, technologies, and resources for developers building modern software.</p>
                    <div>
                        <ul className='flex flex-row gap-4'>
                            <li>Github</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col gap-4 bold'> <b>PRODUCT</b>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-4'><b>COMPANY</b>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-4 max-w-sm'> <b>LEGAL</b>
                        <li>Privacy Policy</li>
                        <li>Terms of Services</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;