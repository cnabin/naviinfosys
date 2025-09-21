import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGlobe,
  FaPenFancy,
  FaSearchengin,
  FaMobileAlt,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs, SiWordpress, SiShopify } from "react-icons/si";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-background dark:bg-background-dark p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
    <div className="flex justify-center mb-6 text-primary text-5xl">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-text dark:text-text-dark">
      {title}
    </h3>
    <p className="text-text-light-secondary dark:text-text-dark-secondary">
      {description}
    </p>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: <FaSearchengin />,
      title: "360 Digital Marketing",
      description:
        "Best for businesses seeking fast results. This service combines strategies to boost conversions, sales, branding, and online presence.",
    },
    {
      icon: <FaGlobe />,
      title: "Website Development Service",
      description: "Create a professional, user-friendly website that converts visitors into customers. Our designs ensure a seamless experience and growth.",
    },
    {
      icon: <FaPenFancy />,
      title: "Content Creation",
      description:
        "Enhance your brand with our engaging content. We create articles and web copy that attract and retain your audience, helping you grow online.",
    },
    
    {
      icon: <FaMobileAlt />,
      title: "Search Engine Optimization",
      description:
        "Improve your website’s visibility and attract valuable visitors with our SEO services. We use effective strategies to boost rankings and drive growth.",
    },
  ];

  return (
    <section>
      <Helmet>
        <title>Our Services | Navi Infosys</title>
        <meta
          name="description"
          content="Explore the wide range of services offered by Navi Infosys — from web development and UI/UX design to branding and digital marketing. Let’s build something great together."
        />
        <link
          rel="canonical"
          href="https://naviinfosys.sarojpanthi.tech/services"
        />
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background-light to-background dark:from-background-light-dark dark:to-background-dark">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto">
                Not Just Services, Strategic Solutions That Drive Results.
                We build systems, strategies and experiences that turn clicks into customers and ideas into impact.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <FadeInSection key={index} delay={index * 0.2}>
                  <ServiceCard {...service} />
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 bg-background-light dark:bg-background-light-dark">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12">
                Technologies We{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Work With
                </span>
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <FaCode />, name: "React & Next.js" },
                { icon: <SiWordpress />, name: "WordPress" },
                { icon: <SiShopify />, name: "Shopify" },
                { icon: <FaServer />, name: "Node.js" },
                { icon: <FaDatabase />, name: "MongoDB" },
                { icon: <FaShieldAlt />, name: "Security" },
                { icon: <FaRocket />, name: "Performance" },
                { icon: <FaUsers />, name: "User Experience" },
              ].map((tech, index) => (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div className="flex flex-col items-center justify-center p-6 bg-background dark:bg-background-dark rounded-xl hover:transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3 text-primary">
                      {tech.icon}
                    </div>
                    <span className="text-text-light-secondary dark:text-text-dark-secondary">
                      {tech.name}
                    </span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12">
                Ready to{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </FadeInSection>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default ServicesPage;
