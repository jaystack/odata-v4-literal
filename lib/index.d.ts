export declare class Literal {
    constructor(type: string, value: string);
    static convert(type: string, value: string): any;
    'Edm.String'(value: string): string;
    'Edm.Byte'(value: string): number;
    'Edm.SByte'(value: string): number;
    'Edm.Int16'(value: string): number;
    'Edm.Int32'(value: string): number;
    'Edm.Int64'(value: string): number;
    'Edm.Decimal'(value: string): number;
    'Edm.Double'(value: string): number;
    'Edm.Single'(value: string): number;
    'Edm.Boolean'(value: string): boolean;
    'Edm.Guid'(value: string): string;
    'Edm.Date'(value: string): string;
    'Edm.DateTimeOffset'(value: string): Date;
    'null'(value: string): any;
    'Edm.TimeOfDay'(value: string): Date;
    'Edm.Duration'(value: string): number;
}
