<template>
  <CoverImage :url="`/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <h3 class="section-title">My role in this project</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Chalanges</h3>
    <h4 class="section-title">Complete re-write of whole Payment System</h4>
    <h4 class="section-title">Non consistent architecture</h4>
    <h4 class="section-title">Legacy Code</h4>
  </div>

  <div class="section-row">
    <h3 class="section-title">Biggest Lessons Learned</h3>
  </div>

  <div class="section-row">
    <h3 class="section-title">Summary</h3>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { CoverImage } from "@/components";
import { useDB } from "@/composables";
import "vue3-carousel/dist/carousel.css";
import { IProject, ITestimonial } from "@/types";

export default defineComponent({
  name: "Pitchup",
  components: {
    CoverImage,
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
<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
