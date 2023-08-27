<script setup lang="ts"></script>

<template>
    <div class="grid-container" id="projectsDiv">
        <div class="grid-item" id="dice-dash">
            <h2>Dice Dash</h2>
            <p>Dice Dash is based on the popular <a href="https://en.wikipedia.org/wiki/Pig_(dice_game)" target="_blank">Pig
                    Dice Game</a>.
                The project features things like 2 player game, AI opponent based on one of the most effective ways to play
                the game, music and experimental settings to play around with. Even though this was just a school project, I
                put a lot of
                work into it. I also created a custom logo. Truly, this is the best I was able to do (I was restricted by my
                teacher, though) in 2nd year.</p>
            <br><button class="demo"><a href="path/to/demo" target="_blank">Demo</a></button>
        </div>
        <div class="grid-item" id="reflectory">
            <h2>Reflectory</h2>
            <p>This is an AI powered mental health improvement app. Created for the Hack United hackathon in August
                2023. It was awarded as the best Solo Hack out of the competition. We were given the weekend to create a
                project from ground up.</p>
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
            <p>Playing snake was never more intense! Wether it's the power ups, the difficulty settings are the randomly
                placed walls, every game is guarenteed to be different from the last. Created for a school project. Though,
                further development is likely.</p>
            <br><button class="demo"><a href="https://www.dinervc.ch/SlitherScript/index.html"
                    target="_blank">Demo</a></button>
        </div>
        <div class="grid-item">
            <h2>Information</h2>
            <p>I started all of these projects within the last three years. Some were for a school project, some
                were for my personal education and a few were created as a mix of both. They clearly outline just how far
                I've come in less than three years of my computer science school. If I had to pick one, my most favorite one
                is "Reflectory", for somewhat obvious reasons. However, if we disregard the fact that it won the Hackathon,
                I would actually say Dice Dash is my best project. But let's not forget Webglide or SlitherScript! Both
                amazing projects as well.</p>
        </div>
        <div class="grid-item" id="gespenster-demmin">
            <h2>"Die Gespnster von Demmin" Reading Journal</h2>
            <p>This is not your average dinervc-project nor reading journal. This is an HTML + CSS powered reading journal
                for a book. As you might be able to guess, this was created for a school project. Code-wise this is not as
                impeccable as the other projects but it serves as a great PoC that these kinds of things can be done in so
                many ways, not just in text editors. And to give it a personal touch, I created my own font for it.</p>
            <br><button class="demo"><a href="https://www.dinervc.ch/LeseJournal/index.html"
                    target="_blank">Demo</a></button>
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
        <div class="grid-item" id="reflectory">
            <h2>Reflectory</h2>
            <p>This is an AI powered mental health improvement app. Created for the Hack United hackathon in August
                2023. It
                was awarded as the best Solo Hack out of the competition.</p>
            <br><button class="demo"><a href="path/to/demo" target="_blank">Demo</a></button>
        </div>
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
</style>
