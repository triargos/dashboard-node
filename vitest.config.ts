import {defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        environment: "node",
        coverage: {
            provider: "v8",
            exclude: ["node_modules", "test", "src/exceptions"]
        }
    }
})