/**
 * Get an array of enum values
 *
 * @param enumObject An enum object
 * @example
 * enum MyEnum {
 * 	First = 'First',
 * 	Second = 'Second',
 * 	Third = 'Third',
 * }
 *
 * const values = getEnumValues(MyEnum)
 * // values = ['First', 'Second', 'Third']
 * @returns An array of enum values
 */
export const getEnumValues = <E extends Record<string, any>>(enumObject: E) =>
	Object.keys(enumObject).map((key) => enumObject[key as keyof E]);
