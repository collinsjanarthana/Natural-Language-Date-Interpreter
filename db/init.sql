CREATE TABLE IF NOT EXISTS queries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  input_text TEXT NOT NULL,
  interpreted_date DATETIME,
  response_json TEXT,
  type VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);