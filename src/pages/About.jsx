import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackgroundIcons from "../components/BackgroundIcons";
import Footer from "../components/Footer";
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
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section>
      <Helmet>
        <title>About Us | Navi Infosys</title>
        <meta
          name="description"
          content="Learn more about Navi Infosys — our mission, vision, and the team behind the innovative solutions. Discover how we empower businesses with cutting-edge technology."
        />
        <link
          rel="canonical"
          href="https://naviinfosys.sarojpanthi.tech/about"
        />
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark pt-20">
        <BackgroundIcons />

        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Navi Infosys
            </span>
          </h1>
          <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto">
            We Turn Big Ideas Into Profitable Digital Realities. <br /> Your growth is not just a project. It’s our mission.


          </p>
        </motion.header>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          {/* Who We Are */}
          <FadeInSection>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Who We Are
              </h2>
              <div className="bg-background-light dark:bg-background-light-dark rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  We’re not here to just build websites. We’re here to build momentum, growth, and digital domination.
                </p>
                <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary">
                  At Navi Infosys, we combine strategy, speed and creativity to turn your business into a lead-generating machine.<br />
                  No fluff. No delays. Just results that move the needle.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Our Mission */}
          <FadeInSection delay={0.2}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Mission
              </h2>
              <div className="bg-background-light dark:bg-background-light-dark rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  Most businesses struggle to grow online because they lack the right digital tools, strategy, and reliable support.
                </p>
                <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary">
                  Our mission is to solve that problem by helping business owners get the online presence, systems, and 
                  marketing they need to attract customers, build trust, and grow faster in today’s digital world.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Why Choose Us */}
          <FadeInSection delay={0.4}>
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <div className="bg-background-light dark:bg-background-light-dark rounded-2xl p-8 shadow-lg">
                <ul className="space-y-6">
                  {[
                    {
                      title: "Speed + Quality",
                      description:
                        "We deliver fast without compromising excellence.",
                    },
                    {
                      title: "Growth-Focused",
                      description:
                        "Every pixel, every line of code serves a purpose: your growth.",
                    },
                    {
                      title: "Real Support, Real Results",
                      description:
                        "We’re here for you before, during, and after launch.",
                    },
                    {
                      title: "Custom Strategy",
                      description:
                        "No cookie-cutter stuff. Everything we build is tailored to your goals.",
                    },
                    {
                      title: "Proven by Results",
                      description:
                        "Trusted by real businesses across Nepal and beyond.",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex flex-col md:flex-row md:items-start gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-text dark:text-text-dark">
                          {item.title}
                        </h3>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
