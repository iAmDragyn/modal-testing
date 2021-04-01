const express = require("express"), app = express(),
homeController = require("./controllers/homeController"),
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


app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`)
});