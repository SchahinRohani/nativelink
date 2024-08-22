{
  self,
  system,
}:
(import self.inputs.nixpkgs {inherit system;}).applyPatches {
  name = "nixpkgs-patched";
  src = self.inputs.nixpkgs;
  patches = [
    ./nixpkgs_link_libunwind_and_libcxx.diff
    ./nixpkgs_disable_ratehammering_pulumi_tests.diff
    ./nixpkgs_playwright.diff
  ];
}
