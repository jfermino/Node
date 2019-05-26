let lastId = 5;
let products = { items: [
    { "id": 1, "Nome": "Produto 1", "Desc": "Descrição 1","preco":10 }, 
    { "id": 2, "Nome": "Produto 2", "Desc": "Descrição 2","preco":20 },
    { "id": 3, "Nome": "Produto 3", "Desc": "Descrição 3","preco":30 },
    { "id": 4, "Nome": "Produto 4", "Desc": "Descrição 4","preco":40 },
    { "id": 5, "Nome": "Produto 5", "Desc": "Descrição 5","preco":50 }
] }

module.exports = {

    get(_, res) {
        res.json(products);
    },
    getById(req, res) {
        let id = req.params.id;
        if (!id) {
            res.json({ error: 'Should receive an id' })
        }else{
            var _produto;
            for(let i=0; i<products.items.length;i++){
                if(products.items[i].id == id){
                    _produto = products.items[i];
                    break;
                }
            }
            res.json({ _produto })
        }
    },
    inserir(req, res){
        let msg ={
                "status": 0,
                "mensagem":""
          };
        let nome = req.body.Nome;
        let desc = req.body.Desc;
        let prec = req.body.Preco;
        lastId = lastId + 1;

        if(desc.length < 10){
            msg.status = 300;
            msg.mensagem = "Descrição com menos de 10 caracteres";
        }else if(prec <=0 ){
            msg.status = 300;
            msg.mensagem = "Valor deve ser maior que 0";
        }else{
            var produto =  { "id": lastId, "Nome": nome, "Desc": desc, "Preco":prec };

            products.items.push(produto);
            msg.status = 200;
            msg.mensagem = `Produto: ${nome} Adicionado com sucesso !!`;

        }

        res.json(msg);
    },
    deletar(req,res){
        let msg ={
            "status": 0,
            "mensagem":""
      };
        let id = req.params.id;
        if (!id) {
            msg.mensagem = 'Should receive an id';
            msg.status = 300;
            res.json({ error: msg.mensagem })
        }else{
            for(let i=0; i<products.items.length;i++){
                if(products.items[i].id == id){
                    products.items.splice(i,1);
                    break;
                }
            }
            msg.mensagem = 'Produto Deletado';
            msg.status = 200;
            res.json(msg);
        }
    }
};
