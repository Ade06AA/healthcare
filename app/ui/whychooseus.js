import Image from 'next/image';
import Resources from '/public/images/b-367.svg';
import Personel from '/public/images/b-368.svg';
import Professionals from '/public/images/b-369.svg';
import Secure from '/public/images/b-375.svg';

const data = [
	{ heading:"All-in-one Health Resources", content: "We offer a large library of medically reviewed articles, videos, and tools to empower you with accurate health information", image: Resources},
	{ heading: "PersonalizedHealth Insights", content: "Get personalized health recommendations based on your health profile. Our algorithms analyze your data to provide tailored guidance for a healthier lifestyle.", image: Personel },
	{ heading: "Connect with Top Healthcare Professionals", content: "Access a network of experienced doctors, specialists, and therapists for virtual consultations and second opinions. Your health is our priority.", image: Professionals },
	{ heading: "Secure Health Data Management", content: "Trust us with your health data. We employ cutting-edge security measures to ensure your personal health information is safeguarded at all times ", image: Secure },
];

function Subcomponent({ props }){
	return (
		<div className="flex relative flex-col-reverse bg-[#F2F2F2] md:bg-[#FFFFFF] my-[20px] md:my-[40px]  rounded-[10px] md:rounded-[0px] md:flex-row justify-between">
			<div className="p-[20px] pt-[3px]">
				<h1 className="font-[700] text-[36px] md:text-[48px] -bg-red-900 my-[14.5px]">{ props.heading }</h1>
				<p className="font-[500] text-[20px] md:text-[21.6px] mx-[4.5px] my-[2.25px]">{ props.content }</p>
			</div>
			<Image src={ props.image }  alt="temp" ilayout="responsive" iiheight={ 500 } iiwidth={ 500 } className="bg-[#ADD8E6] rounded-top-[10px] md:rounded-[12px]  w-full md:w-[45%] h-auto right-0"/>
		</div>
	);
}

export default function Whychooseus(){
	let whychooseus = [];
	data.forEach((item)=>{
		whychooseus.push(<Subcomponent props={ item } />);
	});

	return (
		<div>
			<div className="md:text-center">
				<h2 className="hidden md:block font-[700] text-[43.2px] p-[5px] my-[0px] mt-[40px]">Why Choose Us</h2>
				<h2 className="md:hidden font-[700] text-[36px] p-[5px] my-[0px] mt-[40px]">What you get from us</h2>
			</div>
			{ whychooseus }
		</div>
	);
}
