class CuboidMakerParent {
    constructor(attr) {
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    };


    volume() {
        return this.length * this.width * this.height
    };


    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)

    }
};



const cuboid2 = new CuboidMakerParent({
    length: 4,
    width: 5,
    height: 5
});

console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130