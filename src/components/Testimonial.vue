<template>
  <div class="position-relative p-5 shadow">
    <blockquote class="blockquote ps-4">
      <p class="mb-4">{{ body }}</p>
      <i
        class="
          quote-icon
          fas
          fa-quote-left fa-lg
          position-absolute
          text-primary
        "
      ></i>
      <footer class="blockquote-footer presudo-hidden mt-4">
        <div class="row client-profile">
          <div class="col-12 col-md-auto">
            <img :src="pictureUrl" alt="" class="rounded-circle" />
          </div>
          <div class="col">
            <cite
              title="Source"
              class="quote-source d-inline-block font-style-normal pt-3"
            >
              <span class="d-block">{{ author }}</span>
              <span class="d-block">{{ title }}</span>
              <template v-if="type == 'linkedin'">
                <span class="d-block position-absolute source-link">
                  <font-awesome-icon
                    :icon="['fab', 'linkedin']"
                    class="fa-2x me-1"
                    transform="down-3"
                  />
                  <a
                    class="text-secondary text-link"
                    :href="url"
                    target="_blank"
                  >
                    View on Linkedin
                    <font-awesome-icon
                      icon="external-link-alt"
                      class="ms-1"
                      transform="up-1"
                    />
                  </a>
                </span>
              </template>
            </cite>
          </div>
        </div>
      </footer>
    </blockquote>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    pictureUrl: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
blockquote {
  text-align: left;
}
</style>
