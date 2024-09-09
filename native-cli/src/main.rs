extern crate ocl;

// use ocl::{Device, Platform, Result as OclResult};
// use ocl::core::{DeviceInfo, DeviceType};

// fn print_all_gpus() -> OclResult<()> {
//     let platforms = Platform::list();

//     println!("\n----------------------------------------");
//     println!("Available OpenCL Platforms and Devices:");
//     println!("----------------------------------------\n");

//     for (platform_idx, platform) in platforms.iter().enumerate() {
//         println!("🔹 Platform {}: {}", platform_idx + 1, platform.name()?);
//         println!("   Vendor    : {}", platform.vendor()?);
//         println!("   Version   : {}\n", platform.version()?);

//         let devices = Device::list_all(platform)?;
//         for (device_idx, device) in devices.iter().enumerate() {
//             println!("   ▶ Device {}: {}", device_idx + 1, device.name()?);

//             // Retrieve and print device type
//             let device_type = match device.info(DeviceInfo::Type)? {
//                 ocl::core::DeviceInfoResult::Type(t) => t,
//                 _ => DeviceType::empty(),
//             };

//             // Retrieve and print max compute units
//             let max_compute_units = match device.info(DeviceInfo::MaxComputeUnits)? {
//                 ocl::core::DeviceInfoResult::MaxComputeUnits(cu) => cu,
//                 _ => 0,
//             };

//             // Retrieve and print device vendor and extensions (useful to identify the "path")
//             let device_vendor = match device.info(DeviceInfo::Vendor)? {
//                 ocl::core::DeviceInfoResult::Vendor(vendor) => vendor,
//                 _ => "Unknown".to_string(),
//             };

//             let device_extensions = match device.info(DeviceInfo::Extensions)? {
//                 ocl::core::DeviceInfoResult::Extensions(ext) => {
//                     // Split the extensions into individual strings and sort them alphabetically
//                     let mut extensions: Vec<&str> = ext.split_whitespace().collect();
//                     extensions.sort();

//                     // Return the sorted and formatted extensions as a multi-line string
//                     extensions.join("\n        ")
//                 }
//                 _ => "None".to_string(),
//             };

//             println!("      Type     : {:?}", device_type);
//             println!("      Vendor   : {}", device_vendor);
//             println!("      Version  : {}", device.version()?);
//             println!("      Max Compute Units: {}", max_compute_units);
//             println!("      Extensions:\n        {}\n", device_extensions);
//         }
//         println!("----------------------------------------\n");
//     }

//     Ok(())
// }

// fn main() -> OclResult<()> {
//     print_all_gpus()
// }

fn main(){
        println!("HELLO")
}
