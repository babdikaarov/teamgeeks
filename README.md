# Cool Show Band

## to start

```cli
##to start
git clone <PROJECTLINK> .
npm i
npm run dev


##optional
npm run format ##runs pritier foramter
[install auto formater](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
```

## FRONT END

### File architer

notes:

`index.tsx` use for nesting routes and components.

`components` directory use for creating presentational (only visual part of component)

`containers` directory use for creating container (component continer for presentational and building logic (api, functions etc))

`slices` for redux slices.

`naming convention for components` use the headers of blocks from [design](https://www.figma.com/file/tK8z28UrBr1hoOoFG3oz0P/My-Cool-Band?node-id=0%3A1&mode=dev) for exmaples:

`naming class selectors` to avoid name conflicts between styles component's higher order tag should be named as name component `About.tsx => className="about"` all following children either use `.about *div*nav*img*{}` css rule selector or use the `about` as an extention to className for children tags `className="about-container` , `className="about-box` etc.

```txt
- public //for .html  realted files (favicon etc)
- src // main development directory
  - app
        - store //
        - app.scss // CSS global rules
        - reset.scss // global reset rules
        - App.tsx
        - index.tsx //use for nesting routes and components.
        - index.scss  // use for nesting css rules from pages directory.
  - pages
        - coolBandShow
            - gallery
                - components
                - containers
                - slices
                - styles
                - index.tsx // use for nesting routes and components.
                - index.scss  // use for nesting css rules from styles directory.
            - main
                - components
                - containers
                - slices
                - styles
                - index.tsx // use for nesting routes and components.
                - index.scss  // use for nesting css rules from styles directory.
            - index.tsx  // use for nesting routes and components.
            - index.scss // use for nesting css rules from main and gallery directory.
        - coolStudio
            - eventsGallery
                - components
                - containers
                - slices
                - styles
                - index.tsx // use for nesting routes and components.
                - index.scss  // use for nesting css rules from styles directory.
            - studentsGallery
                - components
                - containers
                - slices
                - styles
                - index.tsx // use for nesting routes and components.
                - index.scss  // use for nesting css rules from styles directory.
            - main
                - components
                - containers
                - slices
                - styles
                - index.tsx // use for nesting routes and components.
                - index.scss  // use for nesting css rules from styles directory.
            - index.scss  // use for nesting css rules from main ,eventsGallery and studentsGallery directory.
            - index.tsx // use for nesting routes and components.
  - shared // shared UI component (some of them could be used among sibling UI components)
    - api
    - UI
      - index.scss // use for CSS rules fro nesting from all UI components;
      - *folder UI name*
        - *JSX file
        - *Styling file
      - *folder UI name*
        - *JSX file
        - *Styling file
      - *folder UI name*
        - *JSX file
        - *Styling file
  - store // Redux store configuration
  - temp // development temprorary junk test files
- main.tsx // root React render
- ...other configurations
```

### extentions

`src` `href` - [path auto complete](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
