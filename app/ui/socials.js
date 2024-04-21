'use client'
import Image from 'next/image';
import twitterIcon from '/public/images/x.svg';
import instagrameIcon from '/public/images/inatagrame.svg';
import linkedinIcon from '/public/images/linkedin.svg';
import Link from 'next/link';

export default function Socials(){
	const images = [twitterIcon, linkedinIcon, instagrameIcon];
	let socials = [];
	images.forEach((image)=>{socials.push(
		<Link key="socials" href="#">
			<Image src={image}  alt="linkedin" className="w-[16px] h-[16px] md:w-[25px] md:h-[25px]" />
		</Link>
	);});
	return (
		<div className="flex justify-between m-auto p-[10px] gap-[40px] -w-[384px] -h-[38px]">
			{ socials }
		</div>
	);
}
