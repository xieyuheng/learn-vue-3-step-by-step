export default {
  template: `
    <section v-show="assigments.length">
      <h2 class="font-bold my-2">{{ title }}</h2>

      <ul>
        <li v-for="assigment in assigments" :key="assigment.id">
          <label>
            {{ assigment.name }}
            <input type="checkbox" v-model="assigment.complete" />
          </label>
        </li>
      </ul>
    </section>
  `,

  props: {
    assigments: Array,
    title: String,
  },
}
