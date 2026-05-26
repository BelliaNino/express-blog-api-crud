import posts from '../data/posts.js'

function index (req, res) {
    res.json({ error: null, results: posts });
}

function show(req, res) {
  
}

function create (req, res) {

}

function update (req, res) {

}

function partialUpdate (req, res) {

}

function destroy(req, res) {
  
}

export {
    index,
    show,
    create,
    update,
    partialUpdate,
    destroy
}