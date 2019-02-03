function loop(value,test_function,update_function,body_function)
{
  for(let a=value; test_function(a); a=update_function(a))
  body_function(a);
}


loop(5, n => n > 0, n => n - 1, console.log);