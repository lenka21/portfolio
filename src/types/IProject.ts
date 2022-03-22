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
  | "bamboo"
  | "bitbucket"
  | "bootstrap"
  | "browserstack"
  | "c"
  | "cucumber"
  | "cookiecutter"
  | "cpp"
  | "django-rest-framework"
  | "django"
  | "docker"
  | "git"
  | "github"
  | "gitlab"
  | "graphql"
  | "java"
  | "javascript"
  | "jenkins"
  | "jira"
  | "jquery"
  | "postgresql"
  | "protractor"
  | "python"
  | "solr"
  | "stripe"
  | "sqlalchemy"
  | "typescript"
  | "jestjs"
  | "paypal"
  | "selenium"
  | "cypress"
  | "babeljs"
  | "stripe"
  | "x-ray"
  | "testrail"
  | "html5"
  | "css3"
  | "vue";

export interface IProjectFilter {
  name: string;
  tag: IProjectFilterTag;
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
