This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running
Clone repository.
Run npm install.
Run npm start.
Go to http://localhost:3000.

## Assignment instructions
In this exercise you will create a movie directory application. The application should be written as
a Single Page Application using React and communicates with a JSON REST API that has been
provided.

## REST API
The REST API is available at: 3.120.96.16:3001<br/>
The API is used to add, remove, edit and list movie objects. A movie object has the following structure

```
{
“id”: “99a7d7ba-8660-4011-b98c-c927c5f0d34c”,
“title”: “A title”,
“description”: “A description”,
“director”: “A director”,
“rating”: 3.0,
}

```

## Views

The application should contain four views:
<ul>
  <li>A "main page" that shows a table of movies</li>
  <li>An "add page" with a form that lets the user add a new movie</li>
  <li>An "edit page" with a form that lets the user edit a movie</li>
  <li>A "details page" that shows information about a movie</li>
</ul>

All pages should have a shared navigation with links to the “main page” and the "add page".

## Main page
This page should display a table with all movies. The number of movies is limited to 20 so pagination is not necessary. <br/>

The table should display the title, director and rating for the movies in separate columns. Do not display the description in this table.<br/>

Each row in the table should have three buttons/links
<ul>
  <li>A button to delete the movie</li>
  <li>A link to the "edit page"</li>
  <li>A link to the "details page"</li>
</ul>

## Add page
This page is used to add new movies. The page should contain a form with the following inputs
<ul>
  <li>A text input for title</li>
  <li>A textarea for description</li>
  <li>A text input for director</li>
  <li>A number/range input for rating (some other input like a rating star input is also acceptable)</li>
</ul>

When the user submits the form one of two things can happen
<ul>
  <li>If there is a validation error or some other error a suitable error message should be displayed</li>
  <li>If the object is successfully added, the user should be redirected to the "main page".</li>
</ul>

## Edit page
This page is used to edit movies. The page should work exactly like the “add page” but the form
should be automatically populated with the current data.

## Details page
This page shows information about a movie. It should display the title, description, director and rating.
The page should also contain a link to the "edit page".

## Routing
The application must implement correct routing and should contain at least four routes, one of every view.<br/><br/>
The web browser history and refreshing the page must work correctly.<br/><br/>
You must also dynamically change the title when the user navigates to a new page.

## Requirements
<ul>
  <li>The application should be an SPA written using React</li>
  <li>It should implement correct routing</li>
  <li>It should implement four views</li>
    <ul>
        <li>Main page</li>
        <li>Add page</li>
        <li>Edit page</li>
        <li>Details page</li>
    </ul>
  <li>It should handle errors from the REST API correctly</li>
</ul>
