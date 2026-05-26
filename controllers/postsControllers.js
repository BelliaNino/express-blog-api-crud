import posts from '../data/posts.js'

function index (req, res) {
    res.status(200).json({ error: null, results: posts });
}

//SHOW http://localhost:3000/posts/ID
function show(req, res) {
  const realId = Number(req.params.id.trim());

  if (isNaN(realId) || realId <= 0) {
    res.status(400).json({ error: 'Id non valido', results: null });
    return;
  }

  const post = posts.find(p => p.id === realId);

  if (!post) {
    res.status(404).json({ error: `Post ${realId} non trovato`, results: null });
    return;
  }

  res.status(200).json({ error: null, results: post });
}

//create
function create(req, res) {
  const { title, content, image, tags } = req.body;

  // Validazione title
  if (!title || title.trim() === '') {
    res.status(400).json({ error: 'Il campo "title" è obbligatorio', results: null });
    return;
  }

  // Validazione content
  if (!content || content.trim() === '') {
    res.status(400).json({ error: 'Il campo "content" è obbligatorio', results: null });
    return;
  }

  // Validazione image
  if (!image || image.trim() === '') {
    res.status(400).json({ error: 'Il campo "image" è obbligatorio', results: null });
    return;
  }

  // Validazione tags
  if (!tags || !Array.isArray(tags) || tags.length === 0) {
    res.status(400).json({ error: 'Il campo "tags" deve essere un array non vuoto', results: null });
    return;
  }

  console.log('Dati in arrivo:', req.body);
  res.status(201).json({ error: null, results: req.body });
}

function update (req, res) {

}

function partialUpdate (req, res) {

}

function destroy(req, res) {
  const realId = Number(req.params.id.trim());

  if (isNaN(realId) || realId <= 0) {
    res.status(400).json({ error: 'Id non valido', results: null });
    return;
  }

  const postIndex = posts.findIndex(p => p.id === realId);

  if (postIndex === -1) {
    res.status(404).json({ error: `Post ${realId} non trovato`, results: null });
    return;
  }

  posts.splice(postIndex, 1);
  console.log('Posts dopo la rimozione:', posts);

  res.status(200).json({ error: null, results: `Post ${realId} eliminato` });
}

export {
    index,
    show,
    create,
    update,
    partialUpdate,
    destroy
}