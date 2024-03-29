import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import Scrollsection from "@/components/Scrollsection";
import Testimonal from "@/components/Testimonal";
import Webinar from "@/components/Webinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection />
     <Featured/>
     <Scrollsection/>
     <Testimonal/>
     <Webinar/>
     <Instructors/>
     <Footer/>
    </main>
  );
}
