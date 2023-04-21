import { LogColour, LogType, _ColourCodes } from './StaticValues.js';

function getColourCode(colourCode: LogColour) {
    return _ColourCodes[colourCode];
}

function wrapStyle(message: string, style: LogColour | Array<LogColour>) {
    if (typeof style == 'number') {
        const [_start, _end] = getColourCode(style);
        return _start + message + _end;
    }

    let formatted_message = message;
    for (const _style of style) {
        const [_start, _end] = getColourCode(_style);
        formatted_message = _start + message + _end;
    }

    return formatted_message;
}


function pad(number: number, amount: number) {
    let _string = number.toString();
    return _string.padStart(amount, "0");
}

function getTimestamp(debug: boolean = false) {
    const _date = new Date();

    let hours = pad(_date.getHours(), 2);
    let minutes = pad(_date.getMinutes(), 2);
    let seconds = pad(_date.getSeconds(), 2);
    let milliseconds = pad(_date.getMilliseconds(), 3);

    if (debug) {
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
}

function formatTimestamp(type: LogType) {
    const time = getTimestamp(type == LogType.DEBUG);
    let formatting = [];
    switch (type) {
        case LogType.CRITICAL_ERROR:
            formatting.push(LogColour.Red);
            formatting.push(LogColour.Bold, LogColour.Inverse)
            break;
        case LogType.MINOR_ERROR:
            formatting.push(LogColour.Red);
            break;
        case LogType.WARNING:
            formatting.push(LogColour.Yellow);
            break;
        case LogType.DEBUG:
            formatting.push(LogColour.Grey);
            break;
        default:
            formatting.push(LogColour.Cyan);
            break;
    }
    return wrapStyle(time, formatting);
}

function getIcon(type:LogType) {
    let icon;
    
    switch (type) {
        case LogType.CHECKED_LOG:
            icon = '✔️';
            break;
        case LogType.CRITICAL_ERROR:
            icon = '❌';
            break;
    }

    return icon;
}

function formatLog(message:string, type:LogType) {
    const timestamp = formatTimestamp(type);
    let icon = getIcon(type);
    if(!icon) icon = '  ';
    let _message = message;
    switch (type) {
        case LogType.CRITICAL_ERROR:
            _message = wrapStyle(_message, [LogColour.Red, LogColour.Inverse]);
            break;
        case LogType.MINOR_ERROR:
            _message = wrapStyle(_message, LogColour.Red);
        case LogType.WARNING:
            _message = wrapStyle(_message, LogColour.Yellow);
        case LogType.DEBUG:
            _message = wrapStyle(_message, LogColour.Gray);
        default:
            _message = wrapStyle(_message, LogColour.Cyan);
            break;
    }
    if(type == LogType.DEBUG) {
        return `${timestamp} ${_message}`;
    }
    return `${timestamp}  ${icon} ${_message}`;

}

function log(message: string, type: LogType = LogType.LOG) {
    console.log(formatLog(message, type));
}

export { log };