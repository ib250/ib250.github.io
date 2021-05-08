
let

  pkgs = import <nixpkgs> {};

  unlines = builtins.concatStringsSep "\n";

  denoInstallPlugins = { deno ? pkgs.deno, extras ? [] }:
  let
    denoRoot = "$PWD/.deno";
    denoInstallCmd = { name, url }: ''
      deno install --root ${denoRoot} --unstable -A -f -n ${name} ${url}
    '';

  in ''
    ${unlines (map denoInstallCmd extras)}
    export PATH=${denoRoot}/bin:$PATH
  '';

in pkgs.mkShell {

  shellHook = denoInstallPlugins {
      extras = [
        {
          name = "aleph";
          url = "https://deno.land/x/aleph@v0.3.0-alpha.32/cli.ts";
        }
      ];
  };

  buildInputs = [ pkgs.deno ];
}
