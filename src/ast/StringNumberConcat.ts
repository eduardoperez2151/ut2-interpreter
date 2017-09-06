import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

export class StringNumberConcat implements Exp {
    
      str: Exp;
      num: Exp;
    
      constructor(str: Exp, num: Exp) {
        this.str = str;
        this.num = num;
      }
    
      toString(): string {
        return `StringNumberConcat(${this.str.toString()}, ${this.num.toString()})`;
      }
    
      unparse(): string {
        return `(${this.str.unparse()} + ${this.num.unparse()})`;
      }
    
      evaluate(state: State): any {
        var stringValue = this.str.evaluate(state);
        var numberValue = this.num.evaluate(state);
        if (typeof stringValue === "string" &&  typeof numberValue === "number"){
          return stringValue + numberValue;
        }
        throw new Error("Error de tipos.");
      }
    }