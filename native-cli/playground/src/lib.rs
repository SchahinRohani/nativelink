extern crate ocl;
extern crate chrono;

use chrono::prelude::*;
// use ocl::{Device, Platform, Result as OclResult};

use std::ffi::{CStr, CString};
use std::os::raw::c_char;
// use ocl::core::{DeviceInfo, DeviceType};

// #[no_mangle]
// pub extern "C" fn print_all_gpus() {
//     let _ = print_all_gpus_internal();
// }

#[no_mangle]
pub extern "C" fn print_all_gpus(msg: *const c_char) -> *const c_char {
    // Get the default platform
    let c_str = unsafe { CStr::from_ptr(msg) };
    let rust_str = c_str.to_str().unwrap_or("Invalid UTF-8 string");

    // Print the message
    println!("Message from Go in Rust: {}", rust_str);

    let message = "Hello from Rust!!!!";

    // Convert the Rust string to a CString and return a pointer to it
    let c_string = CString::new(message).unwrap();

    // Return a pointer to the C string
    c_string.into_raw()

    // let platform = Platform::default();
}

#[no_mangle]
pub extern "C" fn hello_from_rust() {
    let _ = hello_world();
}

#[no_mangle]
pub extern "C" fn print_current_time() {
    let local: DateTime<Local> = Local::now();
    println!("Current local time: {}", local);
}

// fn print_all_gpus_internal() {
//     println!("Trying to print devices...");

//     let platforms = Platform::list();
//     // for platform in platforms {
//     //     println!("Platform: {}", platform.name().unwrap());

//     //     let devices = Device::list_all(&platform).unwrap();
//     //     for device in devices {
//     //         println!("Device: {}", device.name().unwrap());
//     //     }
//     // }

//     println!("Done.");
// }

fn hello_world() {
    println!("Hello from {}!", "rust")
}
