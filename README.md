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
`$ tsc -w` this will watch all files in the tsc init.


## tsconfig.json

```json
"exclude": [
    "functions.ts", /* ignore file nime by name */
    "**/*.dev.ts" /* this will ignore any files in any directory that have .dev.ts in the name. example app.dev.ts will not be compiled*/,
    "node_modules" /* prevent compliling npm -- this is auto excluded if you do not specify exclude. */
  ]
```

```json
"include": [  // this will override all files and only compile what is included.
    "app.ts" // include this file
    "**/*.prod.ts" // include all files that end in prod
    "typescript" // include all files within this folder. *the folder name is typescript*
  ]
```

```json
"files": [  // this will override all files and only compile what is included.
    "app.ts" // include only files
    "typescript" // this will not work.
  ]
```

```json
"compilerOptions": {
  "target": "es5" //default
  // remove es5 and type ctrl + space to see all conversion options.
}
```