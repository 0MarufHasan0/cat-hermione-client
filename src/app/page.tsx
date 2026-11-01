
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ImpactStats } from "@/components/impact-stats";
import { MomentsGallery } from "@/components/moments-gallery";
import { Testimonials } from "@/components/testimonials";
import { StayConnected } from "@/components/stay-connected";
import UpcomingEvent from "@/components/upcomingEvents";


export default function Home() {
  return (
    <>
      <Hero />

      <HowItWorks />
      <UpcomingEvent/>
    
      <ImpactStats />
      <MomentsGallery />
      <Testimonials />
      <StayConnected />
      {/* <Suspense fallback={null}>
   
      </Suspense> */}
    </>
  );
}
