{ nixpkgsFn ? import ./nixpkgs.nix
, system ? null }:
let nixpkgs = nixpkgsFn ({
      # extra config goes here
    } // ( if system == null then {} else { inherit system; } ));
in
nixpkgs.stdenv.mkDerivation {
  name = "typescript-presentation";
  buildInputs = with nixpkgs; [ nodejs yarn git ];
  src = "./";

  builder = builtins.toFile "builder.sh" ''
    echo "Use this derivation with nix-shell only"

    exit 1
  '';

  shellHook = ''
    cd $src
    yarn
    export PATH=$src/node_modules/.bin:$PATH
    alias tc="yarn typecheck"
  '';
}


