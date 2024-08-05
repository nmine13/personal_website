<template>
  <div class="about">
    <div class="about-wrapper site-width">
      <img class="about-img" src="../assets//headshot_2024.jpg" />
      <p class="about-par">I am a PhD student in the Information School at the University of Wisconsin-Madison. I
        explore
        the intersection of ideologies and epistemic commitments in social and intellectual movements that form around
        internet technologies. I am deeply interested in the relationship between the social and political power
        conferred
        to technoscientific expertise, public discourse surrounding emergent technologies, and the boundaries of AI
        ethics.
        My research is informed by Science and Technology Studies (STS), the sociology of quantification, and social
        histories of information infrastructures.</p>
      <p class="about-par">As an undergraduate at the University of Chicago (BA, '15), I devised my interdisciplinary
        course of study, housed within the Division of the Humanities, in order to interrogate the possibility of
        individual agency amidst normative power structures. My coursework centered in philosophy, gender studies, and
        the history and philosophy of science. I received a minor in Visual Arts. After graduating, I worked in
        Chicago's public art and gallery scenes before beginning a career as a software developer without a full
        understanding of the social and emotional shift this new career would entail. The profound impact on my
        worldview that ensued from navigating professional and "mission-driven" tech spaces in Silicon Valley motivated
        my pursuit of graduate studies. My unique collection of professional and intellectual experiences continue to
        inform my work.</p>
      <div class="resume-wrapper">
        <a class="resume-download" href="../assets/Naomi_Mine_Resume.pdf" download>Download CV</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/main.scss";

.about {
  &-wrapper {
    margin: 20px auto;
  }

  &-pic-wrapper {
    display: flex;
  }

  &-par {
    margin: 20px auto;
  }

  &-img {
    max-width: 220px;
    float: right;
    padding: 0 0 15px 20px;
  }

  @include breakpoint(mobile) {
    &-img {
      max-width: 160px;
    }
  }
}

a {
  margin-right: 12px;
}

svg {
  fill: white;
}

@media (min-width: 1024px) {
  // .about {
  //   min-height: 100vh;
  //   display: flex;
  //   align-items: center;
  // }
}
</style>
