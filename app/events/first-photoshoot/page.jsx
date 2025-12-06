import React from "react";
import EventPost from "../../components/EventPost";
import Carousel from "../../components/Carousel";
import { useTranslations } from "next-intl";
import FadeInSection from "@/app/components/FadeInSection";

function page() {
  const t = useTranslations("Events");
  const sections = [
    {
      title: "The Vision",
      text: "Every look starts with inspiration — a concept, a mood, or a color story. This session focused on soft glam with glowing skin and neutral tones.",
      image: "https://source.unsplash.com/800x600/?makeup,concept",
    },
    {
      title: "The Process",
      text: "Lighting, camera angles, and product choice all play a role. It’s not just makeup — it’s storytelling through texture and tone.",
      image: "https://source.unsplash.com/800x600/?makeup,studio",
    },
    {
      title: "The Results",
      text: "The final photos captured the essence of natural beauty — timeless, elegant, and radiant.",
      image: "https://source.unsplash.com/800x600/?portrait,beauty",
    },
  ];
  const galleryImages = [
    "/assets/makeup-card-img.png",
    "/assets/wax-card.webp",
    "/assets/face-card.jpg",
    "/assets/self-makeup.webp",
    "/assets/package-card.jpg",
  ];

  return (
    <FadeInSection>
      <div className="bg-gray-50 min-h-screen py-10">
        <EventPost
          title={t("first-photoshoot.title")}
          description={t("first-photoshoot.description")}
          sections={sections}
          optionalSection={{
            type: "carousel",
            component: <Carousel images={galleryImages} optionalText={"Check out all of the photos from the shoot!"} />,
          }}
        />
      </div>
    </FadeInSection>
  );
}

export default page;
