input = [2,4,5,8]
reachLevel = 10
memo = {}
const climbstairs = (reach_level)=>{
   if(reach_level==0)  return 1
   ways = 0
    for (let i of input){
        let value = reach_level-i
        if((value) >=0){
         if(!(value in memo)){
            ways+=climbstairs(value)
            memo[reach_level] = ways
        }
          else{
              ways+=memo[value]
              memo[reach_level] =ways
          }
        }
        }
   return ways
}
console.log(climbstairs(reachLevel))
console.log(memo)
