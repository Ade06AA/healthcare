'use client'
import { useState } from 'react';
import Image from 'next/image';
import People from '/public/images/people.svg';
import Download from '/public/images/download-cloud.svg';
import Worker from '/public/images/healthicons_doctor-male-outline.svg';

/*
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { CloudArrowDownIcon } from '@heroicons/react/24/outline';
*/

/*
*/

export default function HeroFooter(){
	const [getStat, setStat] = useState({
		patients: 16000,
		Hworkers: 2000,
		downloads: 50000,
	});
	const { patients, Hworkers, downloads } = getStat;
	const styleDiv1 = "flex flex-col items-start md:items-center justify-between";
	const styleP1 = "font-[500] text-[24px] md:text-[700] md:text-[21.6px]";
	return (
		<div className="flex justify-between bg-white">
			<div className={ styleDiv1 }>
				<Image src={People} alt="teiimp" height={43.2} width={43.2}/>
				<strong className="hidden md:block md:text-[28.8px]">{ (patients < 999) ? `${patients}` : `${patients /1000}K` }</strong>
				<strong className="text-[36px] md:hidden">{ (patients < 999) ? `${ patients }` : patients.toString().slice(0,-3) + ',' + patients.toString().slice(-3) }</strong>
				<p className={ styleP1 }>Treated Patients</p>
			</div>
			<div className={ styleDiv1 }>
				<Image src={ Worker } alt="teiimp" height={43.2} width={43.2}/>
				<strong className="hidden md:block md:text-[28.8px]">{ (Hworkers < 999) ? `${ Hworkers }` : `${Hworkers /1000}K` }</strong>
				<strong className="text-[36px] md:hidden">{ (Hworkers < 999) ? `${ Hworkers }` : Hworkers.toString().slice(0,-3) + ',' + Hworkers.toString().slice(-3) }</strong>
				<p className={ styleP1 }>Health Professionals</p>
			</div>
			<div className={ styleDiv1 }>
				<Image src={ Download } alt="teiimp" height={43.2} width={43.2}/>
				<strong className="hidden md:block md:text-[28.8px]">{ (downloads < 999) ? `${ downloads }` : `${ downloads /1000}K` }</strong>
				<strong className="text-[36px] md:hidden">{ (downloads < 999) ? `${ downloads }` : downloads.toString().slice(0,-3) + ',' + downloads.toString().slice(-3) }</strong>
				<p className={ styleP1 }>Resource Downloads</p>
			</div>
		</div>
	);
}
