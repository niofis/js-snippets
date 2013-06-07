var http = require('http');

http.createServer().listen();

var is_prime=function(n){
      if(n%2===0) return false;
      for(var x=3;x<n;++x){
        if(n%x===0) return false;
      }
      return true;
};

var get_primes = function(count){
    var out_p=[2];
    var current=3;
    while(out_p.length<count){
     if(is_prime(current)===true){
         out_p.push(current);
     }
     current+=2;
    }
    return out_p;
};

var factorize = function(number){
    var primes=get_primes(1000);
    var fts=[];
    var rest=number;
    for(var i=0;i<primes.length;++i){
        var p=primes[i];
        while(rest%p===0){
            fts.push(p);
            rest=rest/p;
        }
    }
    return fts;
};

var product = function(factors){
    var p=1;
    factors.forEach(function(v){p=p*v;});
    return p;
}
var number=123456654321;
var factors=factorize(number);
var prod=product(factors);
console.log(number, factors, prod,number==prod);

