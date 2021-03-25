function foo(){
    var a = 1
    let b = 2
    {
      let b = 3
      var c = 4
      let d = 5
      let f = 6
      console.log(a)
      console.log(b)
      console.log(f);
    }
    console.log(b) 
    console.log(c)
    // console.log(d)
    console.log(f);
}   
foo()