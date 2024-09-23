import "./styles.css";

export default function App() {
  return (
    <div className="resume">
      <header>
        <h1>CHRISTIAN DEAN M. PERALTA</h1>
        <h2>FUTURE FRONT-END DEVELOPER</h2>
      </header>

      <div className="content">
        <section className="sidebar">
          <div className="contact">
            <h1>Contact</h1>
            <p>
              <strong>Email:</strong> cdmperalta.student@ua.edu.ph
            </p>
            <p>
              <strong>Facebook:</strong> Christian Dean Peralta
            </p>
            <p>
              <strong>Location:</strong> San Nicolas, San Fernando, Pampanga
            </p>
          </div>

          <div className="education">
            <h1>Education</h1>
            <p>Bachelor of Science in Information Technology (Present)</p>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>CSS</li>
              <li>HTML</li>
              <li>Python</li>
              <li>MySQL</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </section>

        <section className="main-content">
          <div className="experience">
            <h1>Experience</h1>
            <div className="yr">
              <h3>1st Year (2022-2023)</h3>
              <h4>Python and Figma</h4>
              <h5>Projects</h5>
              <ul>
                <li>Project 1</li>
              </ul>
            </div>

            <div className="yr">
              <h3>2nd Year (2023-2024)</h3>
              <h4>Javascript, MySQL, HTML and CSS</h4>
              <h5>Projects</h5>
              <ul>
                <li>Project 2</li>
              </ul>
            </div>

            <div className="yr">
              <h3>3rd Year (2024-Present)</h3>
              <h4>ReactJS, Bootstrap, HTML, and CSS</h4>
              <h5>Projects</h5>
              <ul>
                <li>Project 3</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
