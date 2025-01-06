const Task = require('../models/task');

module.exports = {
  async getAllTasks(req, res) {
    try {
      const tasks = await Task.findAll();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar as tarefas' });
    }
  },

  async getTaskById(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar a tarefa' });
    }
  },

  async createTask(req, res) {
    try {
      const { title, description } = req.body;
      const task = await Task.create({ title, description });
      res.status(201).json(task); // Retorna a tarefa criada
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar a tarefa' });
    }
  },

  async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { title, description, completed } = req.body;
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      await task.update({ title, description, completed });
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar a tarefa' });
    }
  },

  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      await task.destroy();
      res.status(204).send(); // Retorna 204 sem conteúdo
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar a tarefa' });
    }
  },
};