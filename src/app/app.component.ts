import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LikeDislike';
  likes_counter: number = 100;
  liked: boolean = false
  disliked: boolean = false
  dislikes_counter: number = 25;

  like_dislike_button(lkedOrDslkd: string) {
    lkedOrDslkd == 'like' ? (this.liked = !this.liked, this.disliked = false, this.likes_counter++,
      this.likes_counter > 100 ? this.dislikes_counter = 25 : '',
      this.likes_counter >= 102 ? this.likes_counter -= 2 : '') :

      (this.disliked = !this.disliked, this.liked = false, this.dislikes_counter++, //if type==dislike
        this.dislikes_counter > 25 ? this.likes_counter = 100 : '',
        this.dislikes_counter >= 27 ? (this.dislikes_counter -= 2, this.liked = false, this.likes_counter = 100) : '')
        
        //table of a number 
        let num=9
        for (let i=1;i<=10;i++){
          console.log(num+"*"+i+"="+num*i)
        }

        //Prime number upto 100
      // let num=5;
      for(let n=0;n<=100;n++){
      for(let i=2;i<=n;i++){
        // console.log(num*i)
        // if(n>i)
        // {
            if(n==i){
             break;
           }
            if(n%i==0){
                // console.log("not prime")
                break
               }  
               else {
                console.log("prime number",n);
                break
               }
        }
      //   else if(n==i){
      //     i++
      //   }
      // else if(n<i)
      // {
      //        if(n%i==0){
      //         // console.log("not prime")
      //         break
      //        }   
      //        else{
      //         console.log("prime number",n)
      //        }          
      }  
    }    
      }

  //Palindrome 
 let nmbr=121
 if(nmbr.toString().split('').join()==nmbr.toString().split('').reverse().join())
 {
  let palin=nmbr.toString().split('').reverse().join()
console.log("Matched",palin)
 }
 else{
console.log("Not Matched")

 }

 //fibonnaci Series
let n=10
let n1=0
let n2=1
console.log(n1+','+n2)
for (var i=2;i<=n;i++){
  let n3=n1+n2
  console.log(n3)
  n1=n2
  n2=n3
}

//matrix
// let mat:any=[10][10]
for(var i=0;i<3;i++){
for(var j=0;j<3;j++){
// let k=i.toString()
// let l=j.toString()
var m:any=[i][j]=[i][j]
console.log("matrix j",m)

}
}
  
