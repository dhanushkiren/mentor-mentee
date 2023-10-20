const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
const port = 8081;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sample_login',
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// login 
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM admin WHERE uid = ? AND pass = ?`;

  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
        console.log('Internal Server Error');
    } else {
      if (result.length > 0) {
        console.log("result: ", result);
        const role = result[0].role;
        res.status(200).json({ message: 'Login Successful', role: role });
        console.log("login success");
      } else {
        res.status(401).send('Invalid Credentials');
        console.log("Invalid Credentials");
      }
    }
  });
});

// mentor count 
app.get('/mentors/count', (req, res) => {
  const query = 'SELECT COUNT(*) as count FROM mentor';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json({ count: result[0].count });
    }
  });
});

// mentee count
app.get('/mentees/count', (req, res) => {
  const query = 'SELECT COUNT(*) as count FROM mentee';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json({ count: result[0].count });
    }
  });
});

// mentor list
app.get('/mentorlist', (req, res) => {
  const query = 'SELECT * FROM mentor';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

// mentee list
app.get('/menteelist', (req, res) => {
  const query = 'SELECT * FROM mentee';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

// delete staff
app.delete('/staff/:userId', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM staff WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting staff record:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json({ message: 'Staff record deleted successfully' });
    }
  });
});

//update staff
app.put('/staffupdate/:id', (req, res) => {
  const id = +req.params.id;
  console.log(id);
  const { name, department, designation, email, phone } = req.body;
  const query = 'UPDATE mentor SET name = ?, department = ?, designation = ?, email = ?, phone = ? WHERE id = ?';
  db.query(query, [name, department, designation, email, phone, id], (err, result) => {
    if (err) {
      console.error('Error updating staff record:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json({ message: 'Staff record updated successfully' });
    }
  });
});

//mentee update
app.put('/menteeupdate/:id', (req, res) => {
  const id = +req.params.id;
  console.log(id);
  const { name, department, year, mentorId, achievements } = req.body;
  const query = 'UPDATE mentee SET name = ?, department = ?, year = ?, mentor_uid = ?, achievements = ? WHERE id = ?';
  db.query(query, [name, department, year, mentorId, achievements, id], (err, result) => {
    if (err) {
      console.error('Error updating mentee record:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json({ message: 'Mentee record updated successfully' });
    }
  });
});


// solo data 
app.get('/userdata/:id', (req, res) => {
  const { id } = req.params; // Get the `id` parameter from the URL
  const query = 'SELECT * FROM mentor WHERE id = ?'; // Adjust the table name and query as needed

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (result.length > 0) {
        const userData = result[0];
        res.status(200).json(userData);
      } else {
        res.status(404).send('User not found');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
