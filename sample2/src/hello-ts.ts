function target(name: string): string {
  if (name === "ts") return "TypeScript";
  else if (name === "js") return "JavaScript";
  else return "Unknown";
}

console.log("Hello, " + target("ts") + " World!");
