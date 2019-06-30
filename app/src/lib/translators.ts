class console {
    static log(input: string) {
        SendMessage(input);
    }
}

function SendMessage(this: void, msg: any): void {
    DisplayTimedTextToForce(bj_FORCE_ALL_PLAYERS, 10, `${msg}`);
}

interface ColourToIndex {
    [key: string]: number;
}

function ToString(input: any): string {
    return `${input}`;
}

function DecodeFourCC(fourcc: number): string {
    // tslint:disable-next-line:no-bitwise
    return string.char((fourcc >>> 24) & 255, (fourcc >>> 16) & 255, (fourcc >>> 8) & 255, (fourcc) & 255);
}

class Util {

    static ColourString(colour: string, str: string): string {
        return `|cFF${colour}${str}|r`;
    }

    static RandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static COLOUR_IDS: ColourToIndex = {
        'RED': 0,
        'BLUE': 1,
        'TEAL': 2,
        'PURPLE': 3,
        'YELLOW': 4,
        'ORANGE': 5,
        'GREEN': 6,
        'PINK': 7,
        'GRAY': 8,
        'GREY': 8,
        'LIGHT_BLUE': 9,
        'LIGHTBLUE': 9,
        'LB': 9,
        'DARK_GREEN': 10,
        'DARKGREEN': 10,
        'DG': 10,
        'BROWN': 11,
        'MAROON': 12,
        'NAVY': 13,
        'TURQUOISE': 14,
        'VOILET': 15,
        'WHEAT': 16,
        'PEACH': 17,
        'MINT': 18,
        'LEVANDER': 19,
        'COAL': 20,
        'SNOW': 21,
        'EMERALD': 22,
        'PEANUT': 23,
    };

    static ArraysToString(arr: any[]): string {
        let output = '[';
        for (let i = 0; i < arr.length; i++) {
            if (i == arr.length - 1) {
                output += `"${arr[i]}"`;
                continue;
            }
            output += `"${arr[i]}", `;
        }
        output += ']';
        return output;
    }

    static ParseInt(str: string): number {
        return +str;
    }

    static ParsePositiveInt(str: string): number {
        let int: number = Number(str);
        if (int < 0) {
            return 0;
        }
        return int;
    }
}


// reference: https://docs.google.com/spreadsheets/d/1wzWIYzRW9pqpo1ZuEcU-qJTg-H4z5-PaTnHIXPezaRQ/edit#gid=1812483906

enum COLOUR {
    RED,
    BLUE,
    TEAL,
    PURPLE,
    YELLOW,
    ORANGE,
    GREEN,
    PINK,
    GRAY,
    LIGHT_BLUE,
    DARK_GREEN,
    BROWN,
    MAROON,
    NAVY,
    TURQUOISE,
    VOILET,
    WHEAT,
    PEACH,
    MINT,
    LEVANDER,
    COAL,
    SNOW,
    EMERALD,
    PEANUT
}


enum CREEP_TYPE {
    NORMAL,
    AIR,
    CHAMPION,
    BOSS
}

enum ARMOUR_TYPE {
    UNARMOURED,
    LIGHT,
    MEDIUM,
    HEAVY,
    FORTIFIED,
    HERO

}

