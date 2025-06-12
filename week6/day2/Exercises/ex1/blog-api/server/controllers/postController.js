const Post = require('../models/postModel');

exports.getAll = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.getById = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (post) res.json(post);
    else res.status(404).json({ error: 'Post non trouvé' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.create = async (req, res) => {
  try {
    const newPost = await Post.createPost(req.body);
    res.status(201).json(newPost[0]);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la création' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Post.updatePost(req.params.id, req.body);
    if (updated.length > 0) res.json(updated[0]);
    else res.status(404).json({ error: 'Post non trouvé' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Post.deletePost(req.params.id);
    if (deleted) res.json({ message: 'Post supprimé' });
    else res.status(404).json({ error: 'Post non trouvé' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la suppression' });
  }
};
