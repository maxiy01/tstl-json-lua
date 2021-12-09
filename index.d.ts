/**
 * @noResolution
 * */
 declare module "json"
 {
     /**
      * Returns a string representing `value` encoded in JSON.
      * @param value Value to serialize. 
      * @returns encoded value
      * 
      * - Trying to encode values which are unrepresentable in JSON will never result in type conversion or other magic: sparse arrays, tables with mixed key types or invalid numbers (NaN, -inf, inf) will raise an error
      * - `null` values contained within an array or object are converted to `nil` and are therefore lost upon decoding
      * - Pretty encoding is not supported, json.encode() only encodes to a compact format
      */
     function encode(this: void, value: any): string;
     /**
      * Returns a value representing the decoded JSON string.
      * @param str 
      * @returns decoded string
      * 
      * - `null` values contained within an array or object are converted to `nil` and are therefore lost upon decoding
      */
     function decode<T>(this: void, str: string): T;
 }