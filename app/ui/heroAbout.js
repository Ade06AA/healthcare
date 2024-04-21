import  Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import ArrowRightIcon from '/public/images/arrow-right.svg';


export default function HeroAbout(){
	let links = []
	let linksdata = [
		{name: "get_started", href: '#', style: "A"},
		{name: "view resources", href: "#", style: "B"}
	]
	linksdata.forEach(
		(item) => {
			links.push(
				<Link key={item.name} href={item.href} className={clsx("flex bg-[#0078D4] border-[1px] border-[#173145] p-[10px] lg:p-[6px]  m-2 ml-[0px] rounded-md", {'border-[0px] bg-blue border-[#000000] text-white': item.style === "A", 'bg-white': item.style === "B"})}>
					<p className="font-[500] text-[20px] md:text-[21.6px]">{ item.name }</p>
					{(item.style === "A") ? <Image src={ ArrowRightIcon } height={28} width={28} alt="->"/> : ""}
				</Link>
			);
		}
	);
	return (
		<div>
			<div className="">
				<h3 className="font-[600] text-[60px] md:text-[45.4px]">We offer  you Comprehensive Health Resources</h3>
				<p className="font-[500] text-[24px] md:text-[26.6px]">
					We provide comprehensive health resources to empower your well-being. Access nearby  hospitals, discover golden health tips and also explore informative guidance on your health from our healthcare professionals.
				</p>
			</div>
			<div className="flex">
				{ links }
			</div>
		</div>
	);
}
