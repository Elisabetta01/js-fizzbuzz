// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// stampo in console i numeri da 1 a 100 con condizioni

let container = document.getElementById('container');



for( let i = 1; i <= 100; i++){

     let div = document.createElement('div');

     // condizioni
     if( i % 3 == 0 && i % 5 == 0 ){
          div.className = 'box box-red'
          container.append( div )
          div.innerHTML = "fizzbuzz"

          console.log("fizzbuzz")
     } else if ( i % 3 == 0 ){
          div.className = 'box box-green'
          container.append( div )
          div.innerHTML = "fizz"

          console.log("fizz")
     } else if ( i % 5 == 0 ){
          div.className = 'box box-yellow'
          container.append( div )
          div.innerHTML = "buzz"

          console.log("buzz")
     } else {
          div.className = 'box'
          container.append( div )
          div.innerHTML = i

          console.log( i )
     }

}
