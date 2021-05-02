





function toText(n)
{
var arr = n.toString(10).split('').map(Number);
for (var i =0;i<arr.length;i++)
{
  if (arr[i] == 0)
  {
    arr[i] = 'Zero';
  }
  else if (arr[i]==1)
  {
    arr[i] = 'One';
  }
  else if (arr[i]==2)
  {
    arr[i] = 'Two';
  }
  else if (arr[i]==3)
  {
    arr[i] = 'Three';
  }
  else if (arr[i]==4)
  {
    arr[i] = 'Four';
  }
  else if (arr[i]==5)
  {
    arr[i] = 'Five';
  }
  else if (arr[i]==6)
  {
    arr[i] = 'Six';
  }
  else if (arr[i]==7)
  {
    arr[i] = 'Seven';
  }
  else if (arr[i]==8)
  {
    arr[i] = 'Eight';
  }
  else if (arr[i]==9)
  {
    arr[i] = 'Nine';
  }
}

const regex = /NaN/g
var newarr = arr.join("").replace(regex,",");

return newarr;
}

