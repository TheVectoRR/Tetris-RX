import { TetrisShape } from './tetris-shape';
import { TetrisBlock } from '../tetris-utils';

const SHAPE_COLOR = 'purple';

export class ZShape extends TetrisShape {

    constructor(blocks?: TetrisBlock[]) {
        super();
        if (blocks) {
            this._blocks = blocks;
        } else {
            this._blocks.push(
                { xPos: 5, yPos: -3, color: SHAPE_COLOR },
                { xPos: 5, yPos: -2, color: SHAPE_COLOR },
                { xPos: 4, yPos: -2, color: SHAPE_COLOR },
                { xPos: 4, yPos: -1, color: SHAPE_COLOR }
            );
        }
    }

    private static rotateShape(shape: TetrisShape) {
        switch (shape.rotatePosition) {
            case 0:
                shape.blocks[ 0 ].xPos -= 1;
                shape.blocks[ 0 ].yPos += 1;

                shape.blocks[ 2 ].xPos += 1;
                shape.blocks[ 2 ].yPos += 1;

                shape.blocks[ 3 ].xPos += 2;
                break;
            case 1:
                shape.blocks[ 0 ].xPos += 1;
                shape.blocks[ 0 ].yPos -= 1;

                shape.blocks[ 2 ].xPos -= 1;
                shape.blocks[ 2 ].yPos -= 1;

                shape.blocks[ 3 ].xPos -= 2;
                break;
        }
    }

    public rotate(shape: TetrisShape): void {
        ZShape.rotateShape(shape);
        shape.rotatePosition = (shape.rotatePosition + 1) % 2;
    }

    public cloneOfShape(): TetrisShape {
        const shape = new ZShape(this.cloneOfBlocks);
        shape.rotatePosition = this.rotatePosition;
        return shape;
    }
}
