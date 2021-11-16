/*
function openMenu(){

}

function responseCallback( response ){
    if( response.ok ){
        return response.json();
    }
    else{
        throw new Error("some message");
    }
}

fetch( url )
    .then( responseCallback )
    .then( dataCallback )
    .catch( erroCallback )

let menu = document.querySelector( "#menu" );

menu.addEventListener( 'click', openMenu)
*/

function printHello(){
    console.log( "hello" );
}

function printGoodBye(){
    console.log( "good bye" );
}

function addTwoNums( n1 = 10, n2 = 20 ){
    return n1 + n2;
}

function saySomething( action ){
    console.log( action() );
}

saySomething( printHello );

saySomething( printGoodBye );

saySomething( addTwoNums );