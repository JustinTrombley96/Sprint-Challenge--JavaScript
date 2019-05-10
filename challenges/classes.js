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



//Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerParent {
    constructor(attr) {
        super(attr);
    }
    cubeVolume() {
        return this.length * this.length * this.length
    }
    cubeArea() {
        return 6 * (this.length * this.length)
    };
};

const cuboid3 = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
});

console.log(cuboid3.cubeVolume());
console.log(cuboid3.cubeArea());