var fibonacci = function (){
    var memo = [0, 1];
    var fibCount = 0;
    var fib = function(n){
        fibCount++;
        var result = memo[n];
        if(typeof result !== 'number'){
            result = fib(n-1) + fib(n-2);
            memo[n] = result;
        }
        return result;
    }
    return fib;
}()

for(var i=0; i <= 10; i++){
    console.log(i + ":" + fibonacci(i));
}