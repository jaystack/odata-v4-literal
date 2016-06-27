var Literal = require('../lib').Literal;
var expect = require('chai').expect;

describe("OData V4 Literal", () => {
    var r;
    beforeEach(function(){
        var match;
        if (match = this.currentTest.title.match(/literal: \[(.*?)\]\((.*?)\)/)){
            r = Literal.convert(match[1], match[2]);
        }
    });

    it("literal: [null](null)", () => expect(r).to.be.null);
    it("literal: [Edm.Boolean](true)", () => expect(r).to.be.true);
    it("literal: [Edm.Boolean](false)", () => expect(r).to.be.false);
    it("literal: [Edm.Byte](1)", () => expect(r).to.equal(1));
    it("literal: [Edm.SByte](-1)", () => expect(r).to.equal(-1));
    it("literal: [Edm.Int16](-32768)", () => expect(r).to.equal(-32768));
    it("literal: [Edm.Int32](-2147483648)", () => expect(r).to.equal(-2147483648));
    it("literal: [Edm.Int64](0)", () => expect(r).to.equal(0));
    it("literal: [Edm.Decimal](34.95)", () => expect(r).to.equal(34.95));
    it("literal: [Edm.Double](0.31415926535897931e1)", () => expect(r).to.equal(0.31415926535897931e1));
    it("literal: [Edm.Single](INF)", () => expect(r).to.equal(Infinity));
    it("literal: [Edm.String]('Say Hello,then go')", () => expect(r).to.equal("Say Hello,then go"));
    it("literal: [Edm.String]('Say Hello to O''Neill,then go')", () => expect(r).to.equal("Say Hello to O'Neill,then go"));
    it("literal: [Edm.Date](2012-12-03)", () => expect(r).to.equal('2012-12-03'));
    it("literal: [Edm.DateTimeOffset](2012-12-03T07:16:23Z)", () => expect(r.valueOf()).to.equal(new Date("2012-12-03T07:16:23Z").valueOf()));
    it("literal: [Edm.Duration](duration'P12DT23H59M59.999999999999S')", () => expect(r).to.equal(1033199000));
    it("literal: [Edm.TimeOfDay](07:59:59.999)", () => expect(r.valueOf()).to.equal(new Date("1970-01-01T07:59:59.999Z").valueOf()));
    it("literal: [Edm.Guid](01234567-89ab-cdef-0123-456789abcdef)", () => expect(r).to.equal("01234567-89ab-cdef-0123-456789abcdef"));
});
