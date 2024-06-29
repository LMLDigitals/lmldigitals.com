

import "./globals.css";
import Navbar from '../components/Navbar/page';
import Home from '../components/Home/page';
import Services from "./pages/services";
import Projects from "./pages/projects";
import Project2 from "./pages/projects2";
import TechCall from "@/components/TechCall";
import Footer from "./pages/Footer";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: 'LML Digitals',
  description: 'Company website!',
  // Add other metadata as needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const projectString = "Project 1,Project 2,Project 3,Project 4,Project 5,Project 6";
  const projectArray = projectString.split(',');

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-100">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Home
            imageUrl="./homeimg.jpg"
            altText="Description of your image"
            text="Seamless Integration of Software and Digital Branding"
            textParagraph="Where innovation meets precision in software and digital branding services. We specialize in crafting bespoke solutions that elevate your digital presence and drive impactful results. With a blend of cutting-edge technology and creative expertise, we transform ideas into tangible success stories. Whether you're a startup aiming to disrupt the market or an established brand seeking a digital makeover, LML Digitals is your trusted partner. Discover how we can empower your journey to digital excellence."
            advertisingParagraph= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam ea quae voluptatibus quod officia natus voluptate expedita totam necessitatibus dolorem ab, porro error nobis vitae, nemo minima rerum. Cupiditate."
          />
          <Services/>
          <Projects/>
          <Project2
          projectImageUrl="./manhelping.png"
          projectAltText="project image"
          textProject="List goes here"
          projectList = {projectArray}
          />
          <h1 className="text-3xl font-bold mb-8 text-center mt-20">Technologies & Frameworks We Use</h1>
          <TechCall/>
          <ContactForm/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}