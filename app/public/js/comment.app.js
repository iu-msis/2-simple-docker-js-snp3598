var app = new Vue({
  el: '#comments',
  data: {
    commentData: [{
      id: '',
      commentText: ''
    }],
    commentNew: {
      id: '',
      commentText: ''
    }
  },

  methods:{
    fetchUser(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.commentData=json;
        console.log(this.commentData);
      });
    },

    createComment() {
      fetch('api/comments/create.php', {
        method:'POST',
        body: JSON.stringify(this.commentNew),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.commentData = json;
        this.commentNew = this.newCommentData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.commentNew);
    },
    newCommentData() {
      return {
        id: "",
        commentText: ""
      }
    }

  },
  created() {
    this.fetchUser();
  }
});
