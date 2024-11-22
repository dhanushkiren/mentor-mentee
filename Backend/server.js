const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Express app setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 8081;

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/sample_login', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// MongoDB Schemas and Models
const AdminSchema = new mongoose.Schema({
  uid: String,
  pass: String,
  role: String,
});

const MentorSchema = new mongoose.Schema({
  name: String,
  department: String,
  designation: String,
  email: String,
  phone: String,
});

const MenteeSchema = new mongoose.Schema({
  name: String,
  department: String,
  year: Number,
  mentor_uid: String,
  achievements: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const Mentor = mongoose.model('Mentor', MentorSchema);
const Mentee = mongoose.model('Mentee', MenteeSchema);

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ uid: username, pass: password });
    if (admin) {
      res.status(200).json({
        message: 'Login Successful',
        role: admin.role,
        id: admin.uid,
      });
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get mentor count
app.get('/mentors/count', async (req, res) => {
  try {
    const count = await Mentor.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error fetching mentor count:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get mentee count
app.get('/mentees/count', async (req, res) => {
  try {
    const count = await Mentee.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error fetching mentee count:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get mentor list
app.get('/mentorlist', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.status(200).json(mentors);
  } catch (error) {
    console.error('Error fetching mentors:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get mentee list
app.get('/menteelist', async (req, res) => {
  try {
    const mentees = await Mentee.find();
    res.status(200).json(mentees);
  } catch (error) {
    console.error('Error fetching mentees:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete staff
app.delete('/staff/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await Mentor.findByIdAndDelete(userId);
    if (result) {
      res.status(200).json({ message: 'Staff record deleted successfully' });
    } else {
      res.status(404).send('Staff not found');
    }
  } catch (error) {
    console.error('Error deleting staff:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Update staff
app.put('/staffupdate/:id', async (req, res) => {
  const { id } = req.params;
  const { name, department, designation, email, phone } = req.body;
  try {
    const updatedStaff = await Mentor.findByIdAndUpdate(
      id,
      { name, department, designation, email, phone },
      { new: true }
    );
    if (updatedStaff) {
      res.status(200).json({ message: 'Staff record updated successfully' });
    } else {
      res.status(404).send('Staff not found');
    }
  } catch (error) {
    console.error('Error updating staff:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Update mentee
app.put('/menteeupdate/:id', async (req, res) => {
  const { id } = req.params;
  const { name, department, year, mentor_uid, achievements } = req.body;
  try {
    const updatedMentee = await Mentee.findByIdAndUpdate(
      id,
      { name, department, year, mentor_uid, achievements },
      { new: true }
    );
    if (updatedMentee) {
      res.status(200).json({ message: 'Mentee record updated successfully' });
    } else {
      res.status(404).send('Mentee not found');
    }
  } catch (error) {
    console.error('Error updating mentee:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get solo mentor data
app.get('/userdata/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const mentor = await Mentor.findById(id);
    if (mentor) {
      res.status(200).json(mentor);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get mentees of a specific mentor
app.post('/students', async (req, res) => {
  const { mentorUid } = req.body;
  try {
    const mentees = await Mentee.find({ mentor_uid: mentorUid });
    res.status(200).json(mentees);
  } catch (error) {
    console.error('Error fetching mentees:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
