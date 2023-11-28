import Hero from "@/app/components/Hero";
import VideoScrollAnimation from "./components/VideoScrollAnimation";
import CardSection from "./components/CardSection";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24">
      <Hero />

      {/* <VideoScrollAnimation /> */}
      <CardSection />
    </main>
  );
}
