export const state = () => ({
  projects: [],
  selectedProject: {}
})

export const mutations = {
  setAllProjects (state, projects) {
    state.projects = projects
  },
  setSelectedProject (state, project) {
    state.selectedProject = project
  }
}

export const actions = {
  async fetch ({ commit }) {
    const projects = await this.$axios.$get('https://api.github.com/users/almuz/repos?sort=updated')
    commit('setAllProjects', projects)
  },
  fetchProject ({ commit, state }, name) {
    const project = state.projects.filter(i => i.name === name)
    commit('setSelectedProject', project)
  }
}

export const getters = {
  projects: s => s.projects,
  selectedProject: s => s.selectedProject
}
