<script setup lang="ts">
//import About from '../components/About.vue'
</script>

<template>
  <div class="about">
    <section class="container">
      <div>
        <h2>Who Am I?</h2>
        <p>
          I'm Adrian Petrovic, a 19-year-old full-stack developer in the final year of my computer
          science apprenticeship in Switzerland. My long-term goal is to become a software engineer
          after earning a master's degree in computer science at ETH Zurich. To reach this
          milestone, I'm currently preparing for the national Passerelle exam.
        </p>
        <p>
          My interests span both software and hardware—I love the process of building, breaking, and
          reimagining technology. Beyond development, I've grown a notable social media presence by
          effectively profiting from trends and my skills.
        </p>
        <p>
          With an entrepreneurial mindset, I actively explore startup ventures alongside like-minded
          peers. Outside of coding and business, I collect vintage consoles and have even built
          custom Game Boys using Linux and Raspberry Pi, reflecting my passion for hands-on hardware
          projects.
        </p>
        <p>
          At my core, I'm a curious tinkerer fascinated by device security. I'm always driven to
          move beyond the user role and uncover what it means to be in control—whether that's
          gaining admin access or pushing the limits of a system.
        </p>
      </div>
    </section>

    <section class="skills">
      <h2>Skills</h2>

      <!-- Programming Languages -->
      <div class="skill">
        <img src="https://cdn.simpleicons.org/python" alt="Python" />
        Python
      </div>
      <div class="skill">
        <img src="../assets/svg/javascript.svg" alt="JavaScript" />
        <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" />
        JS/TS
      </div>
      <div class="skill">
        <img src="https://cdn.simpleicons.org/swift" alt="Swift" />
        Swift
      </div>
      <div class="skill">
        <img src="../assets/svg/java.svg" alt="Java" />
        Java
      </div>
      <div class="skill">
        <img src="https://cdn.simpleicons.org/c" alt="C" />
        C
      </div>

      <!-- Frameworks -->
      <div class="skill">
        <img src="https://cdn.simpleicons.org/react" alt="React" />
        React
      </div>
      <!-- <div class="skill">
        <img src="../assets/svg/vue.svg" alt="Vue.js" />
        Vue.js
      </div> -->

      <!-- Tools -->
      <div class="skill">
        <img src="../assets/svg/git.svg" alt="Git" />
        Git
      </div>
      <div class="skill">Microsoft Office</div>
      <div class="skill">
        <img src="../assets/svg/bash.svg" alt="Bash" />
        Bash
      </div>

      <div class="skill more-skills">...</div>
    </section>

    <section class="learnings">
      <h2>Currently Learning</h2>
      <ul class="learning-list">
        <li class="learning-item python">Python</li>
        <li class="learning-item swift">Swift</li>
        <li class="learning-item esp">ESP32 Electronics</li>
        <li class="learning-item c">C</li>
        <li class="learning-item passerelle">Passerelle</li>
        <li class="learning-item more">...</li>
      </ul>
    </section>

    <section class="contact">
      <h2>Other channels</h2>
      <p><a href="mailto:adrian@dinervc.ch">Send me an E-Mail</a></p>
      <p><a href="https://www.linkedin.com/in/adrianpetrovic">Visit my LinkedIn</a></p>
      <p><a href="https://github.com/Dinervc">View my GitHub Profile</a></p>
      <!-- <p><a href="https://linktr.ee/dinervc">Here</a></p> -->
    </section>
  </div>
</template>

<style>
.about {
  margin-top: 150px;
  padding: 30px;
  background-image: url('../assets/gameboy.png');
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: 90% 90%;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 30px 30px 200px 30px;
}

/* Media query for smaller screens */
@media (max-width: 900px) {
  .about {
    background-size: 50%;
    background-position: 80% 10%;
  }

  .learning-item {
    width: 80% !important;
  }
}

/* Media query for even smaller screens */
@media (max-width: 480px) {
  .about {
    background-size: 80%;
    background-position: 70% 10%;
  }

  .learning-item {
    width: 95% !important;
  }
}

.container {
  display: flex;
  justify-content: space-between;
}

.skills {
  display: flex;
  flex-wrap: wrap;
}

.skills h2 {
  flex-basis: 100%;
  margin-bottom: 0.5rem;
}

.skill {
  display: flex;
  align-items: center;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.3);
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
  min-height: 24px; /* Ensures content box is at least height of image */
}

.skill img {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.more-skills {
  display: flex;
  align-items: center;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px dashed #ccc;
  cursor: pointer;
}

.more-skills:hover {
  border-color: #666;
}

.learnings,
.contact {
  margin-top: 2rem;
}

.learnings {
  margin-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.learning-list {
  list-style-type: none;
  padding-left: 0;
}

.learning-item {
  position: relative;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 50%;
  border: rgb(88, 88, 88) 0.1px solid;
}

.learning-item:hover {
  background: rgba(0, 0, 0, 0.1);
}

.learning-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  transition: all 0.3s ease;
}

.swift::before {
  width: 40%;
  background: radial-gradient(rgb(193, 193, 193), rgb(255, 77, 0));
}

.vue::before {
  width: 50%;
  background: rgb(83, 196, 105);
}

.python::before {
  width: 85%;
  background: linear-gradient(to right, rgb(0, 62, 207), rgb(197, 204, 0));
}

.c::before {
  width: 10%;
  background: gainsboro;
}

.esp::before {
  width: 15%;
  background: radial-gradient(rgb(193, 193, 193), rgb(255, 77, 0));
}

.passerelle::before {
  width: 5%;
  background: rgb(83, 196, 105);
}
</style>
