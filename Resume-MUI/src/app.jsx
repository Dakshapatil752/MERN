import { Container, Box } from "@mui/material";

import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import AboutCard from "./components/AboutCard";
import SkillsCard from "./components/SkillsCard";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import ProjectsCard from "./components/ProjectsCard";
import CertificationsCard from "./components/CertificationsCard";
import ContactCard from "./components/ContactCard";

import resumeData from "./data/resumeData";

function App() {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg">
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <ProfileCard personal={resumeData.personal} />

          <AboutCard about={resumeData.about} />

          <SkillsCard skills={resumeData.skills} />

          <EducationCard
            education={resumeData.education}
          />

          <ExperienceCard
            experience={resumeData.experience}
          />

          <ProjectsCard
            projects={resumeData.projects}
          />

          <CertificationsCard
            certifications={resumeData.certifications}
          />

          <ContactCard
            personal={resumeData.personal}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;