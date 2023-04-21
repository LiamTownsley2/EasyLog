export enum LogType {
    "CHECKED_LOG",
    "LOG",
    "WARNING",
    "MINOR_ERROR",
    "CRITICAL_ERROR",
    "DEBUG"
};

export enum LogColour {
    'Bold',
    'Italics',
    'Underline',
    'Inverse',
    'Strikethrough',
    'White',
    'Gray',
    'Grey',
    'Black',
    'Blue',
    'Cyan',
    'Green',
    'Magenta',
    'Red',
    'Yellow'
};

export const _ColourCodes = [
    ['\x1B[1m', '\x1B[22m'],
    ['\x1B[3m', '\x1B[23m'],
    ['\x1B[4m', '\x1B[24m'],
    ['\x1B[7m', '\x1B[27m'],
    ['\x1B[9m', '\x1B[29m'],
    ['\x1B[37m', '\x1B[39m'],
    ['\x1B[90m', '\x1B[39m'],
    ['\x1B[90m', '\x1B[39m'],
    ['\x1B[30m', '\x1B[39m'],
    ['\x1B[34m', '\x1B[39m'],
    ['\x1B[36m', '\x1B[39m'],
    ['\x1B[32m', '\x1B[39m'],
    ['\x1B[35m', '\x1B[39m'],
    ['\x1B[31m', '\x1B[39m'],
    ['\x1B[33m', '\x1B[39m']
];