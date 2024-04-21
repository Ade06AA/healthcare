const data = [
	{name: "Damilola Olaleye", stars: 3, about: "I have been a patient at  Med-Cury for a year now. Their resources have been very helpful to me and also, the doctors are professionals at what they do.", identity: "Patient at Med-Cury", image: "/images/damilola-olaleye.svg"},
	{name: "John Doe", stars: 3, about: "I have been a patient at  Med-Cury for a year now. Their resources have been very helpful to me and also, the doctors are professionals at what they do.", identity: "Patient at Med-Cury", image: "/images/john-doe.svg"},
	{name: "Abdul Rasaq ", stars: 3, about: "The health professionals at Med-Cury are really amazing, I would always trust them.", identity: "Patient at Med-Cury", image: "/images/abdul-rasaq.svg"},
	{name: "Mahmud Ahmad", stars: 5, about: "I have been a patient at  Med-Cury for a year now. Their resources have been very helpful to me and also, the doctors are professionals at what they do.", identity: "Patient at Med-Cury", image: "/images/mahmud-ahmad.svg"},
];


	/*
	{name: "Mahmud Ahmad", stars: 5, about: "I have been a patient at  Med-Cury for a year now. Their resources have been very helpful to me and also, the doctors are professionals at what they do.", identity: "Patient at Med-Cury", image: dynamic(()=> import("/public/images/mahmud-ahmad.svg"), {loading: ()=> "",})},
];
*/

export default function Getreviews( amount ){
	return (data.slice(0,amount));
}
