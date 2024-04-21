import Image from "next/image";
import Hero from './ui/hero';
import Reviews from './ui/reviews';
import Footer from './ui/footer';
import Header from './ui/header';
import Whychooseus from './ui/whychooseus';

export default function Home() {
  return (
    <main className="min-h-screen w-screen 8flex-col 8items-center 8justify-between  bg-[#FFF]">
      <Header/>
      <div className="p-[30px] md:p-[77px]">
        <Hero/>
        <Whychooseus/> 
        <Reviews/>
      </div>
      <Footer/> 
    </main>
  );
}
