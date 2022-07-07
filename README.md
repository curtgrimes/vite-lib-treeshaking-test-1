# Vite lib treeshaking test part 1

This builds in library mode and outputs two components (exported in main.ts):

1. A `MyGrid` component with `ag-grid` as a dependency (used as an example of a large dependency)
2. A `MyFoobarComponent` component that does not import `ag-grid`.
