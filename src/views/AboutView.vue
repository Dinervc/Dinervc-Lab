<script setup lang="ts">
//import About from '../components/About.vue'
</script>

<template>
  <div class="about">
    <section class="container">
      <div>
        <h2>Who Am I?</h2>
        <p>
          I'm Adrian Petrovic, an 18-year-old full-stack developer deep into my 3rd year of a computer science
          apprenticeship in Switzerland. My passion extends from software to hardware, enjoying the thrill of breaking and
          making things. Not just a coder, I've also built a significant social media following thanks to my decent
          editing skills.
        </p>
        <p>
          Entrepreneurially spirited, I co-founded a startup called Webglide, which leverages AI to simplify website
          creation. The venture has been a success and continues to thrive. When I'm not coding or running a business,
          you'll find me collecting vintage consoles—Gameboys, to be precise. I've even engineered Linux and Raspberry
          Pi-based Gameboys of my own.
        </p>
        <p>
          A curious tinkerer at heart, I love delving into device security, always eager to switch roles from being just a
          User to becoming an Admin.
        </p>
      </div>
    </section>

    <section class="skills">
      <h2>Skills</h2>
      <div class="skill">
        <img src="../assets/svg/javascript.svg" alt="JavaScript">
        JavaScript
      </div>
      <div class="skill">
        <img src="../assets/svg/java.svg" alt="Java">
        Java
      </div>
      <div class="skill">
        <img src="../assets/svg/vue.svg" alt="Vue.js">
        Vue.js
      </div>
      <div class="skill">
        <img src="../assets/svg/bash.svg" alt="Bash">
        Bash
      </div>
      <div class="skill">
        <img src="../assets/svg/openai.svg" alt="GPT">
        GPT
      </div>
      <div class="skill">
        <img src="../assets/svg/git.svg" alt="Git">
        Git
      </div>
      <div class="skill">
        <img src="../assets/svg/adobe.svg" alt="Editing">
        Editing
      </div>
      <div class="skill">
        <img src="../assets/svg/docker.svg" alt="Docker">
        Docker
      </div>
      <div class="skill">
        <img src="../assets/svg/swift.svg" alt="Swift">
        Swift
      </div>
      <div class="skill more-skills">
        ...
      </div>
    </section>

    <section class="learnings">
      <h2>Currently Learning</h2>
      <ul class="learning-list">
        <li class="learning-item github">GitHub</li>
        <li class="learning-item flutter">Flutter</li>
        <li class="learning-item swift">Swift</li>
        <li class="learning-item vue">Vue.js</li>
        <li class="learning-item python">Python</li>
        <li class="learning-item devops">DevOps</li>
        <li class="learning-item fp">Functional Programming</li>
        <li class="learning-item ios">iOS Security</li>
        <li class="learning-item more">...</li>
      </ul>
    </section>


    <section class="contact">
      <h2>Contact Me</h2>
      <p>Email: adrian@dinervc.ch</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/adrianpetrovic">My LinkedIn</a></p>
      <p>GitHub: <a href="https://github.com/Dinervc">My GitHub</a></p>
      <p>Linktree: <a href="https://linktr.ee/dinervc">My Linktree</a></p>
    </section>
  </div>
</template>

<style>
.about {
  margin-top: 150px;
  padding: 30px;
  background-image: url("../assets/gameboy.png");
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
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  transition: all 0.3s ease;
}

.github::before {
  width: 95%;
  background: rgb(112, 112, 112);
}

.flutter::before {
  width: 30%;
  background: rgb(0, 255, 255);
}

.swift::before {
  width: 60%;
  background: radial-gradient(rgb(193, 193, 193), rgb(255, 77, 0))
}

.vue::before {
  width: 50%;
  background: rgb(83, 196, 105);
}

.python::before {
  width: 20%;
  background: linear-gradient(to right, rgb(0, 62, 207), rgb(197, 204, 0))
}

.devops::before {
  width: 65%;
  background: gainsboro
}

.fp::before {
  width: 83%;
  background: rgb(142, 124, 124)
}

.ios::before {
  width: 5%;
  background: rgb(255, 0, 111)
}
</style>
