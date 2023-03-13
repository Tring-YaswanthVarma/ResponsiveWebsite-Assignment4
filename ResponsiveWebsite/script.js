let pages = [
    {
        "link" : "./BasicLayout-Assignment1/BasicLayout.html",
        "image" : "./images/BasicLayout.png",
        "alt" : "Basic layout image",
        "title" : "Basic Layout",
        "info" : "A basic webpage that includes text, images, and links. Used HTML to structure the content and CSS to style the layout and appearance of the webpage.",
    },
    {
        "link" : "./HTMLWithForms/HTMLWithForms.html",
        "image" : "./images/HTMLWithForm.png",
        "alt" : "HTML with Form image",
        "title" : "HTML With Form",
        "info" : "A simple interactive form using HTML and JavaScript. This form includes input fields for text, numbers, and dates, as well as a submit button. Used JavaScript to validate the form and ensured that all required fields are filled out before the form can be submitted",
    },
    {
        "link" : "./ImageGallery/ImageGallery.html",
        "image" : "./images/ImageGallery.png",
        "alt" : "Image Gallery image",
        "title" : "Image Gallery",
        "info" : "A simple image gallery using HTML, CSS, and JavaScript. This gallery includes a set of thumbnail images, and clicking on a thumbnail displays the full-size image in a lightbox view. Used CSS to style the layout and appearance of the gallery, and used JavaScript to handle the thumbnail clicks and lightbox display",
    },
    {
        "link" : "./gridList/grid.html",
        "image" : "./images/GridList.png",
        "alt" : "Grid List image",
        "title" : "Grid List View",
        "info" : "A simple grid and list view using HTML, CSS and Javascript. These views includes a set of content boxes and have two buttons to choose from grid and list view. Used Javascript to handle button clicks and changing the view of the page.",
    },
]



let s = ""

let middle = document.querySelector(".middle")

pages.forEach(page => {
    s += "<div class='container'>"
    s += "<div class='image'>"
    s += "<a href=" + page.link + "><img src=" + page.image + " alt=" + page.alt + "></a>"
    s += "</div>"
    s += "<div class='info'>"
    s += "<h2>" + page.title + "</h2>"
    s += "<p>" + page.info + "</p>"
    s += "</div>"
    s += "</div>"
})

middle.innerHTML = s
