//finction defination
function sayhello(name,cbfn){//formal argument
    console.log(`hello ${name}`);
    cbfn(name);

}
//function end

//function definationn
function sayhru(name){//formal rgument
    console.log(`h0w are you ${name}`);
}
//functtion calling
sayhello("antim",sayhru);//actual argument//callback function
let y="sonagra";
//sayhello()
function sayhii(n){
    console.log(`hii `);
}
let n="songara";
//sayhii(n);
setTimeout(sayhii,2000);//2 second