# add entry panic example

run `npm run build` several time, sometimes paniced.

```bash
$npm run build

> rspack-add-entry-panic@1.0.0 build
> rspack build

Panic occurred at runtime. Please file an issue on GitHub with the backtrace below: https://github.com/web-infra-dev/rspack/issues
Message:  should have module graph module
Location: crates/rspack_core/src/module_graph/mod.rs:510

Backtrace omitted.

Run with RUST_BACKTRACE=1 environment variable to display it.
Run with RUST_BACKTRACE=full to include source snippets.
Abort trap: 6
```

```bash
$npm run build

> rspack-add-entry-panic@1.0.0 build
> rspack build

Panic occurred at runtime. Please file an issue on GitHub with the backtrace below: https://github.com/web-infra-dev/rspack/issues
Message:  should have module ordinal: /Users/bytedance/git/problem/rspack-virtual-modules-addentry-demo/entryLoader.js??ruleSet[1].rules[0].use[0]!/Users/bytedance/git/problem/rspack-virtual-modules-addentry-demo/entry.js
Location: crates/rspack_core/src/build_chunk_graph/new_code_splitter.rs:724

Backtrace omitted.

Run with RUST_BACKTRACE=1 environment variable to display it.
Run with RUST_BACKTRACE=full to include source snippets.
Abort trap: 6
```

```bash
$npm run build

> rspack-add-entry-panic@1.0.0 build
> rspack build

disk entry added
Rspack compiled successfully in 10 ms
```
