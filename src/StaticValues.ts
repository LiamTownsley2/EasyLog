export enum LogType {
    "CHECKED_LOG",
    "LOG",
    "WARNING",
    "MINOR_ERROR",
    "CRITICAL_ERROR",
    "DEBUG"
};

export enum LogColour {
    Reset = "Reset",
    Bright = "Bright",
    Dim = "Dim",
    Underscore = "Underscore",
    Blink = "Blink",
    Reverse = "Reverse",
    Hidden = "Hidden",

    FgBlack = "fg/Black",
    FgRed = "fg/Red",
    FgGreen = "fg/Green",
    FgYellow = "fg/Yellow",
    FgBlue = "fg/Blue",
    FgMagenta = "fg/Magenta",
    FgCyan = "fg/Cyan",
    FgWhite = "fg/White",
    FgGray = "fg/Gray",

    BgBlack = "bg/Black",
    BgRed = "bg/Red",
    BgGreen = "bg/Green",
    BgYellow = "bg/Yellow",
    BgBlue = "bg/Blue",
    BgMagenta = "bg/Magenta",
    BgCyan = "bg/Cyan",
    BgWhite = "bg/White",
    BgGray = "bg/Gray"
};

export const _ColourCodes:any = {
    "Reset": "\x1b[0m",
    "Bright": "\x1b[1m",
    "Dim": "\x1b[2m",
    "Underscore": "\x1b[4m",
    "Blink": "\x1b[5m",
    "Reverse": "\x1b[7m",
    "Hidden": "\x1b[8m",
    "fg": {
        "Black": "\x1b[30m",
        "Red": "\x1b[31m",
        "Green": "\x1b[32m",
        "Yellow": "\x1b[33m",
        "Blue": "\x1b[34m",
        "Magenta": "\x1b[35m",
        "Cyan": "\x1b[36m",
        "White": "\x1b[37m",
        "Gray": "\x1b[90m",
    },
    "bg": {
        "Black": "\x1b[40m",
        "Red": "\x1b[41m",
        "Green": "\x1b[42m",
        "Yellow": "\x1b[43m",
        "Blue": "\x1b[44m",
        "Magenta": "\x1b[45m",
        "Cyan": "\x1b[46m",
        "White": "\x1b[47m",
        "Gray": "\x1b[100m"
    }
};