import Getreviews from '../lib/getreviews';
import Image from 'next/image';
import Star from '/public/images/Star 1.svg';

function Review({ props }){
	let stars =[]  /* [<Image src={ Star } alt="" height={20} width={20}/>];*/
	for (let i=0; i < props.stars; i++) {
		stars.push(<Image src={ Star } alt="" height={20} width={20} />);
	}
	return (
		<div className="flex flex-col -gap-5 p-[1px] bg-[#0078D4] rounded-[9.6px] w-[200px] md:w-[324px] min-h-[200px] md:h-[375.6px] justify-between -content-between">
			<div className="flex relative top-0 p-[19px]">
				{ stars }
			</div>
			{/* all font size multiplied by 2 */}
			<p className="justify-self-start font-[500] text-[10px] -md:text-[7.2px] md:text-[14.4px] p-[19.2px]">{ props.about }</p>
			<div className="absolutie bottom-0 p-[19.2px] flex gap-3">
				<Image src={props.image} height={38} width={38} alt="Profile Image w-[20px] md:w-[38px] h-[20px] md:h-[38px]" />
				<div>
					<h4 className="font-[700] text-[9px] -md:text-[9px] md:text-[18px] ">{ props.name }</h4>
					<p className="font-[400] text-[6.1px] -md:text-[5.4px] md:text-[10.8px]">{ props.identity }</p>
				</div>
			</div>
		</div>
	);
}

export default function Reviews(){
	let reviews = Getreviews(5);
	let reviewsList = [];
	reviews.forEach((data) => {
		reviewsList.push(<Review props={ data }/>);
	});
	return (
		<div className="flex -flex-cols-2 -flex-rows-2 flex-iwrap md:flex-col-5 overflow-scroll gap-1 md:gap-5 text-[#FFFFFF]">
			{ reviewsList }
		</div>
	);
}
