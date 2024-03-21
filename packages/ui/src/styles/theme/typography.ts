export const baseFontSize = 16;

const roundTo = (value: number, roundTo: number) => {
    const exp = 10 ** roundTo;

    return Math.round(value * exp) / exp;
};

/**
 *
 * @param fontSize in px
 * @param lineHeight in px
 * @returns
 */
export const sizeAndHeight = <FontSize extends number, LineHeight extends number>(
    fontSize: FontSize,
    lineHeight?: LineHeight,
) =>
    ({
        fontSize: `${roundTo(fontSize / baseFontSize, 2)}rem`,
        ...(lineHeight && {
            lineHeight: `${roundTo(lineHeight / baseFontSize, 2)}`,
        }),
    }) as const;
