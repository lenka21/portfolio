<template>
  <section class="skills-section section py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-3">
        Skills Overview
      </h3>
      <!-- <div class="section-intro mx-auto text-center mb-5 text-secondary">
        I have more than 12 years' experience building rich web applications &
        sophisticated applications for clients all over the world. Below is a
        quick overview of my main technical skill sets and tools I use. Want to
        find out more about my experience?
        <router-link class="text-link" :to="{ name: 'resume' }"
          >Check out my online resume</router-link
        >.
      </div> -->

      <div class="skills-blocks mx-auto pt-5">
        <div class="row">
          <SkillsBlock
            class="manual-testing"
            group-name="Manual Testing"
            :skills="[
              'Preparing tests plans',
              'Creating scenarios',
              'Bugs raporting',
              'Regression testing',
              'XRay / qTest',
            ]"
            icon="/images/manual-testing.svg"
          />

          <SkillsBlock
            class="automated-testing"
            group-name="Automated Testing"
            :skills="[
              'Cypress / CodeceptJS / Protractor',
              'Selenium / WebDriver',
              'Cucumber / BDD',
              'BrowserStack / Sauce Labs',
              'Page Object Pattern',
            ]"
            icon="/images/automated-testing.svg"
          />

          <SkillsBlock
            group-name="Tools"
            :skills="[
              'Git CLI',
              'GitHub / Bitbucket / GitLab',
              'Chrome Dev Tools / XPath',
              'Postman / cURL',
              'JS / HTML5 / CSS3 / Bootstrap',
            ]"
            icon="/images/other-skills-icon.svg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillsBlock from "./SkillsBlock.vue";

export default defineComponent({
  name: "SkillsOverview",
  components: {
    SkillsBlock,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.manual-testing :deep() .skills-icon {
  width: 46px;
  margin-top: -2px;
  filter: invert(100%);
}

.automated-testing :deep() .skills-icon {
  width: 46px;
  filter: invert(1);
  margin-left: 0px;
  margin-top: -5px;
}
</style>
