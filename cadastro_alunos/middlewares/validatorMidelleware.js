class validatorMidlleware{
    validateInput(request, response, next){
        const {nome, idade} = request.body;
        if(typeof(nome) != 'string' || typeof(idade) != 'number'){
            return response.status(500).json({description:`Payload contem tipos errados: parametro errado ${typeof(nome) != "string" ? "Nome": "Idade"}`})
        }else{
            next();
        }


            
    }
}

module.exports = new validatorMidlleware()