function add(a,b){

    console.log(a+b);
    
    }
    
    add(10,25);
    
    //Local variables
    
    function greet() {
        let n = "Jonathon";
        console.log("His name is:"+n);
        
    }
    greet();
    
    //global function
    
    let m = "ADiL";
    
    function Hk() {
        console.log("HeLLo "+m);
    }
    Hk();
    console.log(m);
    
    //parameter
    
    function ok(a="Jonathan",b="Das") {
        console.log("Hello "+a +" "+b);    
    }
    ok();
    
    //Returing a value
    
    function square(a) {
        return a*a;
        
    }
    
    let c = square(4);
    
    console.log(c);