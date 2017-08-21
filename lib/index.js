"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function integer(value) {
    return +value;
}
function float(value) {
    switch (value) {
        case 'INF': return Infinity;
        case '-INF': return -Infinity;
        default: return +value;
    }
}
var Literal = (function () {
    function Literal(type, value) {
        var result = (this[type] || (function (_) { return _; }))(value);
        this.valueOf = function () { return result; };
    }
    Literal.convert = function (type, value) {
        return (new Literal(type, value)).valueOf();
    };
    Literal.prototype['Edm.String'] = function (value) { return decodeURIComponent(value).slice(1, -1).replace(/''/g, "'"); };
    Literal.prototype['Edm.Byte'] = function (value) { return integer(value); };
    Literal.prototype['Edm.SByte'] = function (value) { return integer(value); };
    Literal.prototype['Edm.Int16'] = function (value) { return integer(value); };
    Literal.prototype['Edm.Int32'] = function (value) { return integer(value); };
    Literal.prototype['Edm.Int64'] = function (value) { return integer(value); };
    Literal.prototype['Edm.Decimal'] = function (value) { return float(value); };
    Literal.prototype['Edm.Double'] = function (value) { return float(value); };
    Literal.prototype['Edm.Single'] = function (value) { return float(value); };
    Literal.prototype['Edm.Boolean'] = function (value) {
        value = value || '';
        switch (value.toLowerCase()) {
            case 'true': return true;
            case 'false': return false;
            default: return undefined;
        }
    };
    Literal.prototype['Edm.Guid'] = function (value) { return decodeURIComponent(value); };
    Literal.prototype['Edm.Date'] = function (value) { return value; };
    Literal.prototype['Edm.DateTimeOffset'] = function (value) { return new Date(value); };
    Literal.prototype['null'] = function (value) { return null; };
    Literal.prototype['Edm.TimeOfDay'] = function (value) { return new Date("1970-01-01T" + value + "Z"); };
    Literal.prototype['Edm.Duration'] = function (value) {
        var m = value.match(/P([0-9]*D)?T?([0-9]{1,2}H)?([0-9]{1,2}M)?([\.0-9]*S)?/);
        if (m) {
            var d = new Date(0);
            for (var i = 1; i < m.length; i++) {
                switch (m[i].slice(-1)) {
                    case 'D':
                        d.setDate(parseInt(m[i]));
                        continue;
                    case 'H':
                        d.setHours(parseInt(m[i]));
                        continue;
                    case 'M':
                        d.setMinutes(parseInt(m[i]));
                        continue;
                    case 'S':
                        d.setSeconds(parseFloat(m[i]));
                        continue;
                }
            }
            return d.getTime();
        }
        throw new Error('Invalid Duration');
    };
    return Literal;
}());
exports.Literal = Literal;
//# sourceMappingURL=index.js.map