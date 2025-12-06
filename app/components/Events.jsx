import { useTranslations } from "next-intl";
import Link from "next/link";
import Card from "./Card";
import cardMakeup from "@/public/assets/makeup-card-img.png";
function Events() {
  const events = [{ id: "first-photoshoot", image: cardMakeup },]
  
    const t = useTranslations("Events");
  
  return (
    <div id="events" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 tracking-wider uppercase mb-8">
        {t("h1")}
        <span className="text-[#b76e78]">.</span>
      </h1>
      <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-7 my-10">
        {events.map(({ id, image }) => (
          <Link key={id} href={`/events/${id}`} className="h-full w-full">
            <Card
              title={t(`${id}.title`)}
              image={image}
              description={t(`${id}.description`)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Events;
