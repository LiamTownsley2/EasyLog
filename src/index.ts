import { LogColour, LogType, _ColourCodes } from './StaticValues.js';

function getColourCode(colourCode: LogColour) {
    let _code = colourCode.split('/');

    if(_code.length == 1) return _ColourCodes[_code[0]];
    if(_code.length == 2) return _ColourCodes[_code[0]][_code[1]];
}

function wrapStyle(message: string, style: LogColour | Array<LogColour>) {
    const isArray = Array.isArray(style);
    
    if(isArray) {
        let _message = null;
        for (const _style of style) {
            const _ColourCode = getColourCode(_style);
            const _ResetCode = getColourCode(LogColour.Reset);
            _message = `${_ColourCode}${message}${_ResetCode}`;
        }
        return _message;
    }

    const _ColourCode = getColourCode(style);
    const _ResetCode = getColourCode(LogColour.Reset);
    return `${_ColourCode}${message}${_ResetCode}`
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
            formatting.push(LogColour.BgRed);
            break;
        case LogType.MINOR_ERROR:
            formatting.push(LogColour.FgRed);
            break;
        case LogType.WARNING:
            formatting.push(LogColour.FgYellow);
            break;
        case LogType.DEBUG:
            formatting.push(LogColour.FgGray);
            break;
        default:
            formatting.push(LogColour.FgCyan);
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

function formatLog(message:string|Error, type:LogType) {
    const timestamp = formatTimestamp(type);
    let icon = getIcon(type);
    if(!icon) icon = '  ';
    let _message = message;
    if(typeof message == 'string') {
        _message = message;
    } else {
        _message = `${message.name} -- ${message.message}\n${message.stack}`;
    }
    switch (type) {
        case LogType.CRITICAL_ERROR:
            _message = wrapStyle(_message, [LogColour.BgRed]);
            break;
        case LogType.MINOR_ERROR:
            _message = wrapStyle(_message, LogColour.FgRed);
        case LogType.WARNING:
            _message = wrapStyle(_message, LogColour.FgYellow);
        case LogType.DEBUG:
            _message = wrapStyle(_message, LogColour.FgGray);
        default:
            _message = wrapStyle(_message, LogColour.FgCyan);
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

export {LogType, log};