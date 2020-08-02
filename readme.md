# Subustructure ITCSS Framework

I wanted a modular modern BEMIT-style framework that leveraged SASS imports.

This project was inspired by ITCSS by Harry Roberts and projects like Inuit.css, Iota, Nebula and others.


Sample Main.scss
```
// Main.scss

@use '../../node_modules/@substructure/settings';
@use '../../node_modules/@substructure/tools';
@use '../../node_modules/@substructure/generic-initialize';
@use '../../node_modules/@substructure/generic-shared';
@use '../../node_modules/@substructure/elements-base';
@use '../../node_modules/@substructure/elements-text';
@use '../../node_modules/@substructure/objects-box';
@use '../../node_modules/@substructure/objects-layout';
@use '../../node_modules/@substructure/objects-list';
@use '../../node_modules/@substructure/objects-media';
@use '../../node_modules/@substructure/objects-wrapper';
@use '../../node_modules/@substructure/utilities-float';
@use '../../node_modules/@substructure/utilities-sizing';
@use '../../node_modules/@substructure/utilities-spacing';
@use '../../node_modules/@substructure/utilities-text-sizing';

```