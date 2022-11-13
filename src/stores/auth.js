// TE DEFINĒT USER OBJEKTU
import { reactive } from 'vue'
export const auth = reactive({
is_authenticated: localStorage.is_authenticated ?? false,

user : {
    name: "Natālija",
    surname: "Andersone",
    code: "IT20030",
    favorite_songs: [],
        
},

setUserData(name, surname, code) {
    this.user.name = name;
    this.user.surname = surname;
    this.user.code = code;
},

authenticate(email, password) {
    if(email == "natalija.andersone@va.lv" && password == "123456"){
        localStorage.is_authenticated === true;
        this.is_authenticated === true;
        router.push('/janodzeshteksts');
    }
},

logout() {
    localStorage.clear();
    this.is_authenticated === false;
    router.push('/login');
},

toggleFavorite(songID) {
    var index = this.user.favorite_songs.map(song => song.id).indexOf(songID);
    if(index !== "undefined"){
        user.favorite_songs.splice(index, 1);
    }else{
        user.favorite_songs.push(songID);
    }

},

getFavoriteSongs() {
    return this.user.favorite_songs;
}
})
