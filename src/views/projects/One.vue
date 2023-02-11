<template>
  <CoverImage :url="`/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <h3 class="section-title">My role in this project</h3>
    <p>
      I've joined this project at the very first stage. Initial team was made of 6 developer and 1 tester - me.
      At the very beginning, manual tests were the most important as they help ensure whole project is build on strong foundation. At this stage, there was a lot of testing, as developers were able to perform very well without any technical debt in the project.

      tester. In the
      <ul>
        <li>1 tester vs 6. developers</li>
        <li></li>
        <li></li>
      </ul>
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Chalanges</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Summary</h3>
  </div>
  <Testimonial
    v-for="t in testimonials"
    :key="t.author"
    :author="t.author"
    :body="t.body"
    :title="t.title"
    :picture-url="t.pictureUrl"
    :type="t.type"
    :url="t.url"
  >
  </Testimonial>

  <OtherProjectCaseStudies :projects="projects" />
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { CoverImage, OtherProjectCaseStudies, Testimonial } from "@/components";
import { useDB } from "@/composables";
import type { IProject, ITestimonial } from "@/types";

export default defineComponent({
  name: "OperaMobile",
  components: {
    CoverImage,
    OtherProjectCaseStudies,
    Testimonial,
  },
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true,
    },
    testimonials: {
      type: Array as PropType<ITestimonial[]>,
      required: true,
    },
  },
  setup() {
    const otherCaseStudies = ["opera-mobile"];
    const { projects } = useDB();
    return {
      projects: projects.filter((p) => otherCaseStudies.includes(p.slug)),
    };
  },
});
</script>
