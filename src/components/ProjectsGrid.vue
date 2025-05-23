<script setup lang="ts"></script>

<template>
    <div class="grid-container" id="projectsDiv">
        <div class="grid-item" id="information">
            <h2>Information</h2>
      <p>
          I've initiated various projects over the last couple of years, ranging from school
        assignments to personal educational endeavors. These projects showcase my growth throughout
        my computer science education. While 'Reflectory' stands out due to its Hackathon win,
        'HilRes' is my best work in terms of technical complexity. 'RegBankSight' and 'Dice Dash'
        are also noteworthy projects. Projects are roughly sorted by year of creation (from latest to oldest).
    </p>
    </div>
    <div class="grid-item" id="hilres">
      <h2>HilRes</h2>
      <p>
        This is part of my final project for my computer science apprenticeship. It is a python
        module that allows you to easily manage all resources of a Hardware-In-the-Loop (HIL) system
        to allow for parallel execution of multiple tests. A robust software architecture is
        implemented to ensure that the system is easy to extend and modify. Additionally, during the
        entire development process, a TDD approach was used to ensure that the system is robust and
        can regression tests can easily be executed.<br />(Note: The source to this project is
        private, as it was developed within my internship at Stäubli AG and they have all rights to
        the code)
      </p>
    </div>
    <div class="grid-item" id="staublichatgpt">
      <h2>IDPA - Stäubli ChatGPT - Grade: 5.5</h2>
      <p>
        IDPA stands for interdisciplinary project and it was part of my apprenticeship program. The
        goal was to combine computer science with any other field (finance, maths, business, etc)
        and I chose to investigate the in-house chatbot of Stäubli AG (Stäubli ChatGPT). I held
        interviews, sent surverys and generally was made available usage data of the tool
        internationally. Based on all of the data, I was able to create a report with
        recommendations for the company. <br />
        (Note: The result is private due to potential confidentiality issues.)
      </p>
    </div>
    <div class="grid-item" id="regbanksight">
        <h2>RegBankSight</h2>
        <p>
            This application allows you to visualize the registerbanks and components of an FPGA FW. This is done in a tree-like structure, where you can expand and collapse the different components. The application also allows you to go into registerbanks and see the registers. Another layer within registers exists, where you can see the field values and even edit them. Most of this is done using a local XML file, however you are able to connect to an FPGA via UART and then read and write from/to the fields. <br>(Note: This project is private due to it being developed within my internship at Stäubli AG)
        </p>
        <!-- <br /><button class="demo">
            <a href="/arcade" target="_blank">Demo</a>
        </button>
        <br /><button class="demo">
            <a href="https://github.com/Dinervc/Cool-Encryption-Tool" target="_blank">GitHub</a>
        </button> -->
    </div>
    <div class="grid-item" id="circleviz">
      <h2>CircleViz</h2>
      <p>
        Everyone has seen one of these circle diagrams where OpenAI was comparing GPT-3.5 with GPT-4
        before (if not,
        <a
          href="https://miro.medium.com/v2/resize:fit:651/1*aksFYLAhO-I85DST29svXQ.png"
          target="_blank"
          >here's a link</a
        >). This project is a simple implementation of such a diagram in a python script. Simply
        input your parameters and the script will generate a circle diagram for you using
        matplotlib. <br />
        (Note: It is highly experimental and the code is still private due to being too early to
        share.)
      </p>
      <!-- <br /><button class="demo">
        <a href="/arcade" target="_blank">Demo</a>
      </button>
      <button class="demo">
        <a href="https://github.com/Dinervc/ai_arcade" target="_blank">GitHub</a>
      </button> -->
    </div>
    <div class="grid-item" id="aiarcade">
      <h2>AI Arcade</h2>
      <p>
        Due to the increasing intelligence of AI, I wanted to create a platform where people can
        play games that were fully generated using AI. The model Opus 3.5 from Anthropic with some
        help of GPT-4o were able to generate a library of 16 unique games, ranging from simple click
        speed challenges to complex 3d doom-like games (both models used are now very much legacy).
      </p>
      <br /><button class="demo">
        <a href="/arcade" target="_blank">Demo</a>
      </button>
      <button class="demo">
        <a href="https://github.com/Dinervc/ai_arcade" target="_blank">GitHub</a>
      </button>
    </div>
    <div class="grid-item" id="sharctestrunner">
      <h2>SharcTestRunner</h2>
      <p>
        My main task at Stäubli AG was to design model-based-tests for our machines. For this purpose, a so-called "HIL" (Hardware-In-the-Loop) system was used. This system allows you to test the machine software in a virtual environment before it is tested on the real machine. SharcTestRunner is able to import models, convert them to python and execute them. The main tasks for this are:
        <ul>
          <li>Create a model of the command-test in <a
          href="https://mbtsuite.com/"
          target="_blank"
          >MBTSuite</a
        ></li>
          <li>Write code-extensions for the models in a local environment so the models contain as little actual business logic as possible</li>
          <li>Execute the tests and report issues to the developers</li>
          <li>Completely refactor the entire SharcTestRunner application</li>
        </ul>
        (Note: This project is private due to it being developed within my internship at Stäubli AG)
      </p>
      <!-- <br /><button class="demo">
        <a href="/arcade" target="_blank">Demo</a>
      </button>
      <br /><button class="demo">
        <a href="https://github.com/Dinervc/Cool-Encryption-Tool" target="_blank">GitHub</a>
      </button> -->
    </div>
    <div class="grid-item" id="tiktaktoe">
      <h2>TikTakToe - Grade: 5.5</h2>
      <p>
        As part of the 2nd semester of the 3rd year of my apprenticeship, we were given the
        opportunity to engage in an experimental IPA-project to gain experience in order for us to
        perform better at the real deal (see HilRes). I chose to create a clone from the popular
        social media platform TikTok. TikTakToe is seemingly fully-featured, allowing you to do
        everything you can on TikTok. Built using Swift and Firebase. I am very proud of this
        project as it was an amazing learning opportunity and a PoC for how well you can build a
        full-featured app with Swift and Firebase. <br />
        (Note: The source code is currently private as I am not yet sure if it could be transformed
        into a real product in the future.)
      </p>
      </div>
      <div class="grid-item" id="coolencryptiontool">
      <h2>Cool Encryption Tool - Grade: 6</h2>
      <p>
        A Python tkinter application that allows you to encrypt and decrypt files. Was built for a
        school project in my 3rd year. It features all the required functionalities and even more.
        <br />
        (Note: Do NOT use this application for sensitive data. I cannot and will not guarantee the
        security of your data nor that it will work as intended (e.g. let you decrypt your files
        again properly). It should protect against casual eavesdropping, but that's it. Nowhere near
        enterprise-grade security.)
      </p>
      <!-- <br /><button class="demo">
        <a href="/arcade" target="_blank">Demo</a>
      </button> -->
      <br /><button class="demo">
        <a href="https://github.com/Dinervc/Cool-Encryption-Tool" target="_blank">GitHub</a>
      </button>
    </div>
    <div class="grid-item" id="dinervclab">
      <h2>Dinervc Lab (this website)</h2>
      <p>
        It was an experiment to see how well I could build a portfolio website in a framework
        (Vue.js) I had no prior experience with. With the help of AI and the internet, I faced
        little to no challenges in creating such a simple website. It marks my adaptability and
        ability to learn new things quickly.
      </p>
      <br /><button class="demo">
        <a href="/" target="_blank">Demo</a>
      </button>
      <button class="demo">
        <a href="https://github.com/Dinervc/Dinervc-Lab" target="_blank">GitHub</a>
      </button>
    </div>
    <div class="grid-item" id="viewpeakclips">
      <h2>ViewPeakClips</h2>
      <p>
        This application allows you to select a video, split it into equally long clips and then
        auto-upload it to certain social media platforms. It is successful at all this and even
        offers a dashboard to view, manage and upload created clips. <br />
        (Note: The source code is private due to it being a potential commercial product in the
        future.)
      </p>
      <!-- <br /><button class="demo">
        <a href="/arcade" target="_blank">Demo</a>
      </button>
      <button class="demo">
        <a href="https://github.com/Dinervc/ai_arcade" target="_blank">GitHub</a>
      </button> -->
    </div>
    <div class="grid-item" id="reflectory">
      <h2>Reflectory - Hackathon Winner</h2>
      <p>
        Developed for Hack United 2023, this AI-powered mental health app won 'Best Solo Hack.' The
        project was built from scratch over a single weekend.
      </p>
      <br /><button class="demo">
        <a href="https://github.com/Dinervc/Reflectory" target="_blank">GitHub</a>
      </button>
    </div>
    <div class="grid-item" id="dice-dash">
      <h2>Dice Dash</h2>
      <p>
        Dice Dash is based on the popular
        <a href="https://en.wikipedia.org/wiki/Pig_(dice_game)" target="_blank">Pig Dice Game</a>.
        The project contains a 2-player game mode, a highly effective AI opponent, immersive music,
        and experimental settings for customization. Despite being a school assignment, I invested
        significant effort, even designing a custom logo. Given the constraints from my teacher,
        this is my best work in my 2nd year.
      </p>
      <br /><button class="demo">
        <a href="https://www.dinervc.ch/DiceDash/index.html" target="_blank">Demo</a></button
      ><button class="demo">
        <a href="https://github.com/Dinervc/DiceDash" target="_blank">GitHub</a>
      </button>
    </div>
    <div class="grid-item" id="webglide">
      <h2>Webglide</h2>
      <p>
        Building Websites was never easier! With this GPT powered tool you can create your very own
        website in a matter of minutes with just one prompt. This project was created for a startup
        my friend and I wanted to do and later we were allowed to use it for our English IDAF in
        school. <br />(Note: The source to this project is private due to poential commercial use in
        the future)
      </p>
    </div>
    <div class="grid-item" id="slither-script">
      <h2>SlitherScript</h2>
      <p>
        Playing Snake has never been more intense! With power-ups, adjustable difficulty settings,
        and randomly placed walls, each game is guaranteed to be unique. Initially created as a
        school project, further development is planned.
      </p>
      <br /><button class="demo">
        <a href="https://www.dinervc.ch/SlitherScript/index.html" target="_blank">Demo</a></button
      ><button class="demo">
        <a href="https://github.com/Dinervc/SlitherScript" target="_blank">GitHub</a>
      </button>
    </div>
    <div class="grid-item" id="gespenster-demmin">
      <h2>"Die Gespenster von Demmin" Reading Journal</h2>
      <p>
        This HTML + CSS-powered reading journal transcends typical projects and offers a unique
        approach to book summaries. Designed for a school assignment, it may not be flawless
        code-wise but stands as a powerful proof of concept. To add a personal touch, I even created
        a custom font.
      </p>
      <br /><button class="demo">
        <a href="https://www.dinervc.ch/LeseJournal/index.html" target="_blank">Demo</a>
      </button>
      <button class="demo">
        <a href="https://github.com/Dinervc/Die-Gespenster-von-Demmin-Lesejournal" target="_blank"
          >GitHub</a
        >
      </button>
    </div>
    
    
    
    
    
    
    <!--
        <div class="grid-item" id="reflectory">
            <h2>Reflectory</h2>
            <p>This is an AI powered mental health improvement app. Created for the Hack United hackathon in August
                2023. It
                was awarded as the best Solo Hack out of the competition.</p>
            <br><button class="demo"><a href="path/to/demo" target="_blank">Demo</a></button>
        </div>
        <div class="grid-item" id="reflectory">
            <h2>Reflectory</h2>
            <p>This is an AI powered mental health improvement app. Created for the Hack United hackathon in August
                2023. It
                was awarded as the best Solo Hack out of the competition.</p>
            <br><button class="demo"><a href="path/to/demo" target="_blank">Demo</a></button>
        </div>
        <div class="grid-item" id="reflectory">
            <h2>Reflectory</h2>
            <p>This is an AI powered mental health improvement app. Created for the Hack United hackathon in August
                2023. It
                was awarded as the best Solo Hack out of the competition.</p>
            <br><button class="demo"><a href="path/to/demo" target="_blank">Demo</a></button>
        </div>
        -->
  </div>
</template>

<style>
#projectsDiv {
  margin-top: 150px;
}

#projects > .grid-item {
  flex: 1 1 500;
  min-height: 350px;
  border: 1px solid gainsboro;
  border-radius: 10px;
}

#information {
  background-color: rgba(58, 83, 56, 0.398);
}

#information > * {
  font-weight: 800;
}
</style>
