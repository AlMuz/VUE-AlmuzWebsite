<template>
  <div class="home">
    <HomeProjects :loading="projectsLoading" :projects="projects" />
  </div>
</template>

<script>
import axios from "axios";
import HomeProjects from "@/components/HomeProjects";
import moment from "moment";

export default {
  components: {
    HomeProjects
  },
  data() {
    return {
      projectsLoading: true,
      projects: []
    };
  },
  beforeMount() {
    axios
      .get("https://api.github.com/users/almuz/repos?sort=updated")
      .then(res => {
        console.log(res.data);
        this.projects = res.data.map(project => {
          let newProject = {};
          newProject.name = project.name;
          newProject.language = project.language;
          newProject.link = project.html_url;
          newProject.created = moment(new Date(project.created_at)).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          newProject.updated = moment(new Date(project.updated_at)).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          return newProject;
        });
        setTimeout(() => {
          this.projectsLoading = false;
        }, 2000);
      });
  }
};
</script>
