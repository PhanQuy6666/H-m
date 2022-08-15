function isPrime(n){                
        
        for (let check = 2; check < Math.sqrt(n); check++){
            if (n % check == 0){
                return false;
            }
                            
        }       
        return true;           
   
}
function countPrime(arr){
    count = 0;
    for (let i = 0; i < arr.length;i++){
        if (isPrime(arr[i])){
            count++;
        }
    }
    return count;
}