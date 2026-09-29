# 🌙 Night Owl

A lightweight command-line HTTP API client built with Node.js.

Night Owl lets you send HTTP requests directly from the terminal and inspect the response through a clean, minimal CLI interface.

## Features

* `GET` requests
* `POST` requests
* `PATCH` requests
* `DELETE` requests
* HTTP status codes
* Response time measurement
* Response headers
* JSON response parsing
* Request success/failure detection
* Basic error handling
* Clean terminal output

## Usage

Run Night Owl with:

```bash
node index.js <METHOD> <URL>
```

### GET

```bash
node index.js GET https://api.github.com
```

### POST

```bash
node index.js POST https://jsonplaceholder.typicode.com/posts
```

### PATCH

```bash
node index.js PATCH https://jsonplaceholder.typicode.com/posts/1
```

### DELETE

```bash
node index.js DELETE https://jsonplaceholder.typicode.com/posts/1
```

## Example Output

```text
╭──────────────────────────────╮
│        🌙 NIGHT OWL          │
│          API CLIENT          │
╰──────────────────────────────╯

GET https://api.github.com

Status: 200
✓ Request successful
Response time: 451 ms

Headers
  content-type: application/json
  content-length: ...
  server: ...

Response Body
{
  ...
}
```

## Tech Stack

* Node.js
* JavaScript
* Fetch API

## Project Structure

```text
night-owl-api/
├── index.js
├── package.json
├── README.md
└── .gitignore
```

## How It Works

Night Owl takes the HTTP method and target URL from command-line arguments, sends the request using Node.js's built-in Fetch API, measures the response time, and displays key response information in the terminal.

For `POST` and `PATCH` requests, Night Owl also sends a JSON request body.

## Error Handling

Night Owl handles common request errors and reports whether the HTTP request was successful based on the response status.
