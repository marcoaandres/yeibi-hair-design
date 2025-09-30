import { ContactSection, GallerySection, HeroAboutSection, ServicesSection } from "../components";

export default function HomePage() {
  return (
    <>
      <HeroAboutSection />
      <ServicesSection />
      <GallerySection />
      {/* <TestimonialsSection /> */}
      {/* <SocialFeedSection /> */}
      <ContactSection />
    </>
  );
}