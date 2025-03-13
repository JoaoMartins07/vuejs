// Importa os módulos necessários
import express from "express";
import cors from 'cors';
import mysql  from 'mysql2/promise';

// Configuração do servidor e banco de dados
const app = express();
const port = 3000;
app.use(cors()); // só esta linha tem de ser verificada
app.use(express.json());




// Conexão com o banco de dados
const db = mysql.createPool({
    host: 'localhost',
    user: 'root', // Altere conforme necessário
    password: '', // Altere conforme necessário
    database: 'projeto'
});



// Rota para obter todas as categorias
app.get('/categorias', async (req, res) => {
    try {
        const [rows] = 
        await db.query('SELECT * FROM categorias ORDER BY ordem');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter uma categoria por ID
app.get('/categorias/:id', async (req, res) => {
    try {
        const sql = 'SELECT * FROM categorias WHERE id = ?';
        const [rows] = await db.query(sql, [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).
                    json({ error: 'Categoria não encontrada' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar uma categoria
app.put('/categorias_editar/:id', async (req, res) => {
    try {
        const { ordem, titulo } = req.body;
        const sql = 'UPDATE categorias SET ordem = ?, titulo = ? WHERE id = ?';
        const [result] = await db.query(sql, [ordem, titulo, req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }
        res.json({ id: req.params.id, ordem, titulo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar uma nova categoria
app.post('/categorias_inserir', async (req, res) => {
    try {
        const { ordem, titulo } = req.body;
        const sql = 'INSERT INTO categorias (ordem, titulo) VALUES (?, ?)';
        const [result] = await db.query(sql, [ordem, titulo]);
        res.json({ id: result.insertId, ordem, titulo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// Rota para deletar uma categoria
app.delete('/categoria/:id', async (req, res) => {
    try {
        const sql  = 'DELETE FROM categorias WHERE id = ?';
        const [result] = await db.query(sql, [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }
        res.json({ message: 'Categoria deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});






/**** PRODUTOS */



// Rota para obter todas produtos
app.get('/produtos', async (req, res) => {
    try {
        const [rows] = 
        await db.query('SELECT * FROM produto');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter produtos por ID da categoria
app.get('/produtos_cat/:id', async (req, res) => {
    try {
        const sql = 'SELECT * FROM produto WHERE idcategoria = ?';
        const [rows] = await db.query(sql, [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).
                    json({ error: 'Não existem produtos nesta categoria' });
        }
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter uma produto por ID
app.get('/produtos/:id', async (req, res) => {
    try {
        const sql = 'SELECT * FROM produto WHERE id = ?';
        const [rows] = await db.query(sql, [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).
                    json({ error: 'Produto não encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Rota para criar um produto
app.post('/produto_inserir', async (req, res) => {
    try {
        const { idcategoria, nome, preco, qtd } = req.body;
        const sql = 'INSERT INTO produto (idcategoria, nome, preco, qtd) VALUES (?, ?, ?, ?)';
        const [result] = await db.query(sql, [idcategoria, nome, preco, qtd]);
        res.json({ id: result.insertId, idcategoria, nome, preco, qtd });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um produto
app.put('/produto_editar/:id', async (req, res) => {
    try {
        const { idcategoria, nome, preco, qtd } = req.body;
        const sql = 'UPDATE produto SET idcategoria=?, nome=?, preco=?, qtd=? WHERE id = ?';
        const [result] = await db.query(sql, [idcategoria, nome, preco, qtd, req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json({ id: req.params.id, idcategoria, nome, preco, qtd });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




// Rota para APAGAR UM PRODUTO
app.delete('/produto/:id', async (req, res) => {
    try {
        const sql  = 'DELETE FROM produto WHERE id = ?';
        const [result] = await db.query(sql, [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json({ message: 'Produto apagado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
