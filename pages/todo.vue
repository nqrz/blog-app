<template>
  <div class="max-w-md mx-auto">
    <div class="card mx-2">
      <h1 class="text-center">Todo list</h1>
      <p class="text-center mb-3">{{ formatDate(Date.now()) }}</p>

      <!-- Todo list -->

      <ul>
        <li v-for="todo in todos" :key="todo.id" class="flex justify-between items-center w-full py-1">
          <div>
            <input :checked="todo.done" @change="toggle(todo)" type="checkbox" :id="todo.id">
            <label :class="{ done: todo.done }" :for="todo.id">{{ todo.text }}</label>
          </div>
          <button class="btn rounded-md" @click="removeTodo(todo)">remove</button>
        </li>
      </ul>

      <!-- Input Todo -->

      <input class="mb-3 mt-2 w-full" type="text" @keyup.enter="addTodo" v-model="text" placeholder="What todo next?">
      
      <!-- Error section -->
      <transition name="slide-fade">
        <WarnBox v-if="error">
          {{ error }}
        </WarnBox>
      </transition>

      <!-- Info section -->
      <InfoBox>
        Press enter to submit
      </InfoBox>
      <InfoBox>
        This list is stored with Vuex. Erased if web is reloaded.
      </InfoBox>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  head({$seoMeta}){
    return {
      title: 'Todo App',
      meta: $seoMeta({
        title: 'Todo App',
        description: 'This is todo list app with Vuex. 📝',
        url: 'https://nizarbaihaqi.com/todo'
      }, false)
    }
  },
  data() {
    return {
      text: '',
      error: ''
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo () {
      if (!this.text) {
        this.error = 'Please type something.'
      } else {
        this.$store.commit('todos/add', this.text)
        this.text = ''
        this.error = ''
      }
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    }),
    removeTodo (todo){
      this.$store.commit('todos/remove', todo)
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>