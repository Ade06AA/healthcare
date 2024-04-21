import Image from 'next/image';
import Menubar from '/public/images/menu.svg';
import Link from 'next/link';
import arrowDown from '/public/images/chevron-down.svg';

export default function header(){
	return (
		<header className="">
			<div className="-hiddein -md:inline-block px-[77px] grid grid-col-3 content-start justify-items-center">
				<div className="col-start-2 flex gap-5">
					<div className="flex items-center">
						<strong>Home</strong>
						<Image src={arrowDown} alt="^" height={28} width={28}/>
					</div>
					<div className="flex items-center">
						<strong>Services</strong>
						<Image src={arrowDown} alt="^" height={28} width={28}/>
					</div>
					<div className="flex items-center">
						<strong>Find A Doctor</strong>
						<Image src={arrowDown} alt="^" height={28} width={28}/>
					</div>
					<div className="flex items-center">
						<strong>Contact Us</strong>
						<Image src={arrowDown} alt="^" height={28} width={28}/>
					</div>
				</div>
				<div className="col-start-3  justify-self-end p-3">
					<Link href="#" key="getting starte" className="">
						<p className="font-[700] text-[18px] bg-[#0078D4] border-[10px] border-[#0078D4] mt-[10px]] rounded-[12px] text-[#FF1] -w-[20px] -h=a-[] -p-[8px]">
							Get Started
						</p>
					</Link>
				</div>
			</div>
			<div className="p-[30px] md:px-[77px] flex justify-between">
				<Link href="#" key="home">
					<h3 className="font-[700] text-[20px] text-[#0078D4] hover:text-[25px]">MEDCURY</h3>
				</Link>
				<div>
					<Image src={ Menubar } alt="##\n##" className="md:hidden w-[45px] h-[45px] hover:w-[50px] hover:h-[50px] hover:bg-[#FFE]"/>
					<div>
					</div>
				</div>
			</div>
		</header>
	);
}
