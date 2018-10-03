class Sorter {
    constructor() {
        this.sorter = [];
        this.count = 0;
        this.compare = function(a,b)
        {
            return a-b;
        }
    }

    add(element) {
        this.sorter[this.count] = (element);
        this.count++;
    }

    at(index) {
        return this.sorter[index];
    }

    get length() {
        return this.sorter.length;
    }

    toArray() {
        return this.sorter;
    }

    sort(indices) {
        indices.sort(function(a, b) {
            return a - b;
        });

        let temp = [];
        let ilength = indices.length;
        for (let i =0; i < ilength; i++)
        {
            temp[temp.length]=this.sorter[indices[i]];
        };
        temp.sort(this.compare);
        for (let i =0; i < ilength; i++)
        {
            this.sorter[indices[i]] = temp[i];
        };
    }

    setComparator(compareFunction) {
        this.compare = compareFunction;
    }
}

module.exports = Sorter;
