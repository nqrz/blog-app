export const state = () => ({
  metadata: []
})

export const mutations = {
  login (state, metadata) {
    state.metadata.push({
      metadata
    })
  },
  remove (state, todo) {
    state.list = state.list.filter(item => item.id !== todo.id)
  }
}