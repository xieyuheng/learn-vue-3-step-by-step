import AssigmentList from "./AssigmentList.js"

export default {
  components: { AssigmentList },

  template: `
    <assigment-list :assigments="filters.inProgress" title="In Progress"></assigment-list>
    <assigment-list :assigments="filters.completed" title="Completed"></assigment-list>

    <form class="my-3" @submit.prevent="add()">
      <div class="border-2 border-gray-600">
        <input class="p-2" placeholder="New assigment ..." name="" type="text" value=""/>
        <button class="p-2 border-l-2 border-gray-600" type="submit">Add</button>
      </div>
    </form>
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
    filters() {
      return {
        inProgress: this.assigments.filter((assigment) => assigment.complete),
        completed: this.assigments.filter((assigment) => !assigment.complete),
      }
    },
  },

  methods: {
    add() {
      alert("hi there")
    }
  }
}
