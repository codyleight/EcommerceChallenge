const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const productId = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });

    if (!productId) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }

    res.status(200).json(productId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
