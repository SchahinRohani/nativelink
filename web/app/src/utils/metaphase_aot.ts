import { join } from "node:path";
import { generateAstroContent } from "./metaphase";
import type { Crate } from "./rustdoc_types";

export async function generateDocs(config: {
  crateDataPath: string;
  outputPath: string;
}) {
  try {
    const crateDataPath = join(import.meta.dir, config.crateDataPath);
    const crateData: Crate = JSON.parse(await Bun.file(crateDataPath).text());

    const markdownContent = generateAstroContent(crateData);

    const outputPath = join(import.meta.dir, config.outputPath);
    await Bun.write(outputPath, markdownContent);

    console.info(`Generated: ${outputPath}`);
  } catch (error) {
    console.error("An error occurred during generation:", error);
  }
}
