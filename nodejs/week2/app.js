const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const documents = require('./documents.json');

// Support parsing JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is a search engine');
});

app.get('/search', (req, res) => {
  try {
    queryValue = req.query.q;

    if (queryValue) {
      const filteredArray = findByQuery(documents, queryValue);

      res.json(filteredArray);
    } else {
      res.json(documents);
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/search', async (req, res) => {
  try {
    requestBody = req.body;
    queryValue = req.query.q;

    if (queryValue && requestBody) {
      res
        .status(400)
        .json({
          error: 'You cannot search by query and body at the same time',
        });
    } else if (queryValue) {
      const filteredArray = findByQuery(documents, queryValue);

      res.json(filteredArray);
    } else if (requestBody) {
      const filteredArray = findByPost(documents, requestBody);

      res.json(filteredArray);
    } else {
      res.json(documents);
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/documents/:id', async (req, res) => {
  try {
    paramsId = +req.params.id;

    if (paramsId) {
      const doc = findById(documents, paramsId);

      if (doc) {
        res.json(doc);
      } else {
        res.status(404).json({ error: 'Page is not found' });
      }
    } else {
      res.status(400).json({ error: 'Wrong id' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Helpers

const findByQuery = (documents, query) => {
  return documents.filter((doc) => {
    const values = Object.values(doc).filter((value) => {
      return String(value).includes(query);
    });

    return values.length > 0;
  });
};

const findByPost = (documents, postBody) => {
  return documents.filter((doc) => {
    const keyName = Object.keys(postBody)[0];
    return String(doc[keyName]).includes(postBody[keyName]);
  });
};

const findById = (documents, id) => {
  return documents.find((doc) => doc.id === id);
};

// Server runner

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
