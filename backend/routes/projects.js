const express = require('express');
const router = express.Router();
const {
  createProject,
  getProjects,
  getProjectById,
  addMember,
  deleteProject
} = require('../controllers/projectController');
const { protect } = require('../middleware/auth');

router.post('/', protect, createProject);
router.get('/', protect, getProjects);
router.get('/:id', protect, getProjectById);
router.put('/:id/members', protect, addMember);
router.delete('/:id', protect, deleteProject);

module.exports = router;