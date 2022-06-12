export default {
  template: `
      <section v-show="inProgressAssigments.length">
        <h2 class="font-bold my-2">In Progress</h2>

        <ul>
          <li v-for="assigment in inProgressAssigments" :key="assigment.id">
            <label>
              {{ assigment.name }}
              <input type="checkbox" v-model="assigment.complete" />
            </label>
          </li>
        </ul>
      </section>

      <section v-show="completedAssigments.length">
        <h2 class="font-bold my-2">Completed</h2>

        <ul>
          <li v-for="assigment in completedAssigments" :key="assigment.id">
            <label>
              {{ assigment.name }}
              <input type="checkbox" v-model="assigment.complete" />
            </label>
          </li>
        </ul>
      </section>
`,

  data() {
    return {
      assigments: [
        { name: "Finish project", complete: false, id: 1 },
        { name: "Read chapter 4", complete: false, id: 2 },
        { name: "Turn in homework", complete: false, id: 3 },
      ],
    }
  },

  computed: {
    completedAssigments() {
      return this.assigments.filter((assigment) => assigment.complete)
    },

    inProgressAssigments() {
      return this.assigments.filter((assigment) => !assigment.complete)
    },
  },
}
