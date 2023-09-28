class movie {
    rating = "PGG"; 
    constructor(title,studio,rating) {
         this.title = title;
         this.studio = studio;
         this.rating = rating;
     }
     get Movie() {
     return "MovieName "+M.title+ " and Studio Name is "+M.studio+ " for this rating is "+M.rating;
 }

     set Movie(x) {
         M.rating = x;
         return "Default rating is "+M.rating;
     }
 }

 var M = new movie ("Casino Royale","Eon Productions","PG");
 console.log(M.Movie);
 
 M.Movie = "PG13";
 console.log(M.Movie);
 