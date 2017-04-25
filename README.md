# Rubik

Small React/Impress project to visualize an interactive poem.

Live [demo](http://www.lindsaygensinger.com/rubik)

Content comes from [Branch](https://staceyforbes.com/2017/03/21/rubik-me-square-off-again/)

## Start Project

The content to this project is a simple JSON file with the following schema and will be required in order to have anything render in the project.
```
{
    var data = [
        {
            text: "This shows inside the square",
            url_name: "this-is-the-url-and-must-be-unique",
            datax: 0,
            datay: 0,
            dataz: 0,
            rotate: 0,
            rotatex: 0,
            rotatey: 0,
            rotatez: 0,
            scale: 3
        }
    ]
}
```

```
git clone https://github.com/lgensinger/rubik.git
cd rubik
npm install
npm start
```