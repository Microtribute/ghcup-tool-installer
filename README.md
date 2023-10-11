# GHCUP Tools Installer

Generates the `ghcup install` commands for all of the available `ghcup` tools including `ghc`, `hls`, `cabal`, and `stack`.

## Run

- Run `ghcup list` and copy the entire output into [`input.txt`](input.txt).

    ```sh
    ghcup list
    ```

- The following command will read the [`input.txt`](input.txt) and output the command to `output.txt` which you can just paste into the command line tool of your choice.

    ```sh
    node index.js
    ```
