import { ContactSection, GallerySection, HeroAboutSection, ParticleBackground, ServicesSection } from "../components";

export default function HomePage() {
  return (
    <>
      <ParticleBackground />
      <HeroAboutSection />
      <ServicesSection />
      <GallerySection />
      {/* <TestimonialsSection /> */}
      {/* <SocialFeedSection /> */}
      <ContactSection />
    </>
  );
}