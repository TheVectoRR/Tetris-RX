import {TetrisShape} from "./TetrisShape";
import {TetrisShapeName} from "../TetrisUtils";

const SHAPE_COLOR = 'green';

export class SShape extends TetrisShape {

    constructor() {
        super(TetrisShapeName.SSHAPE);
        this.blocks.push(
            {xPos: 4, yPos: -3, color: SHAPE_COLOR},
            {xPos: 4, yPos: -2, color: SHAPE_COLOR},
            {xPos: 5, yPos: -2, color: SHAPE_COLOR},
            {xPos: 5, yPos: -1, color: SHAPE_COLOR}
        )
    }

    public rotate(): this {
        SShape.rotateShape(this);
        this.rotatePosition = (this.rotatePosition+1)%2;
        return this;
    }

    private static rotateShape(shape: SShape): void{
        switch (shape.rotatePosition) {
            case 0:
                shape.blocks[0].xPos += 1;
                shape.blocks[0].yPos += 1;

                shape.blocks[2].xPos -= 1;
                shape.blocks[2].yPos += 1;

                shape.blocks[3].xPos -= 2;
                break;
            case 1:
                shape.blocks[0].xPos -= 1;
                shape.blocks[0].yPos -= 1;

                shape.blocks[2].xPos += 1;
                shape.blocks[2].yPos -= 1;

                shape.blocks[3].xPos += 2;
                break;
        }
    }

}