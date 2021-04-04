# CSCI4800 Assignment 3

![Screenshot](public/img/smol-wink.svg)

**Names:** Tammy Husnetdinova and Alex Verkest<br>
<br>
**Class:** CSCI4800-E01 <br>
<br>
**Date:** 3/18/21 <br>
<br>
**Assignment:** 3 for Online Social Network <br>
<br>
**Learning objectives:** Our goal was to add to the progress made in the previous classwork by adding the backend mongo database, allowing for creation of new users by signing up, as well as allowing existing users to sign in. ADD MORE? <br>
<br>
**Technologies used:** HTML5, CSS3, Native Javascript, Vue.js for code, Visual Studio Code for development and testing, Google Chrome browser for testing, Windows 10 OS <br>
<br>
**Justification in design choices:** We decided to use ejs layouts rather than Vue.js for the visual layout, because that is what we have gotten practice with in the latest classworks. ADD MORE <br>
<br>
**Extra features:** We continued working with modals for sign up and sign in, which proved to be more challenging yet again with sending new user data to the database as well as logging users in. Our views also differed from the base requirements because we are using modals rather than separate views/routes which would have previously been standalone html pages.  <br>
<br>
**Nu HTML Checker status:** For the current build, there were no  .html files to put through the checker. However, our .ejs view files that contain html view formatting, did pass the checker with warnings about not having a doctype tag, head, or title, all of which an ejs file does not need. So we are good there! <br>
One nuance is that we do not yet have a working search function for searching posts, so we have a placeholder submit button when searching that leads to a dummy search results page (this is purely visual right now to show dynamicity). So, we do get this error with layout.ejs: <br>
`<a href="/search" class="btn btn-outline-success my-2 my-sm-0" type="submit"> Search </a>`<br>
Another notable warning is the embedded javascript using special characters that html checker did not approve of, but they are necessary for displaying the page: <br>
`<%- body %>`

**Sources:** <br>
https://community.thenetninja.co.uk/t/help-linking-a-script-js-to-a-ejs-html-file/715 <br>
https://stackoverflow.com/questions/47001537/how-to-include-external-js-file-to-ejs-node-template-page <br>
https://stackoverflow.com/questions/55322763/how-to-use-external-javascript-file-into-an-ejs-file <br>


<br>
No link for this one, because GitHub pages can only host static HTML pages, like the ones in prior assignments. No server side technology is supported, so Node.js applications won't run on GitHub pages. <br>
<br>

