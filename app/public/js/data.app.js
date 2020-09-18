var app = new Vue({
  el:'#app',
  data: {
    name:'',
    country:'',
    birthday:'',
    age:'',
    email:'',
    photo:'',
    thumb:'',
  },
  created() {
    this.fetchUser();
  },
  methods:   {
    fetchUser: function() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then( data => {
        var profileData = data.results[0];
        console.log(profileData);
        this.name = profileData.name.first + ' ' + profileData.name.last;
        this.country = profileData.location.country;
        this.birthday = profileData.dob.date.substring(0,10);
        this.age = profileData.dob.age;
        this.email = profileData.email;
        this.photo = profileData.picture.large;
        this.thumb = profileData.picture.thumbnail;
      });
    }
  }
})
