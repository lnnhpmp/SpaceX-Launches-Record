- [SpaceX Launches Records](#spacex-launches-records)
  - [Problem Statement](#problem-statement)
  - [Project Structure](#project-structure)
  - [Demo](#demo)
    - [Search](#search)
    - [Sort](#sort)
      - [Sort by name](#sort-by-name)
      - [Sort by local date](#sort-by-local-date)
    - [Pagination](#pagination)
    - [Filter by date range](#filter-by-date-range)
    - [Show only successful launches](#show-only-successful-launches)
  - [Build](#build)
  - [Project Implementation Process](#project-implementation-process)
    - [Data structure analysis](#data-structure-analysis)
      - [success information](#success-information)
      - [details information](#details-information)
      - [image](#image)
      - [youtube link](#youtube-link)
    - [Handle page status](#handle-page-status)
    - [Search](#search-1)
    - [Sort](#sort-1)
    - [Filtering](#filtering)
      - [Filter by date range](#filter-by-date-range-1)
      - [Filter by success information](#filter-by-success-information)
    - [Combine multiple conditions](#combine-multiple-conditions)
    - [Pagination](#pagination-1)
    - [Testing](#testing)
    - [Responsive UI](#responsive-ui)
  - [TODOs](#todos)
    - [Scalability](#scalability)
    - [Error handling](#error-handling)
    - [Testing](#testing-1)
    - [Mobile UI](#mobile-ui)
  - [Built with](#built-with)

# SpaceX Launches Records

## Problem Statement

https://github.com/sapcc/juno/blob/main/docs/react-coding-exercise.md

## Project Structure

The naming of the components is quite straight forward. I put the main `filtering` and `search` logic in `App.tsx`. `sorting` logic is in `LaunchesTableColumn.tsx`.

```
my-app
├── README.md
├── package.json
├── .gitignore
└── src
    ├── components
        ├── filtering
            ├── DateRangePickerComponent.tsx
            ├── Filters.tsx
            ├── ToggleSwitch.tsx
        ├── table
            ├── LaunchesTable.tsx
            ├── LaunchesTableColumn.tsx
            ├── LaunchesTableHead.tsx
            ├── LaunchesTableRow.tsx
        ├── Pages.tsx
        ├── SearchBar.tsx
    ├── tests
        ├── table
        ├── utils
    ├── utils
        ├── filterFunctions.ts
        ├── onSearch.ts
        ├── sortByOrder.ts
    ├── App.tsx
└── doc
└── public
```

## Demo

### Search

Type `Enter` or click search icon on the right to search text.

![Demo GIF](https://github.com/lnnhpmp/RocketLaunch/blob/main/my-app/doc/search.gif)

### Sort

Click on the arrow icon to trigger sorting. First time click only does ascending order sort. Afterwards just reverse.

#### Sort by name

![Demo GIF](https://github.com/lnnhpmp/RocketLaunch/blob/main/my-app/doc/sort_by_name.gif)

#### Sort by local date

![Demo GIF](https://github.com/lnnhpmp/RocketLaunch/blob/main/my-app/doc/sort_by_date.gif)

### Pagination

![Demo GIF](https://github.com/lnnhpmp/RocketLaunch/blob/main/my-app/doc/pagination.gif)

### Filter by date range

![Demo GIF](https://github.com/lnnhpmp/RocketLaunch/blob/main/my-app/doc/filter_by_daterange1.gif)
![Demo GIF](https://github.com/lnnhpmp/RocketLaunch/blob/main/my-app/doc/filter_by_daterange2.gif)

### Show only successful launches

![Demo GIF](https://github.com/lnnhpmp/RocketLaunch/blob/main/my-app/doc/success.gif)

## Build

Install dependencies

```
npm install
```

Run the project

```
npm start
```

Visit http://localhost:3000 to check the project

Run unit tests

```
npm test
```

## Project Implementation Process

### Data structure analysis

We wanna display launches data from public endpoint https://api.spacexdata.com/v4/launches.
The original data we get from the api should be mapped to this data structure:

```
{
    name,
    localDate,
    success (nullable),
    details (nullable),
    imgUrl (nullable),
    youtubeLink (nullable)
}
```

To make the table more user friendly, I translated the data structure we get form api to the following table columns

```
id | Name | Date | Succeeded | Details | Image | Youtube Link
```

`id` is the index of each data row.
`date` is formatted date string from `localDate` (show `year-month-day`).
`name` we just render the string.

To handle the nullable data, I used the logic below:

#### success information

```
if (success) {
    render 'launch succeeded: yes'
} else {
    render 'launch succeeded: no'
}
```

#### details information

```
if (details) {
    render {details}
} else {
    render 'no details'
}
```

#### image

```
if (imgUrl) {
    render {an image}
} else {
    render 'no image available'
}
```

#### youtube link

```
if (youtubeLink) {
    render {a clickable youtube link}
} else {
    render 'no youtube video'
}
```

### Handle page status

I define the page has 3 status: `loading` (we haven't received data from api call), `loaded` (we received data from api call) and `failed` (api call fails).

Only the `loaded` status is implemented with launches table. The other two are filled with simple texts.

More detailed error handlings are not implemented yet. Added in [TODOs](#todos).

### Search

Since it's a search function implemented on client side. I assume we won't handle massive data. Hence I decided to allow users search text in all string columns (`Name`, `Date`, `Details`, `Youtube Link`) over all pages. User can search a text by `Enter` or click on the search icon. Also I made the search case insensitive. So all strings would be compared in lowercase. The logic is:

```
name.lowerCase().includes(searchTerm) || localDate.lowerCase().includes(searchTerm) || launchDetails.lowerCase().includes(searchTerm) || youtubeLink.lowerCase().includes(searchTerm)
```

### Sort

I assume we sort data of all pages, not just the data on current page.

We only want to sort either by name or local date. So I added up / down icon to make the sorting order clear (ascending / descending). User can click on the arrow icon to trigger sorting. For first time click, it does ascending sort. After that just always do a reverse.

### Filtering

First we need to answer a question: what attribute do we want to use for filtering? In [Search](#search), we already covered searching for texts (which is actually kinda filtering as well). Therefore I would like to add filtering for `Succeeded` and `Date` columns.

#### Filter by date range

For `Date`, I setup a date range picker by using MUI `DateRangePicker`. It includes the

```
earliest launch date < latest launch date
```

validation already. So no need to add this validation in the code.

Any launch date located within the `earliest launch date` and `latest launch date` is filtered. Users might not select `earliest launch date` or `latest launch date`. So We handle nullable cases in the code as well. Filtering logic:

```
if (earliest launch date === null && latest launch date === null) {
    don't filter
}
else if (latest launch date !== null) {
    filter by "launch date <= latest launch date"
}
else if (earliest launch date !== null) {
    filter by "launch date >= earliest launch date"
}
else {
    filter by "launch date >= earliest launch date && launch date <= latest launch date"
}
```

#### Filter by success information

For `Succeeded`, it's a boolean value. Hence, I used switch toggle to do the filtering. I only make this function to filter the launches which succeeded. When the toggle is on, only succeessful launches are shown. When the toggle is off, show all data.

### Combine multiple conditions

All functionalities (search, sort, filter) are triggered in corresponded components. Each one returns a `filtered/sorted result`. The intersection of the `filtered/sorted result`s are computed in `App.tsx`. In the meanwhile, I store the `originalData`. For example when user searched some text then cleared it out and press enter, it should show the original table.

### Pagination

I used MUI `Pagination` component to implement pages so that user won't be overwhelmed by massive table rows. Also I assume we render 30 launches per page.

Compute the total pages number according to equation:

```
totalPages = ceil(launchesNumber / 30)
```

The launches shown on `i`th page (`currentPageLaunches`) is calculated by the following logic (code under `App.tsx`):

```
indexOfLastLaunch = i * 30
indexOfFirstLaunch = indexOfLastLaunch - 30
currentPageLaunches = data[indexOfFirstLaunch to indexOfLastLaunch]
```

When filtering data, the total pages number could be smaller than current page number. In this case, I simply reset the `currentPage` to 1.

```
if (ceil(launchesNumber / 30) < currentPage) {
    set currentPage 1
}
```

### Testing

I added unit tests to test the funtionalities (sort, search, filter) and basic table rendering (if `LaunchesTable` renders columns and rows on current page).

This helped with debugging. If it's daily work, I'd love to do it in a TDD way to implement the funtionalities.

### Responsive UI

For this part, I didn't invest much. Only made table column width and some paddings in percentage value instead of fixed pixels.
![Demo GIF](https://github.com/lnnhpmp/RocketLaunch/blob/main/my-app/doc/mobile.gif)

## TODOs

### Scalability

Ideally we should handle filtering and search on backend side. In this case, pagination on frontend is enough becase the data amount is small.

If the data scales up, we would need to implement endpoints on backend. In my opinion, a `POST` endpoint would be more extendable. Becase with `POST`, we can send params in the request body. Then we won't hit the url length limit even if our query params grow and become more complex.

### Error handling

I haven't handled different erros from api. We should be able to handle 4xx and 5xx status code.

Generalise `LaunchesTable` to make it applicable for more types of data.

### Testing

Unit tests and e2e tests are not fully covered because of time limit. I plan to add more `jest` unit tests to test the components. Add `cypress` e2e tests to test the flow. Test coverage is important.

### Mobile UI

The current responsive UI is not mobile friendly enough. Need to be improved.

## Built with

- React 18 + Typescript + node 20.+
- [Styled-components](https://styled-components.com/) to create resuable and more organised components.
- [MUI](https://mui.com/) to easily create user friendly UI.
