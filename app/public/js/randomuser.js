const app = Vue.createApp({
    data() {
      return {
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        firstName: 'John',
        lastName: 'Doe',
        country: 'USA',
        birthday: '05/23/1999',
        age: '23',
        email: 'john@gmail.com',
      }
    },
    methods: {
      async getUser() {
        const res = await fetch('https://randomuser.me/api')
        const { results } = await res.json()
  
        // console.log(results)
  
        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.country = results[0].gender
        this.picture = results[0].picture.large
        this.age = results[0].age
        this.email = results[0].email

      },
    },
  })
  
  app.mount('#app')