import "./App.css";

function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="resume-container">

      {/* Header */}
      <header className="header">
        <h1>Daksha Rajkumar Patil</h1>
        <p className="role">Computer Science Engineering Student</p>

        <div className="contact">
          <span>📧 dakshap0205@.com</span>
          <span>📱 +91 7776842655</span>
          <span>📍 Maharashtra, India</span>
        </div>

        <div className="links">
          <a href="#" target="_blank">GitHub</a>
          <a href="#" target="_blank">LinkedIn</a>
          <a href="#" target="_blank">Portfolio</a>
        </div>
      </header>

      {/* About */}
      <Card title="About Me">
        <p>
          Motivated Computer Science Engineering student with an interest in
          web development, software development, databases, and problem solving.
          Skilled in building responsive applications using modern technologies
          and continuously improving programming and development skills.
        </p>
      </Card>

      {/* Education */}
      <Card title="Education">
        <div className="item">
          <h3>B.Tech in Computer Science Engineering</h3>
          <p>D.Y. Patil College of Engineering</p>
          <span>2022 – 2026</span>
        </div>

        <div className="item">
          <h3>Higher Secondary Education</h3>
          <p>Science Stream</p>
          <span>2020 – 2022</span>
        </div>
      </Card>

      {/* Skills */}
      <Card title="Technical Skills">
        <div className="skills">
          <span>Java</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>Git & GitHub</span>
        </div>
      </Card>

      {/* Projects */}
      <Card title="Projects">

        <div className="project">
          <h3>EventHub – Event Management System</h3>
          <p>
            Developed a web-based event management platform that allows users
            to explore, manage, and register for events.
          </p>
          <p>
            <strong>Technologies:</strong> HTML, CSS, JavaScript, Supabase
          </p>
        </div>

        <div className="project">
          <h3>Medicine Sell and Buy</h3>
          <p>
            Developed a web application for buying and selling medicines with
            a simple and user-friendly interface.
          </p>
          <p>
            <strong>Technologies:</strong> React.js, JavaScript, CSS
          </p>
        </div>

        <div className="project">
          <h3>Smart Washroom for Senior Citizens</h3>
          <p>
            Designed an IoT-based smart washroom system using sensors and an
            Arduino board to improve safety and monitor emergency situations.
          </p>
          <p>
            <strong>Technologies:</strong> Arduino, C++, Sensors, IoT
          </p>
        </div>

      </Card>

      {/* Experience */}
      <Card title="Experience / Internship">
        <div className="item">
          <h3>Web Development Intern</h3>
          <p>Company Name</p>
          <span>Month 2025 – Month 2025</span>

          <ul>
            <li>Developed responsive web pages using React.js.</li>
            <li>Worked with reusable components and modern UI practices.</li>
            <li>Integrated frontend applications with backend services.</li>
          </ul>
        </div>
      </Card>

      {/* Certifications */}
      <Card title="Certifications">
        <ul className="certifications">
          <li>Zero Trust Cloud Security – Zscaler</li>
          <li>Web Development Certification</li>
          <li>AR/VR Workshop Certification</li>
        </ul>
      </Card>

      {/* Achievements */}
      <Card title="Achievements & Activities">
        <ul>
          <li>Participated in Technotsav – Code Spirit Competition.</li>
          <li>Participated in AR/VR Workshop.</li>
          <li>Regularly practice Data Structures and Algorithms.</li>
          <li>Worked on multiple academic and personal software projects.</li>
        </ul>
      </Card>

      {/* Footer */}
      <footer>
        <p>© 2026 Daksha Rajkumar Patil</p>
      </footer>

    </div>
  );
}

export default App;