import Image from 'next/image';
import Doctor from '/public/images/b-363.svg';


export default function HeroImage(){
	return (
		<Image
			layout='responsive'
			src={ Doctor }
			className="rounded-[21px] bg-[#0078D4] border-[5px] border-black-900 lg:border-[0px] hidden md:block -h-[900px] -w-[300px]"
			alt="This s the hero image"
		/>
	);
}

/*
export default function HeroImage(){
	return (
		<Image
			fill
			src={Doctor}
			objiectFit="cover"
			className="rounded-[21px] bg-[#0078D4] hidden md:block object-cover h-full w-full top-0 left-0 "
			alt="This s the hero image"
		/>
	);
}
*/
