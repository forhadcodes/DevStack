import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        
        <nav className='flex justify-between mt-3'>
            <div className=' container mx-auto flex justify-between'>
                <img src={Logo} alt="" />
            <ul className='flex gap-8 items-center'>
                <li className='text-[#d91b7e]'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul className='flex gap-8 items-center'>
                <li>Sign In</li>
                <button className="btn btn-secondary rounded-4xl">Sign Up</button>
            </ul>
            </div>
        </nav>
    );
};

export default Nav;