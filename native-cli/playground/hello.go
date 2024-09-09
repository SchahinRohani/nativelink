package main

/*
void hello_from_rust();
void print_current_time();
const char* print_all_gpus(const char* msg);
#include <stdlib.h>
*/
import "C"

import (
	"fmt"
	"unsafe"
)

func main() {
	C.hello_from_rust()
	fmt.Printf("Hello from %s\n", "golang")

	C.print_current_time()

	msg := C.CString("Hello from Go!")
	defer C.free(unsafe.Pointer(msg)) // Free the C string memory when done

	// Call the Rust function
	rustMessage := C.print_all_gpus(msg)
	// fmt.Printf("\n%s\n", "LOLoL")

	goMessage := C.GoString(rustMessage)

	// Print the message from Rust
	fmt.Printf("Got message from Rust: %s\n", goMessage)

	// Free the memory allocated for the C string in Rust
	C.free(unsafe.Pointer(rustMessage))
}
