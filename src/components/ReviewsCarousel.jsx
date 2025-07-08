import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    company: "Dilligent International Consultancy",
    name: "Binod Mahato",
    position: "CEO/Founder",
    content:
      "My previous agency didn’t renew my domain, and my website went down. Then I got it redesigned by Navi Infosys. They did a great job! Delivered on time with good quality. Also Special Thanks to Nabin Ji",
    image:
      "https://res.cloudinary.com/dm44nnrpm/image/upload/v1744186238/diligentconsultancy_ke9wax.png",
  },
  {
    id: 2,
    company: "AECC Global",
    name: "Prashanna Sharma",
    position: "CTO",
    content:
      "We partnered with Navi Infosys for lead generation, and the results were quick and impressive. Their digital marketing strategy brought us qualified student inquiries within a week. Professional and proactive team!",
    image:
      "https://res.cloudinary.com/dm44nnrpm/image/upload/v1744189963/aeccglobal_vz1gef.png",
  },
  {
    id: 3,
    company: "Halkhabar Media",
    name: "Sundar Mani Adhikari",
    position: "CEO",
    content:
      "Hajur haru sanga kaam garna ekdam sahaj bhayo. Technical Support ekdam fast ra ramro paye maile. Kaam socheko vanda dherai xito ra efficient work deliver gardinu vayo, Dhanyabaad Nabin ji ra sabai team lai",
    image:
      "https://res.cloudinary.com/dm44nnrpm/image/upload/v1744535045/280060445_1100958233968703_2356396032372761368_n-removebg-preview_e1vaih.png",
  },
  {
    id: 4,
    company: "AR Photo Studio",
    name: "UK Gurung",
    position: "Owner",
    content:
      "Thank You So Much for this beautiful website that truly showcases my photography work. From the gallery to client booking features.Also Thank you for the amazing support",
    image:
      "https://res.cloudinary.com/dm44nnrpm/image/upload/v1744186800/arstudio_ddf5vs.png",
  },
  {
    id: 5,
    company: "The Yoga Arts",
    name: "Dharmaraj Neupane",
    position: "CEO/Yoga Teacher",
    content:
      "Our yoga website feels peaceful and easy to navigate as per our need. Navi Infosys understood our vision perfectly and delivered with clarity and care. Highly recommended!",
    image:
      "https://res.cloudinary.com/dm44nnrpm/image/upload/v1744187860/yoga_u7zzfz.png",
  },
  {
    id: 6,
    company: "Mind Risers Tehchnology",
    name: "Prashanna Sir",
    position: "CFO",
    content:
      "We’ve collaborated with Navi Infosys on multiple web projects. Their development quality, timely delivery, and communication have always been top-notch. A reliable tech partner!",
    image:
      "https://res.cloudinary.com/dm44nnrpm/image/upload/v1744535771/images__6_-removebg-preview_in5sdj.png",
  },

];

const ReviewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="py-16 bg-background-light dark:bg-background-light-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Clients
          </span>{" "}
          Say
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div key={review.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-background dark:bg-background-dark rounded-2xl p-8 shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-full overflow-hidden bg-background  p-4 shadow-inner">
                          <img
                            src={review.image}
                            alt={review.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary mb-6">
                          "{review.content}"
                        </p>
                        <div>
                          <h3 className="text-xl font-semibold text-text dark:text-text-dark">
                            {review.name}
                          </h3>
                          <p className="text-text-light-secondary dark:text-text-dark-secondary">
                            {review.position}, {review.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 dark:bg-background-dark/80 p-2 rounded-full shadow-lg hover:bg-background/90 dark:hover:bg-background-dark/90"
            onClick={scrollPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 dark:bg-background-dark/80 p-2 rounded-full shadow-lg hover:bg-background/90 dark:hover:bg-background-dark/90"
            onClick={scrollNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
