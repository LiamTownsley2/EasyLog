const colour = {
    'bold': ['\x1B[1m', '\x1B[22m'],
    'italic': ['\x1B[3m', '\x1B[23m'],
    'underline': ['\x1B[4m', '\x1B[24m'],
    'inverse': ['\x1B[7m', '\x1B[27m'],
    'strikethrough': ['\x1B[9m', '\x1B[29m'],
    'white': ['\x1B[37m', '\x1B[39m'],
    'gray': ['\x1B[90m', '\x1B[39m'],
    'grey': ['\x1B[90m', '\x1B[39m'],
    'black': ['\x1B[30m', '\x1B[39m'],
    'blue': ['\x1B[34m', '\x1B[39m'],
    'cyan': ['\x1B[36m', '\x1B[39m'],
    'green': ['\x1B[32m', '\x1B[39m'],
    'magenta': ['\x1B[35m', '\x1B[39m'],
    'red': ['\x1B[31m', '\x1B[39m'],
    'yellow': ['\x1B[33m', '\x1B[39m']
};

const wrap = (message, styles = 'white') => {
    let stylesArray = styles.split(' ').filter(n => n);
    let _message = message;
    stylesArray.forEach(style => {
        _message = colour[style][0] + _message + colour[style][1]
    });
    return _message;
}

const timestamp = (_timestampStyle = 'cyan bold', debug = false) => {
    let timestampStyle = _timestampStyle;
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

    if(debug == true) {
        return wrap(`${hours}:${minutes}:${seconds}.${milliseconds}`, timestampStyle);
    }
    return wrap(`${hours}:${minutes}:${seconds}`, timestampStyle) + " ";
}

function checkedLog(message) {
    let messageStyle = 'cyan';
    console.log([
        timestamp('cyan'),
        '✔️',
        wrap(message, messageStyle)
    ].join(' '));
}

function log(message) {
    let messageStyle = 'cyan';
    console.log([
        timestamp('cyan'),
        '  ',
        wrap(message, messageStyle)
    ].join(' '));
}

function error(message) {
    let messageStyle = 'red';
    console.log([
        timestamp('red'),
        '❌',
        wrap(message, messageStyle)
    ].join(' '));
}

function criticalError(message) {
    let messageStyle = 'red inverse';
    console.log([
        timestamp('red inverse'),
        '❌',
        wrap(message, messageStyle)
    ].join(' '));
}

function warning(message) {
    let messageStyle = 'yellow';
    console.log([
        timestamp('yellow'),
        '⚠️',
        wrap(message, messageStyle)
    ].join(' '));
}

function debug(message) {
    let messageStyle = 'gray';
    console.log([
        timestamp('gray', true),
        wrap(message, messageStyle)
    ].join(' '));
}

module.exports = {checkedLog, criticalError, debug, error, log, warning};