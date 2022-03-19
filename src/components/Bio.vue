<template>
  <header class="header">
    <div class="header-intro theme-bg-primary text-white py-5">
      <div class="container">
        <div class="profile-teaser row gx-lg-5 justify-content-center">
          <div class="col-12 col-md-auto text-center text-md-start">
            <img
              class="profile-image mb-3 mb-lg-0 ms-md-0 rounded mx-auto"
              src="/images/profile.png"
              alt=""
            />
          </div>
          <div class="col text-center text-md-start">
            <div class="lead">Hello, my name is</div>
            <h2 class="mt-0 display-4 font-weight-bold">Magdalena Szumna</h2>
            <div class="bio mb-3">
              <p>
                I am a Senior Quality Assurance Engineer with over 8 years of
                experience, specializing in manual and automated testing of
                complex web applications with various test frameworks.
              </p>
              <p>
                Experienced with bootstrapping the testing process in new and
                existing projects, leading QA teams (with up to 6 people), with
                additional Software Development background.
              </p>
              Check out my project
              <router-link
                class="link-on-bg text-link"
                :to="{ name: 'projects' }"
                >case studies</router-link
              >
              and
              <router-link class="link-on-bg text-link" :to="{ name: 'resume' }"
                >resume</router-link
              >.
            </div>
            <router-link
              class="theme-btn-on-bg btn font-weight-bold theme-btn-cta"
              :to="{ name: 'contact' }"
              >Hire Me</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
