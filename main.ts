// hello: greet the small ordinary moment we are about to write down.
// batch: collect that single line into a small batch for the output file.
// orders: follow the orders plainly and place the text where asked.
// slot: the lone slot of stdout reports the byte size, once.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE = "The kettle fell silent, and the whole kitchen held its breath for one second.";
const here = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
const size = Buffer.byteLength(LINE, "utf8");
console.log(`wrote ${size} bytes to ${target}`);
