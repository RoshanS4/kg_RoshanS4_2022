var digits = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];



function Million(x) 
{
  if (x >= 1000000) 
  {
    return Million(Math.floor(x / 1000000))+ Thousand(x % 1000000);
  } 
  else 
  {
    return Thousand(x);
  }
}

function Thousand(x) 
{
  if (x >= 1000 || x == 000000) 
  {
    return Hundred(Math.floor(x / 1000)) + Hundred(x % 1000);
  } 
  else 
  {
    return Hundred(x);
  }
}

function Hundred(x) 
{
  if (x > 99 || x==000) 
  {
    return digits[Math.floor(x / 100)] + digits[Math.floor((x%100)/10)] + digits[(x%100)%10];
  }
   else 
   {
    return One(x);
  }
}

function One(x) 
{
  if (x < 10 && x>= 0) 
  {
      return digits[x];
  }
  else if (x >= 10 && x<=99)
  {
    return digits[Math.floor(x / 10)]+digits[x % 10];
  }
  else
  {
    return Million(x);
  }
}


