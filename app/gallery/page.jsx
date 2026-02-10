// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import cardMakeup from "@/public/assets/makeup-card-img.png";
// import { useTranslations } from "next-intl";

// const galleryData = {
//   bridal: [
//     { id: 1, src: cardMakeup, client: "Sarah M." },
//     { id: 2, src: cardMakeup, client: "Jessica L." },
//     { id: 3, src: cardMakeup, client: "Emily R." },
//     { id: 4, src: cardMakeup, client: "Amanda K." },
//     { id: 5, src: cardMakeup, client: "Nicole P." },
//     { id: 6, src: cardMakeup, client: "Maria S." },
//   ],
//   editorial: [
//     { id: 7, src: cardMakeup, client: "Vogue Shoot" },
//     { id: 8, src: cardMakeup, client: "Harper's Bazaar" },
//     { id: 9, src: cardMakeup, client: "Elle Magazine" },
//     { id: 10, src: cardMakeup, client: "Fashion Week" },
//     { id: 11, src: cardMakeup, client: "Marie Claire" },
//     { id: 12, src: cardMakeup, client: "Allure" },
//   ],
//   specialFx: [
//     { id: 13, src: cardMakeup, client: "Film Production" },
//     { id: 14, src: cardMakeup, client: "Theater Production" },
//     { id: 15, src: cardMakeup, client: "Independent Film" },
//     { id: 16, src: cardMakeup, client: "TV Series" },
//     { id: 17, src: cardMakeup, client: "Art Exhibition" },
//     { id: 18, src: cardMakeup, client: "Sci-Fi Production" },
//   ],
//   glam: [
//     { id: 19, src: cardMakeup, client: "Celebrity Client" },
//     { id: 20, src: cardMakeup, client: "Influencer" },
//     { id: 21, src: cardMakeup, client: "Photoshoot" },
//     { id: 22, src: cardMakeup, client: "Event Makeup" },
//     { id: 23, src: cardMakeup, client: "Music Video" },
//     { id: 24, src: cardMakeup, client: "Portfolio Shoot" },
//   ],
//   natural: [
//     { id: 25, src: cardMakeup, client: "Corporate Headshot" },
//     { id: 26, src: cardMakeup, client: "Lifestyle Shoot" },
//     { id: 27, src: cardMakeup, client: "Personal Client" },
//     { id: 28, src: cardMakeup, client: "Beach Photoshoot" },
//     { id: 29, src: cardMakeup, client: "Magazine Feature" },
//     { id: 30, src: cardMakeup, client: "Brand Campaign" },
//   ],
// };

// export default function MakeupGallery() {
//   const t = useTranslations("Gallery");
//   const [activeCategory, setActiveCategory] = useState("bridal");
//   const [selectedImage, setSelectedImage] = useState(null);

//   const categories = Object.keys(galleryData);

//   return (
//     <div className="w-full max-w-7xl mx-auto px-6 py-12 font-serif">
//       {/* Category Tabs */}
//       <div className="mb-12 overflow-x-auto scrollbar-hide">
//         <div className="flex gap-8 justify-center min-w-min pb-2">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`relative bg-transparent border-0 text-lg font-medium tracking-wide px-2 py-3 whitespace-nowrap transition-colors duration-300 ${
//                 activeCategory === category
//                   ? "text-gray-800"
//                   : "text-gray-400 hover:text-gray-600"
//               }`}
//             >
//               {t(`categories.${category}`)}
//               {activeCategory === category && (
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#b76e78] via-[#cc8e96] to-[#f5f5f5]"
//                   layoutId="activeTab"
//                   transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
//         layout
//       >
//         <AnimatePresence mode="popLayout">
//           {galleryData[activeCategory].map((image, index) => (
//             <motion.div
//               key={image.id}
//               className="cursor-pointer rounded overflow-hidden bg-gray-50"
//               layout
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{
//                 duration: 0.4,
//                 delay: index * 0.05,
//                 ease: [0.25, 0.46, 0.45, 0.94],
//               }}
//               onClick={() => setSelectedImage(image)}
//             >
//               <div className="relative w-full pb-[125%] overflow-hidden group">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   className="object-cover transition-transform duration-500 ease-out md:group-hover:scale-105"
//                   quality={75}
//                   placeholder="blur"
//                   blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
//                   <div className="text-white w-full">
//                     <span className="text-sm font-medium tracking-widest uppercase font-sans">
//                       {image.client}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>

//       {/* Lightbox Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 bg-black/95 flex items-center justify-center z-1000 p-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div
//               className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 className="absolute top-4 right-4 bg-white border-0 w-10 h-10 rounded-full text-2xl cursor-pointer z-10 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
//                 onClick={() => setSelectedImage(null)}
//                 aria-label="Close"
//               >
//                 ×
//               </button>
//               <div className="relative w-[80vw] h-[70vh] max-w-[1200px] md:w-[80vw] md:h-[70vh]">
//                 <Image
//                   src={selectedImage.src}
//                   alt={selectedImage.alt}
//                   fill
//                   sizes="90vw"
//                   className="object-contain"
//                   quality={90}
//                   priority
//                 />
//               </div>
//               <div className="p-6 bg-white border-t border-gray-200">
//                 <h3 className="text-xl font-serif mb-2 text-gray-800">
//                   {selectedImage.alt}
//                 </h3>
//                 <p className="text-gray-600 text-base font-sans m-0">
//                   Client: {selectedImage.client}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import cardMakeup from "@/public/assets/makeup-card-img.png";
import { useTranslations } from "next-intl";

const galleryData = {
  bridal: [
    { id: 1, src: cardMakeup, client: 'Sarah M.' },
    { id: 2, src: cardMakeup, client: 'Jessica L.' },
    { id: 3, src: cardMakeup, client: 'Emily R.' },
    { id: 4, src: cardMakeup, client: 'Amanda K.' },
    { id: 5, src: cardMakeup, client: 'Nicole P.' },
    { id: 6, src: cardMakeup, client: 'Maria S.' },
  ],
  editorial: [
    { id: 7, src: cardMakeup, client: 'Vogue Shoot' },
    { id: 8, src: cardMakeup, client: "Harper's Bazaar" },
    { id: 9, src: cardMakeup, client: 'Elle Magazine' },
    { id: 10, src: cardMakeup, client: 'Fashion Week' },
    { id: 11, src: cardMakeup, client: 'Marie Claire' },
    { id: 12, src: cardMakeup, client: 'Allure' },
  ],
  specialFx: [
    { id: 13, src: cardMakeup, client: 'Film Production' },
    { id: 14, src: cardMakeup, client: 'Theater Production' },
    { id: 15, src: cardMakeup, client: 'Independent Film' },
    { id: 16, src: cardMakeup, client: 'TV Series' },
    { id: 17, src: cardMakeup, client: 'Art Exhibition' },
    { id: 18, src: cardMakeup, client: 'Sci-Fi Production' },
  ],
  glam: [
    { id: 19, src: cardMakeup, client: 'Celebrity Client' },
    { id: 20, src: cardMakeup, client: 'Influencer' },
    { id: 21, src: cardMakeup, client: 'Photoshoot' },
    { id: 22, src: cardMakeup, client: 'Event Makeup' },
    { id: 23, src: cardMakeup, client: 'Music Video' },
    { id: 24, src: cardMakeup, client: 'Portfolio Shoot' },
  ],
  natural: [
    { id: 25, src: cardMakeup, client: 'Corporate Headshot' },
    { id: 26, src: cardMakeup, client: 'Lifestyle Shoot' },
    { id: 27, src: cardMakeup, client: 'Personal Client' },
    { id: 28, src: cardMakeup, client: 'Beach Photoshoot' },
    { id: 29, src: cardMakeup, client: 'Magazine Feature' },
    { id: 30, src: cardMakeup, client: 'Brand Campaign' },
  ],
};

export default function MakeupGallery() {
  const t = useTranslations("Gallery");
  const [activeCategory, setActiveCategory] = useState('bridal');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = Object.keys(galleryData);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 font-serif">
      {/* Category Tabs */}
      <div className="mb-12 overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 justify-center min-w-min pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative bg-transparent border-0 text-lg font-medium tracking-wide px-2 py-3 whitespace-nowrap transition-colors duration-300 ${
                activeCategory === category 
                  ? 'text-gray-800' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {t(`categories.${category}`)}
              {activeCategory === category && (
                <motion.div
                  className="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#b76e78] via-[#cc8e96] to-[#f5f5f5]"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        layout
      >
        <AnimatePresence mode="popLayout">
          {galleryData[activeCategory].map((image, index) => (
            <motion.div
              key={image.id}
              className="cursor-pointer rounded overflow-hidden bg-gray-50"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full pb-[125%] overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt || image.client}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out md:group-hover:scale-105"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                  <div className="text-white w-full">
                    <span className="text-sm font-medium tracking-widest uppercase font-sans">
                      {image.client}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-1000 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-white border-0 w-10 h-10 rounded-full text-2xl cursor-pointer z-10 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="relative w-[80vw] h-[70vh] max-w-[1200px] md:w-[80vw] md:h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt || selectedImage.client}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  quality={90}
                  priority
                />
              </div>
              <div className="p-6 bg-white border-t border-gray-200">
                <h3 className="text-xl font-serif mb-2 text-gray-800">
                  {selectedImage.alt || selectedImage.client}
                </h3>
                <p className="text-gray-600 text-base font-sans m-0">
                  Client: {selectedImage.client}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
