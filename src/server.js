const proffys = [
    {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "89999276776", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Informática", 
    cost: "60.00", 
    weekday: [0], 
    time_from: [720], 
    time_to:[1220]
    },
    {
    name: "Jefferson Nunes do Nascimento",
    avatar: "https://avatars2.githubusercontent.com/u/69088071?s=400&u=736399602e4fbad29e62e788c567e4d089ec36a4&v=4",
    whatsapp: "89999377903",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química", 
    cost: "20.00", 
    weekday: [1], 
    time_from: [720], 
    time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays})

}

function pageGiveClasses(req, res) {
    const data = req.query
    
    //se tiver dados adicionar a lista,
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data) //command para adicionar os proffys na list
        return res.redirect("/study") //para redirecionar a página study

    }


    //se não tiver dados, não adicionar.
    return res.render("give-classes.html", { subjects, weekdays})
}

//servidor
const express = require('express')
const server = express ()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio da configuração do servidor
server
//configurar arquivos estaticos (ccs, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

//start servidor
.listen(5500)
