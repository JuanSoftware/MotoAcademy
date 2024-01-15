const express = require('express');
const router = express.Router()
const db = require('./db');

//endpoint de leitura de alunos (read)
router.get("/alunos", (req, res) => {
    const query = "SELECT * FROM alunos";

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Erro ao obter alunos");
        } else {
            res.json(result);
        }
    });
});

router.post('/alunos', (req,res) =>{
    const{nome, idade} = req.body;

    const query = `INSERT INTO alunos(nome, idade)  VALUES ('${nome}', ${idade})`;

    db.query(query, (err, result) =>{
        if(err){
            res.status(500).send('Erro ao criar aluno');
        }else{
            res.status(201).send('Aluno criado com sucesso');
        }
    });
});

router.put('/alunos/:id', (req,res) =>{
    
    const{id} = req.params;

    const{nome, idade} = req.body;
    
    const query = `UPDATE alunos SET nome='${nome}', idade= ${idade} WHERE id_aluno=${id}`;

    db.query(query, (err, result) =>{
        if(err){
            res.status(500).send('Erro ao atualizar aluno');
        }else{
            res.send('Aluno atualizado com sucesso');
        }
    });
});


router.delete('/alunos/:id', (req,res) =>{
    
    const{id} = req.params;

    
    const query = `DELETE FROM alunos WHERE id_aluno=${id}`;

    db.query(query, (err, result) =>{
        if(err){
            res.status(500).send('Erro ao excluir aluno');
        }else{
            res.send('Aluno excluido com sucesso');
        }
    });
});

router.post("/aulas", (req,res) =>{
    const {nome_aula, descricao} = req.body;

    const query = `INSERT INTO aulas(nome_aula, descricao) VALUES('${nome_aula}', '${descricao}')`;

    db.query(query, (err, result) =>{
        if(err){
            res.status(500).send('Erro ao  criar aula');
        }else{
            res.status(201).send('Aula criado com sucesso');
        }
    });
})

router.get("/aulas", (req,res) =>{

    const query = `SELECT * FROM aulas`;

    db.query(query, (err, result) =>{
        if(err){
            res.status(500).send(`Erro ao obter aulas: ${JSON.stringify(err)}` );
        }else{
            res.json(result )
        }
    });
})

router.put('/aulas/:id', )



module.exports = router;