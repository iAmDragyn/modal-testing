const express = require("express"), app = express(),
homeController = require("./controllers/homeController"),
errorController = require("./controllers/errorController"),
usersController = require("./controllers/usersController"),
layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(layouts);

app.get("/", homeController.showIndex);

app.use(express.static("public"))
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.get("/thing", homeController.showThing);
app.post("/signUp", homeController.postedSignUpForm);
app.post("/logIn", homeController.postedLogInForm);

app.get("/search", homeController.showResults);
app.get("/settings", homeController.showSettings);
app.get("/account", homeController.showAccount);


app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`)
});