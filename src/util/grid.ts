
export const GRID_SQUARE = 96;
export const GRID_GUTTER = 16;

export const gridSquaresSize = (numOfGridSquares: number): string => {
    const squares = numOfGridSquares * GRID_SQUARE;
    const numOfGutters = numOfGridSquares - 1;
    const gutters = numOfGutters * GRID_GUTTER;

    return `${squares + gutters}px`;
};

export const gridGuttersSize = (numOfGutters: number): string => `${numOfGutters * GRID_GUTTER}px`;
