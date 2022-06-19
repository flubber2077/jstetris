

const SHAPES = [
    //square
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:1, y:0},
            {x:1, y:1}
        ],
        width: 2,
        height: 2,
        rotate: false
    },
    //long
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:0, y:2},
            {x:0, y:3}
        ],
        width: 1,
        height: 4
    },
    //
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:0, y:2},
            {x:1, y:2}
        ],
        width: 1,
        height: 3
    },
    // L
    {
        shape: [
            {x:1, y:0},
            {x:0, y:1},
            {x:1, y:2},
            {x:1, y:1}
        ],
        width: 2,
        height: 3
    },
    // T shape
    {
        shape: [
            {x:1, y:0},
            {x:0, y:1},
            {x:1, y:2},
            {x:1, y:1}
        ],
        width: 2,
        height: 3
    },
    //Reverse L
    {
        shape: [
            {x:1, y:0},
            {x:0, y:0},
            {x:0, y:2},
            {x:0, y:1}
        ],
        width: 2,
        height: 3
    },
    // Z shape
    {
        shape: [
            {x:0, y:0},
            {x:0, y:1},
            {x:1, y:1},
            {x:1, y:2}
        ],
        width: 2,
        height: 3
    },
    // S shape
    {
        shape: [
            {x:1, y:0},
            {x:1, y:1},
            {x:0, y:1},
            {x:0, y:2}
        ],
        width: 2,
        height: 3
    }
];

export function randomShape() {
    return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}