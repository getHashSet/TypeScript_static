# Typescript

## Types

number -- 1, 5.3, 10 "All numbers. Floats and Ints are the same in Typescript."
string -- Any text. "hello world" 'hello world' `hello world`
boolean -- true false
object -- { key: string } { key: "value" }
array -- strict value types
tuple -- ["x", "z"] -- fixed type and length array
Enum -- enum { NEW.OLD } -- Added by Typescript to javascript: Automatically enumerated global constat identifiers. *example _id in mongoDB*
any -- * -- back to basic javascript. This basiclly turns off Typescript
void -- no return

## CLI commands

`$ tsc filename.ts` -- This will create a .js file in the same directory with the same name.
`$ tsc filename --watch` -- This will create a local host that watches the file for changes. Similar to Pre Pros and SCSS.
`$ tsc init` -- creat a **tsconfig.json** file that will track the whole project from this level and its children. *If placed in root this will watch the full app for ts fils.*