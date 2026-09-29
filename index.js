const colors = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  gray: "\x1b[90m",
};

const arg = process.argv;
const method = arg[2];
const url = arg[3];

// const parsedUrl = new URL(url);

// console.log("Base URL:", parsedUrl.origin + parsedUrl.pathname);
// console.log("Query:", parsedUrl.search);

const allowedMethods = ["GET", "POST", "PATCH", "DELETE"];

if (!allowedMethods.includes(method)) {
  console.log("Invalid HTTP method");
  process.exit(1);
}

async function main() {
  console.log(`
${colors.cyan}╭──────────────────────────────╮
│        🌙 NIGHT OWL          │
│          API CLIENT          │
╰──────────────────────────────╯${colors.reset}
`);
  console.log(`${colors.yellow}${method}${colors.reset} ${url}`);
  console.log();
  try {
    const start = Date.now();
    const options = {
      method: method,
    };

    if (method === "POST" || method === "PATCH") {
      options.headers = {
        "Content-Type": "application/json",
      };

      options.body = JSON.stringify({
        message: "Hello from Night Owl",
      });
    }

    const response = await fetch(url, options);
    const end = Date.now();

    const statusColor = response.ok ? colors.green : colors.red;

    console.log(`${statusColor}Status: ${response.status}${colors.reset}`);

    if (response.ok) {
      console.log(`${colors.green}✓ Request successful${colors.reset}`);
    } else {
      console.log(`${colors.red}✗ Request failed${colors.reset}`);
    }

    console.log(
      `${colors.gray}Response time:${colors.reset} ${end - start} ms`,
    );

    console.log(`${colors.gray}Headers${colors.reset}`);

    const importantHeaders = ["content-type", "content-length", "server"];

    for (const key of importantHeaders) {
      console.log(`  ${key}: ${response.headers.get(key)}`);
    }

    const data = await response.json();

    console.log(`${colors.gray}Response Body${colors.reset}`);

    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.log("Error:", error.message);
  }
}

main();
