function isJSON(arg) { }
// POSITIVE test cases (must pass)
isJSON("hello");
isJSON([4, 8, 15, 16, 23, 42]);
isJSON({ greeting: "hello" });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({ a: { b: [2, 3, "foo"] } });
// NEGATIVE test cases (must fail)
// @ts-expect-error
isJSON(() => "");
// @ts-expect-error
isJSON(class {
});
isJSON(undefined);
// @ts-expect-error
isJSON(isJSON);
