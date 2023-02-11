import { AllFilterTag } from ".";

export type IProjectFilterTag =
  | "software-development"
  | "Java Script"
  | "HTML"
  | "CSS"
  | "manual-testing"
  | "automated-testing"
  | "team-leading"
  | "Co-Founder"
  | "Business Development";
export type IProjectBadge =
  | "Software Development"
  | "Java Script"
  | "HTML"
  | "CSS"
  | "Manual Testing"
  | "Automated Testing"
  | "Team Leading"
  | "Co-Founder"
  | "Business Development";

export type ITechnology =
  | "android"
  | "angular"
  | "angularjs"
  | "apollographql"
  | "babeljs"
  | "bamboo"
  | "bdd"
  | "bitbucket"
  | "bootstrap"
  | "browserstack"
  | "c"
  | "codeceptjs"
  | "cookiecutter"
  | "cpp"
  | "css3"
  | "cucumber"
  | "cypress"
  | "django-rest-framework"
  | "django"
  | "docker"
  | "express"
  | "gherkin"
  | "git"
  | "github"
  | "gitlab"
  | "graphql"
  | "html5"
  | "java"
  | "javascript"
  | "jenkins"
  | "jestjs"
  | "jira"
  | "jquery"
  | "paypal"
  | "postgresql"
  | "prettier"
  | "protractor"
  | "python"
  | "redis"
  | "sass"
  | "saucelabs"
  | "selenium"
  | "solr"
  | "sqlalchemy"
  | "stripe"
  | "stripe"
  | "testrail"
  | "tslint"
  | "typescript"
  | "vue"
  | "webpack"
  | "x-ray";

export interface IProjectFilter {
  name: string;
  tag: IProjectFilterTag | AllFilterTag;
}

export interface IProject {
  name: string;
  slug: string;
  url: string;
  archivedUrl?: string;
  type: string;
  companyName?: string;
  thumbnail: string;
  summaryTitle: string;
  summary: string;
  filterTags: IProjectFilterTag[];
  badges: IProjectBadge[];
  technologies: ITechnology[];
  thumbnailLogo: string;
  featured: boolean;
  repositoryUrl?: string;
}
