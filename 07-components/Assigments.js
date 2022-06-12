import AssigmentList from "./AssigmentList.js"

export default {
  components: { AssigmentList },
  template: `
    <assigment-list :assigments="inProgressAssigments" title="In Progress"></assigment-list>
    <assigment-list :assigments="completedAssigments" title="Completed"></assigment-list>
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
