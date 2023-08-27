<script setup lang="ts"></script>

<template>
    <div class="grid-container" id="projectsDiv">
        <div class="grid-item" id="dice-dash">
            <h2>Dice Dash</h2>
            <p>Dice Dash is based on the popular <a href="https://en.wikipedia.org/wiki/Pig_(dice_game)" target="_blank">Pig
                    Dice Game</a>.
                The project boasts a 2-player game mode, a highly effective AI opponent, immersive music, and experimental
                settings for customization. Despite being a school assignment, I invested significant effort, even designing
                a custom logo. Given the constraints from my teacher, this is my best work in my 2nd year.</p>
            <br><button class="demo"><a href="https://www.dinervc.ch/DiceDash/index.html"
                    target="_blank">Demo</a></button><button class="demo"><a href="https://github.com/Dinervc/DiceDash"
                    target="_blank">GitHub</a></button>
        </div>
        <div class="grid-item" id="information">
            <h2>Information</h2>
            <p>I've initiated various projects over the last three years, ranging from school assignments to personal
                educational endeavors. These projects showcase my growth throughout my computer science education. While
                'Reflectory' stands out due to its Hackathon win, 'Dice Dash' is my best work in terms of technical
                complexity. 'Webglide' and 'SlitherScript' are also noteworthy contributions.</p>
        </div>
        <div class="grid-item" id="reflectory">
            <h2>Reflectory</h2>
            <p>Developed for Hack United 2023, this AI-powered mental health app won 'Best Solo Hack.' The project was built
                from scratch over a single weekend.</p>
            <br><button class="demo"><a href="https://github.com/Dinervc/Reflectory" target="_blank">GitHub</a></button>
        </div>
        <div class="grid-item" id="webglide">
            <h2>Webglide</h2>
            <p>Building Website was never easier! With this GPT powered tool you can create your very own website in a
                matter of minutes with just one prompt. This project was created for a startup my friend and I wanted to do
                and later we were allowed to use it for our English IDAF in school.</p>
            <br><button class="demo"><a href="path/to/demo" target="_blank">Demo</a></button>
        </div>
        <div class="grid-item" id="slither-script">
            <h2>SlitherScript</h2>
            <p>Playing Snake has never been more intense! With power-ups, adjustable difficulty settings, and randomly
                placed walls, each game is guaranteed to be unique. Initially created as a school project, further
                development is planned.</p>
            <br><button class="demo"><a href="https://www.dinervc.ch/SlitherScript/index.html"
                    target="_blank">Demo</a></button><button class="demo"><a href="https://github.com/Dinervc/SlitherScript"
                    target="_blank">GitHub</a></button>
        </div>
        <div class="grid-item" id="gespenster-demmin">
            <h2>"Die Gespenster von Demmin" Reading Journal</h2>
            <p>This HTML + CSS-powered reading journal transcends typical projects and offers a unique approach to book
                summaries. Designed for a school assignment, it may not be flawless code-wise but stands as a powerful proof
                of concept. To add a personal touch, I even created a custom font.</p>
            <br><button class="demo"><a href="https://www.dinervc.ch/LeseJournal/index.html"
                    target="_blank">Demo</a></button>
            <button class="demo"><a href="https://github.com/Dinervc/Die-Gespenster-von-Demmin-Lesejournal"
                    target="_blank">GitHub</a></button>
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

#projects>.grid-item {
    flex: 1 1 500;
    min-height: 350px;
    border: 1px solid gainsboro;
    border-radius: 10px;
}

#information {
    background-color: rgba(58, 83, 56, 0.398);

}

#information>* {
    font-weight: 800;
}
</style>
