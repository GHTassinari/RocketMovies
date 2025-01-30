import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { useNavigate } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import { Container, Content, Add, ButtonWrapper } from "./styles";

export function Home() {
  const navigate = useNavigate();

  const notesData = [
    {
      author: "Guilherme Tassinari",
      date: "2022-05-23 08:00:00",
      title: "Interestellar",
      tags: [
        { id: "1", name: "Sci-Fi" },
        { id: "2", name: "Drama" },
        { id: "3", name: "Family" },
      ],
      description:
        "Crop pests caused human civilization to regress into an agrarian society at an unknown future date. Cooper, a former NASA pilot, runs a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence sending coded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has opened near Saturn, leading to planets that may offer habitable conditions for humanity. The 'Lazarus missions' sent years earlier identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann—named after the astronauts who explored them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will relocate to it using NASA's facility, which is actually a massive space station. Cooper's departure devastates Murphy. Alongside Cooper, the Endurance crew consists of biologist Amelia, Brand's daughter; scientist Romilly; planetary physicist Doyle; and the robots TARS and CASE. They enter the wormhole and head to Miller but discover that the planet experiences extreme gravitational time dilation due to its proximity to Gargantua: every hour on the surface equals seven years on Earth. They land on Miller and find it inhospitable, covered by a shallow ocean stirred by massive waves. One wave strikes the crew as Amelia attempts to recover Miller's data, killing Doyle and delaying their departure. Upon returning to the Endurance, Cooper and Amelia realize that 23 years have passed.",
      rating: "4",
    },
    {
      author: "Guilherme Tassinari",
      date: "2022-05-23 08:00:00",
      title: "Interestellar",
      tags: [
        { id: "1", name: "Sci-Fi" },
        { id: "2", name: "Drama" },
        { id: "3", name: "Family" },
      ],
      description:
        "Crop pests caused human civilization to regress into an agrarian society at an unknown future date. Cooper, a former NASA pilot, runs a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence sending coded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has opened near Saturn, leading to planets that may offer habitable conditions for humanity. The 'Lazarus missions' sent years earlier identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann—named after the astronauts who explored them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will relocate to it using NASA's facility, which is actually a massive space station. Cooper's departure devastates Murphy. Alongside Cooper, the Endurance crew consists of biologist Amelia, Brand's daughter; scientist Romilly; planetary physicist Doyle; and the robots TARS and CASE. They enter the wormhole and head to Miller but discover that the planet experiences extreme gravitational time dilation due to its proximity to Gargantua: every hour on the surface equals seven years on Earth. They land on Miller and find it inhospitable, covered by a shallow ocean stirred by massive waves. One wave strikes the crew as Amelia attempts to recover Miller's data, killing Doyle and delaying their departure. Upon returning to the Endurance, Cooper and Amelia realize that 23 years have passed.",
      rating: "4",
    },
    {
      author: "Guilherme Tassinari",
      date: "2022-05-23 08:00:00",
      title: "Interestellar",
      tags: [
        { id: "1", name: "Sci-Fi" },
        { id: "2", name: "Drama" },
        { id: "3", name: "Family" },
      ],
      description:
        "Crop pests caused human civilization to regress into an agrarian society at an unknown future date. Cooper, a former NASA pilot, runs a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence sending coded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has opened near Saturn, leading to planets that may offer habitable conditions for humanity. The 'Lazarus missions' sent years earlier identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann—named after the astronauts who explored them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will relocate to it using NASA's facility, which is actually a massive space station. Cooper's departure devastates Murphy. Alongside Cooper, the Endurance crew consists of biologist Amelia, Brand's daughter; scientist Romilly; planetary physicist Doyle; and the robots TARS and CASE. They enter the wormhole and head to Miller but discover that the planet experiences extreme gravitational time dilation due to its proximity to Gargantua: every hour on the surface equals seven years on Earth. They land on Miller and find it inhospitable, covered by a shallow ocean stirred by massive waves. One wave strikes the crew as Amelia attempts to recover Miller's data, killing Doyle and delaying their departure. Upon returning to the Endurance, Cooper and Amelia realize that 23 years have passed.",
      rating: "4",
    },
    {
      author: "Guilherme Tassinari",
      date: "2022-05-23 08:00:00",
      title: "Interestellar",
      tags: [
        { id: "1", name: "Sci-Fi" },
        { id: "2", name: "Drama" },
        { id: "3", name: "Family" },
      ],
      description:
        "Crop pests caused human civilization to regress into an agrarian society at an unknown future date. Cooper, a former NASA pilot, runs a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence sending coded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has opened near Saturn, leading to planets that may offer habitable conditions for humanity. The 'Lazarus missions' sent years earlier identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann—named after the astronauts who explored them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will relocate to it using NASA's facility, which is actually a massive space station. Cooper's departure devastates Murphy. Alongside Cooper, the Endurance crew consists of biologist Amelia, Brand's daughter; scientist Romilly; planetary physicist Doyle; and the robots TARS and CASE. They enter the wormhole and head to Miller but discover that the planet experiences extreme gravitational time dilation due to its proximity to Gargantua: every hour on the surface equals seven years on Earth. They land on Miller and find it inhospitable, covered by a shallow ocean stirred by massive waves. One wave strikes the crew as Amelia attempts to recover Miller's data, killing Doyle and delaying their departure. Upon returning to the Endurance, Cooper and Amelia realize that 23 years have passed.",
      rating: "4",
    },
  ];

  return (
    <Container>
      <Header />

      <Content>
        <section>
          <h1>My movies</h1>
          <ButtonWrapper to="/New">
            <Add icon={FiPlus} title="Add movie" />
          </ButtonWrapper>
        </section>
        <main>
          {notesData.map((note, index) => (
            <button
              key={index}
              onClick={() => navigate(`/Details/${index}`, { state: note })}
            >
              <Note key={index} data={note} />
            </button>
          ))}
        </main>
      </Content>
    </Container>
  );
}
