const chai = require('chai');
const expect = chai.expect;

const { get, getById, inserir,deletar } = require('../../routes/productsController');

let req = {
    body: {},
    params: {},
};

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}

describe('Products Route', function() {
    describe('get() function', function() {
        it('Verifica se é retornado um array ', function() {
            get(req, res);
            chai.assert.isArray(res.jsonCalledWith.items);
        });

        it('Deve receber um produto como retorno e verifica a propriedade Nome', function() {
            const getReq = req;
            getReq.params = {
                id: 1
            };

            getById(getReq, res);
            expect(res.jsonCalledWith._produto).include({"Nome": "Produto 1"})
        });

        it('Adiciona um novo valor na lista de produtos',function(){
            req.body.Nome = "Novo Produto";
            req.body.Desc = "Desc Novo Produto";
            req.body.Preco = 60;
            inserir(req,res);
            expect(req.body.Preco).to.greaterThan(0);
            expect(res.jsonCalledWith.status).to.equal(200);
            expect(res.jsonCalledWith.mensagem).to.include("sucesso");
        });
        it('Valida se item foi deletado com sucesso',function(){
            const getReq = req;
            getReq.params = {
                id: 1
            };
            deletar(getReq,res);
            expect(res.jsonCalledWith.status).to.equal(200);
            expect(res.jsonCalledWith.mensagem).to.equal("Produto Deletado");
        });
        
    })
});