let items = [
    {
        "name": "Monkey D. Luffy",
        "image": "pics/luffy.jpeg",
        "aim": "Future king of pirates. ",
        "desc": "Monkey D. Luffy, also known as 'Straw Hat Luffy' and commonly as 'Straw Hat', is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as the most powerful of its top fighters.[26][27] He desires to find the legendary treasure left behind by the late Gol D. Roger and thereby become the Pirate King, which would help facilitate an unknown dream of his that he has told only to Shanks, his brothers and crew. He believes that being the Pirate King means having the most freedom in the world.",
    },
    {
        "name": "Roronoa Zoro",
        "image": "pics/RoronoaZoro.jpg",
        "aim": "Strongest swordsman",
        "desc": "Roronoa Zoro, also known as 'Pirate Hunter' Zoro, is the combatant of the Straw Hat Pirates, one of their two swordsmen, one of the Senior Officers of the Straw Hat Grand Fleet, and is publicly recognized as the right-hand man of his crew's captain Monkey D. Luffy. Formerly a bounty hunter, he is the second member of Luffy's crew and the first to join it, doing so in the Romance Dawn Arc"
    },
    {
        "name": "Vinsmoke Sanji",
        "image": "pics/sanji.webp",
        "aim": "Find All Blue",
        "desc": "'Black Leg' Sanji, born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the fifth member of the crew and the fourth to join, doing so at the end of the Baratie Arc."
    },
    {
        "name": "Usopp",
        "image": "pics/usopp.jpg",
        "aim": "Brave warrior of the sea",
        "desc": "'God' Usopp is the sniper of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the fourth member of the crew and the third to join, doing so at the end of the Syrup Village Arc. Although he left the crew during the Water 7 Arc, he rejoined at the end of the Post-Enies Lobby Arc.",
    },
    {
        "name": "Nami",
        "image": "pics/nami.jpg",
        "aim": "Draw seacharts of every sea",
        "desc": "'Cat Burglar' Nami is the navigator of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.[4] She is the third member of the crew and the second to join, doing so during the Orange Town Arc. She is the adoptive sister of Nojiko after the two were orphaned and taken in by Bell-mère.",
    },
    {
        "name": "Tony Tony Chopper",
        "image": "pics/chopper.jpg",
        "aim": "To become greatest doctor",
        "desc": "Tony Tony Chopper, also known as 'Cotton Candy Lover' Chopper, is the doctor of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the sixth member of the crew and the fifth to join, doing so at the end of the Drum Island Arc. He was temporarily forced to join the Foxy Pirates during the Long Ring Long Land Arc, but was quickly returned to Luffy's crew.",
    },
    {
        "name": "Nico Robin",
        "image": "pics/robin.jpg",
        "aim": "know the 100 year void history",
        "desc": "Nico Robin, also known by her epithet 'Devil Child' and the 'Light of the Revolution', is the archaeologist of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.[3] She is the seventh member of the crew and the sixth to join, doing so at the end of the Arabasta Arc. She temporarily left the crew during the Water 7 Arc but rejoined during the Enies Lobby Arc.",
    },
    {
        "name": "Franky",
        "image": "pics/franky.jpg",
        "aim": "Build a ship which sails Grand line.",
        "desc": "'Cyborg' Franky is the shipwright of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the crew's eighth member and the seventh to join, doing so at the end of the Post-Enies Lobby Arc",
    },
    {
        "name": "Brook",
        "image": "pics/brook.jpg",
        "aim": "Meet Laboon",
        "desc": "'Soul King' Brook is the musician of the Straw Hat Pirates, one of their two swordsmen and one of the Senior Officers of the Straw Hat Grand Fleet. He is the ninth member of the crew and the eighth to join, doing so at the end of the Thriller Bark Arc.",
    }
]

let changeCss = () =>
{
    if (layout == "grid")
        document.getElementById('gridLayout').href = 'gridStyle.css'
    else
        document.getElementById('gridLayout').setAttribute('href', "listStyle.css")
}

let toGrid = () =>
{
    document.getElementById('listIcon').setAttribute("src", "icons/listIcon-outline.png")
    document.getElementById('gridIcon').setAttribute("src", "icons/gridIcon.png")
    layout = "grid"
    changeCss();
    showLayout();
}

let toList = () =>
{
    document.getElementById('listIcon').setAttribute("src", "icons/listIcon.png")
    document.getElementById('gridIcon').setAttribute("src", "icons/gridIcon-outline.png")
    layout = "list"
    changeCss();
    showLayout();
}

let showLayout = () =>
{
    let s = ""
    let grid = document.querySelector(".grid")

    if (layout == "list")
    {
        items.forEach(i =>
        {
            let desc = ""
            if (i.desc.length > 100)
            {
                console.log("words greater than 100")
                desc = i["desc"].slice(0, 100) + "......"
            } else
            {
                desc = i["desc"]
            }
            // listView layout html
            s += "<div class='container'>"
            s += "<div class='image'><img src=" + i.image + " alt=" + i.name + "></div>"
            s += "<div class='name'>" + i.name + "</div>"
            s += "<div class='aim'>" + i.aim + "</div>"
            s += "<div class='desc'>" + desc + "</div>"
            s += "</div>"
        })
    }
    else
    {
        items.forEach(i =>
        {
            let desc = ""
            if (i.desc.length > 300)
            {
                console.log("words greater than 100")
                desc = i["desc"].slice(0, 300) + "......"
            } else
            {
                desc = i["desc"]
            }
            // GridView layout html
            s += "<div class='container'>"
            s += "<div class='header'>"
            s += "<div class='image'><img src=" + i.image + " alt=" + i.name + "></div>"
            s += "<div class='name'>" + i.name + "</div></div>"
            s += "<div class='aim'>" + i.aim + "</div>"
            s += "<div class='desc'>" + desc + "</div>"
            s += "</div>"
        })
    }
    grid.innerHTML = s
}


let layout = "grid"
let gridView = document.getElementById("gridButton")
let listView = document.getElementById("listButton")

showLayout();

gridView.addEventListener('click', toGrid)
listView.addEventListener('click', toList)