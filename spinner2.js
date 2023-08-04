const spinner = ['\r|', '\r/', '\r-', '\r|', '\r/', '\r- ', '\r|'];
let t = 100;
for (const char of (spinner)) {
  setTimeout((() => {process.stdout.write(char)}), t);
  t += 200;
};