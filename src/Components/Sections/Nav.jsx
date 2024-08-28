import navLogo from '../../assets/Logo.png'

export default function Nav() {
    return (
        <section className='max-w-[90%] w-[1440px] mx-auto p-3'>
            {/* Nav Container */}
            <div className='flex justify-between mt-8 '>
                {/* Logo */}
                <div className='flex gap-1 items-center font-medium'>
                    <img src={navLogo} alt="Logo" />
                    <h1 className='text-[30px]'>Navigo</h1>
                </div>

                {/* Nav Pages */}
                <div className='flex items-center'>
                    <ul className='flex gap-3 items-center'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact us Button */}
                <div>
                    <button onClick={() => location.href=''} className="btn bg-blue-800 text-white hover:bg-black duration-1000 ">Contact US</button>
                </div>
            </div>
        </section>
    )
}