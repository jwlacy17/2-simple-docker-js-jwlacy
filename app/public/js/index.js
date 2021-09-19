const Offer = {
    data() {
      return {
        "person": {},
        "offers": [
                {
                    "id": 1,
                    "name": "Janet Doe",
                    "picture": 'https://randomuser.me/api/portraits/men/10.jpg',
                    "country": 'USA',
                    "birthday":"05/23/1999",
                    "age": "23",
                    "email": "janet@gmail.com"
                },
                {
                    "id": 2,
                    "name": "John Doe",
                    "picture": 'https://randomuser.me/api/portraits/men/10.jpg',
                    "country": 'USA',
                    "birthday":"05/23/1998",
                    "age": "24",
                    "email": "john@gmail.com"
                }
            ]
        }
    },
    created() {
        console.log("A");
        fetch('https://randomuser.me/api/')
        .then( response => response.json() )
        .then( (responseJson) => {
            console.log(responseJson);
            console.log("C");
            this.person = responseJson.results[0];
        })
        .catch( (err) => {
            console.error(err);
        })
        console.log("B");
    } //end created
} // end Offer config
  
Vue.createApp(Offer).mount('#offerApp');
console.log("Z");