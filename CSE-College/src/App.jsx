import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import About from "./components/About";

import HODMessage from "./components/HODMessage";

import Students from "./components/Students";

import Faculty from "./components/Faculty";

import Courses from "./components/Courses";

import Infrastructure from "./components/Infrastructure";

import Library from "./components/Library";

import Placements from "./components/Placements";

import Syllabus from "./components/Syllabus";

import Footer from "./components/Footer";

import collegeData from "./data/collegeData";

function App() {
  return (
    <>
      <Navbar />

      <Hero
        collegeName={
          collegeData.collegeName
        }
        departmentName={
          collegeData.departmentName
        }
        tagline={collegeData.tagline}
      />

      <About
        about={collegeData.about}
      />

      <HODMessage
        hod={collegeData.hod}
      />

      <Students
        students={collegeData.students}
      />

      <Faculty
        faculty={collegeData.faculty}
      />

      <Courses
        courses={collegeData.courses}
      />

      <Infrastructure
        facilities={collegeData.facilities}
      />

      <Library />

      <Placements
        placements={collegeData.placements}
      />

      <Syllabus />

      <Footer
        collegeName={
          collegeData.collegeName
        }
        departmentName={
          collegeData.departmentName
        }
        location={
          collegeData.location
        }
      />
    </>
  );
}

export default App;