
const SomeApp = {
    data() {
      return {
        students: [],
        selectedStudent: null,
        offers: [],
        books: [],
        comments: [],
        commentForm: {},
        bookForm: {}
      }
    },
    computed: {},
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        selectStudent(s) {
            if (s == this.selectedStudent) {
                return;
            }
            this.selectedStudent = s;
            this.offers = [];
            this.fetchOfferData(this.selectedStudent);
        },
        // fetchStudentData() {
        //     fetch('/api/student/')
        //     .then( response => response.json() )
        //     .then( (responseJson) => {
        //         console.log(responseJson);
        //         this.students = responseJson;
        //     })
        //     .catch( (err) => {
        //         console.error(err);
        //     })
        // },
        fetchBookData() {
            fetch('/api/book/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        fetchCommentsData() {
            fetch('/api/comments/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.comments = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        // fetchOfferData(s) {
        //     console.log("Fetching offer data for ", s);
        //     fetch('/api/offer/?student=' + s.id)
        //     .then( response => response.json() )
        //     .then( (responseJson) => {
        //         console.log(responseJson);
        //         this.offers = responseJson;
        //     })
        //     .catch( (err) => {
        //         console.error(err);
        //     })
        //     .catch( (error) => {
        //         console.error(error);
        //     });
        // }
        postNewBook(evt) {      
            console.log("Posting:", this.bookForm);
            // alert("Posting!");
    
            fetch('api/book/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.bookForm = {};
              });
          },
          postNewComment(evt) {      
            console.log("Posting:", this.commentForm);
            // alert("Posting!");
    
            fetch('api/comments/create.php', {
                method:'POST',
                body: JSON.stringify(this.commentForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.comments = json;
                
                // reset the form
                this.commentForm = {};
              });
          }
    },
    created() {
        this.fetchBookData();
        this.fetchCommentsData();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#offerApp');