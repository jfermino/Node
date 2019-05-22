const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http);

var mensage = {
    pergunta: "",
    pos: -1,
    listRespostas: []
};

var listPerguntas = ["Qual seu nome ?","Qual seu endereço ?","Qual sua idade ?","Qual seu e-mail ?","Qual sua profissão ?"]

app.get('/', (_, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

io.on('connection', socket => {
    if(mensage.pos == -1 || mensage.listRespostas.length == 0)
    {
        mensage.pos = 0;
    }
        

    mensage.pergunta = listPerguntas[mensage.pos]

    io.emit('messageResponse',mensage);
    socket.on('newMessage', msg => {
       
    mensage.listRespostas.push(listPerguntas[mensage.pos] +" "+msg);
    mensage.pos = mensage.pos + 1;
    if(mensage.pos < listPerguntas.length ){
        mensage.pergunta = listPerguntas[mensage.pos]
    }else{
        mensage.pos = -100;
    }

        io.emit('messageResponse', mensage);
    })
})

http.listen(3000, () => console.log('listening on *:3000'))