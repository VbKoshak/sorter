class Sorter {
    constructor() {
        this.sorter = [];
        this.count = 0;
        this.standart = 1;
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

        var temp;
        indices.sort(function(a, b) {
            return a - b;
        });
        if (this.standart) {
            for (var j = 0; j < indices.length; j++) {
                for (var i = 0; i < indices.length - 1; i++) {
                    if (this.sorter[indices[i]] > this.sorter[indices[i + 1]]) {
                        temp = this.sorter[indices[i]];
                        this.sorter[indices[i]] = this.sorter[indices[i + 1]];
                        this.sorter[indices[i + 1]] = temp;
                    };
                };
            };
        }
        else
        {
            //this.sortet.sort(this.compare);
            ////////////
            for (var j = 0; j < indices.length; j++) {
                for (var i = 0; i < indices.length - 1; i++) {
                    if (this.compare(this.sorter[indices[i]],this.sorter[indices[i+1]]) == 1) {
                        temp = this.sorter[indices[i]];
                        this.sorter[indices[i]] = this.sorter[indices[i + 1]];
                        this.sorter[indices[i + 1]] = temp;
                    };
                };
            };
            ///////////
            // var temp = [];
            // for (var i =0; i < indices.length; i++)
            // {
            // temp.push[this.sorter[indices[i]]];
            // }
            // this.temp.sort(this.compare);
            // for (var i =0; i < indices.length; i++)
            // {
            // this.sorter[indices[i]] = temp[i];
            // }
        }
    }

    setComparator(compareFunction) {
        // your implementation
        //this.sorter.sort(compareFunction);
        /////////
        // this.compare = new function(a,b)
        // {
        //     return compareFunction(a,b);
        // };
        /////////
        this.compare = compa
        this.standart = 0;
    }
}

module.exports = Sorter;
