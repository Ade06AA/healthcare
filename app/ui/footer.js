import Link from 'next/link';
import Socials from './socials';

export default function Footer() {
	const styleH3 = "font-[700] text-[30px] md:text-[38px]";
	const styleLink = "font-[400] text-[15px] md:text-[20.6px]";
	return (
		<footer className="grid grid-cols-3 gap-[50px] bg-[#0078D4] w-screen p-[30px] md:p-[77px] justify-itemis-stretch text-[#FFFFFF]">
			<div className="row-start-2 md:row-start-1   md:col-start-1 col-span-7 border-t w-full h-[0px] border-[#FFFFFF]"></div>
			<div className="row-start-3 md:row-start-2 col-start-3 md:col-start-2 col-span-3 md:col-span-2 flex flex-col content-center justify-center text-center">
				<h4 className=" font-[500] md:font-[700] text-right text-[7px] m-auto md:text-[28.8px]">All Rights Reserved</h4>
				<Socials/>
			</div>
			<div className="row-start-1 md:col-start-1">
				{/*<h3 className="text-[700] text-[36px] md:text-[30.6px]">Company</h3>*/}
				<h3 className={ styleH3 }>Company</h3>
				<Link key="" href="here"  className={ styleLink }>
					<p className="">About Us</p>
				</Link>
				<Link key="" href="here"  className={ styleLink }>
					<p className="">Team</p>
				</Link>
				<Link key="" href="here"  className={ styleLink }>
					<p className="">Blog</p>
				</Link>
			</div>
			<div className="row-start-1 col-start-5 col-span-3">
				<h3 className={ styleH3 }>Resources</h3>
				<Link key="" href="here"  className={ styleLink }>
					<p className="">Nearby Hospitals</p>
				</Link>
				<Link key="" href="here"  className={ styleLink }>
					<p className="">Articles</p>
				</Link>
				<Link key="" href="here"  className={ styleLink }>
					<p clasName="">Media</p>
				</Link>
			</div>
		</footer>
	);
}


{/*
export default function Footer() {
	return (
		<footer className="bg-[#0078D4] h-[644.4px] p-22">
			<div className="bg-[#0078D4]  mx-44 my-40 mt-20 border-t-[1px] border-[#FFFFFF] grid grid-cols-5 gap-1">
				<div className="col-start-3 flex flex-col content-center justify-center">
					<h3 className="text-[500] md:text-[700] text-[20px] md:text-[19.8px]">All Rights Reserved</h3>
					<Socials/>
				</div>
				<div className="col-start-1">
					<h3 className="text-[700] text-[36px] md:text-[30.6px]">Company</h3>
					<Link key="" href="here"  className="text-[400] text-[20px] md:text-[12.6px]">
						<p className="">About Us</p>
					</Link>
					<Link key="" href="here"  className="text-[400] text-[20px] md:text-[12.6px]">
						<p className="">Team</p>
					</Link>
					<Link key="" href="here"  className="text-[400] text-[20px] md:text-[12.6px]">
						<p className="">Blog</p>
					</Link>
				</div>
				<div className="col-start-5">
					<h3 className="text-[700] text-[36px] md:text-[30.6px]">Resources</h3>
					<Link key="" href="here"  className="text-[400] text-[20px] md:text-[12.6px]">
						<p className="">Nearby Hospitals</p>
					</Link>
					<Link key="" href="here"  className="text-[400] text-[20px] md:text-[12.6px]">
						<p className="">Articles</p>
					</Link>
					<Link key="" href="here"  className="text-[400] text-[20px] md:text-[12.6px]">
						<p clasName="">Media</p>
					</Link>
				</div>
			</div>
		</footer>
	);
}
	*/}
