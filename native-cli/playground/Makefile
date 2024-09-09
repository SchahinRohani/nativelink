# Define variables for paths
RUST_LIB_PATH = target/release
OPENCL_HEADERS_PATH = /nix/store/ks691pcsxliny36gmqb2wj3n6mw951l9-opencl-headers-2023.12.14/include
OPENCL_LIB_PATH = /nix/store/ii6ck8lqiigfwla7c8jz4g99p7nvv5rp-ocl-icd-2.3.2/lib

# Export CGO flags
export CGO_CFLAGS = -I$(OPENCL_HEADERS_PATH)
export CGO_LDFLAGS = -L$(RUST_LIB_PATH) -lrustgo -L$(OPENCL_LIB_PATH) -lOpenCL

# Default target: build Rust, then Go
all: build_rust build_go link

# Build the Rust library
build_rust:
	cargo build --release

# Compile Go code with CGO
build_go:
	go build -o bin/hello hello.go

# Link Go binary with Rust library and OpenCL
# link: hello.o
# 	go tool link -o rustgo -extld clang -buildmode exe -linkmode external -v hello.o -L$(RUST_LIB_PATH) -lrustgo -L$(OPENCL_LIB_PATH) -lOpenCL

# # Compile Go object
# hello.o: hello.go
# 	go tool compile -o hello.o hello.go

# Clean the build artifacts
clean:
	cargo clean
	rm -f hello.o bin/hello rustgo
