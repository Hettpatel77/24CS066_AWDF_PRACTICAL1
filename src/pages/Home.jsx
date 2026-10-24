import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"];

  return (
    <>
      <Header name="Het Patel" themeColor="#38bdf8" />
      <About course="Computer Science Engineering" />
      <Skills skillList={skills} />
    </>
  );
}

export default Home;
