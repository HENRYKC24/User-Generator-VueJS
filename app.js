const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      gender: "female",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const data = await fetch("https://randomuser.me/api");
      const { results } = await data.json();
      const [user] = results;
      
      const {
        gender,
        name: { first, last },
        picture: {large},
        email,
      } = user;

      this.firstName = first;
      this.lastName = last;
      this.email = email;
      this.picture = large;
      this.gender = gender;
    },
  },
});

app.mount("#app");
