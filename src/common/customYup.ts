import * as yup from "yup";
import { AnyObject, Maybe } from "yup/lib/types";

yup.addMethod(yup.string, "nonSpace", function nonSpace() {
    return this.transform((value: string, originalValue: string) =>
        /^\s/.test(originalValue) ? value.trim() : value
    ).required();
});

declare module "yup" {
    interface StringSchema<
        TType extends Maybe<string> = string | undefined,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType
    > extends yup.BaseSchema<TType, TContext, TOut> {
        nonSpace(): StringSchema<TType, TContext>;
    }
}

export default yup;
