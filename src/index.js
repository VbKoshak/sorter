class Sorter {
  constructor() {
      this.sorter = [];
      this.count = 0;
  }

  add(element) {
    // your implementation

    this.sorter[this.count] = (element);
    this.count++;
    //this.sorter.unshift(element);
  }

  at(index) {
    // your implementation
    return this.sorter[index];
    // return this.sorter;
  }

  get length() {
    // your implementation
    return this.sorter.length;
  }

  toArray() {
    // your implementation
    return this.sorter;
  }

  sort(indices) {
    // your implementation
    //this.sorter.sort(indices);
//////////////
//     this.sorter.sort(function(a,b)
// {
//     return a-b;
// });
/////////////
// function CompareNumbers(a,b)
// {
//     return a - b;
// };
//     var temp = [];
//     for (var i = 0; i < indices.length;i++)
//     {
//         temp[temp.length] = [this.sorter[indices[i]]];
//     };
//     temp.sort(CompareNumbers);
// for (var i = 0; i < indices.end;i++)
// {
//     this.sorter[indices[i]] = temp[i];
// };
    var temp;
    indices.sort(function(a,b)
{
    return a-b;
});
    for (var j = 0; j < indices.length; j++)
    {
    for (var i = 0; i < indices.length-1; i++)
    {
        if (this.sorter[indices[i]] > this.sorter[indices[i+1]])
        {
            temp = this.sorter[indices[i]];
            this.sorter[indices[i]] = this.sorter[indices[i+1]];
            this.sorter[indices[i+1]] = temp;
        };
    };
    };
  }

  setComparator(compareFunction) {
    // your implementation
    this.sorter.sort(compareFunction);
  }
}

module.exports = Sorter;
