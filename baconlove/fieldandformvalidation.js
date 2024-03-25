/**
 *
 * You will be supplied with streams of three different input-fields, each with
 * their own validation function which takes a value as input and returns
 * whether the value is valid or not.
 *
 * What you should return is three observables which indicate whether the value
 * observed is valid or not and an observable which indicates whether the field
 * as a whole is valid.
 *
 * Field A and C is required. Field B is optional, but if it has a value it
 * must be valid.
 *
 */


module.exports = (Bacon, fieldA, validationA, fieldB, validationB, fieldC, validationC) => {
    const a = fieldA.map(validationA).toProperty(false);
    const b = fieldB.map(value => value ? validationB(value) : true).toProperty(true);
    const c = fieldC.map(validationC).toProperty(false);

    const form = a.and(b).and(c);

    return {
        fieldAValid: a,
        fieldBValid: b,
        fieldCValid: c,
        formValid: form
    };
};
