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
  async fetchProject ({ commit, state }, name) {
    let project = {}

    // if projects store is empty - doing request to the api
    if (state.projects.length === 0) {
      project = await this.$axios.$get(`https://api.github.com/repos/AlMuz/${name}`)
    } else {
      project = state.projects.find(i => i.name === name)
    }

    commit('setSelectedProject', project)
  }
}

export const getters = {
  projects: s => s.projects,
  selectedProject: s => s.selectedProject
}
