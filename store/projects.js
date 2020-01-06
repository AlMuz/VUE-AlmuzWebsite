export const state = () => ({
  projects: []
})

export const mutations = {
  setProjects (state, projects) {
    state.projects = projects
  }
}

export const actions = {
  async fetch ({ commit }) {
    const projects = await this.$axios.$get('https://api.github.com/users/almuz/repos?sort=updated')
    commit('setProjects', projects)
  }
}

export const getters = {
  projects: s => s.projects
}
