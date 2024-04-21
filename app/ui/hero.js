import HeroFooter from './heroFooter';
import HeroAbout from './heroAbout';
import HeroImage from './heroImage';

export default function Hero() {
	return (
		<div>
			<div className="flex md:flex-col-reverse lg:flex-row justify-between items-start md:items-center lg:items-start relative">
				<HeroAbout/>
				<div className="static -resizei-none -overflow-scroill ml-[70px] md:w-[500px] lg:w-[2500px] -h-[906px]">
					<HeroImage/>
				</div>
			</div>
			<HeroFooter/>
		</div>
	);
}
