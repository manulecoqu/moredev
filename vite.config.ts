// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
<<<<<<< HEAD
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

=======
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
>>>>>>> 0193e5bd6e856064c35bdeb73e2a3a203d332a15
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
<<<<<<< HEAD

  // Configuration Nitro pour Vercel (ajoutée proprement)
  vite: {
    plugins: [
      (await import("nitro/vite")).nitro({
        preset: "vercel",
      }),
    ],
  },
=======
>>>>>>> 0193e5bd6e856064c35bdeb73e2a3a203d332a15
});
